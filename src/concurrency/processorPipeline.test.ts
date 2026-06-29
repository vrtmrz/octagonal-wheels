import { describe, expect, it } from "vitest";

import { delay } from "../promises.ts";
import {
    connectPipeline,
    createPipelineSource,
    createProcessorStage,
    createSink,
    dedupeQueuePolicy,
    QueueProcessorShim,
} from "./processorPipeline.ts";

describe("stream based processor pipeline", () => {
    it("uses a source stage for enqueueing and processor stages for batch work", async () => {
        const source = createPipelineSource<number>();
        const batches: number[][] = [];
        const processed: string[] = [];
        const stage = createProcessorStage<number, string>(
            async (items) => {
                batches.push(items);
                return items.map((item) => `item-${item}`);
            },
            { batchSize: 3 }
        );
        const sink = createSink<string>((items) => processed.push(...items), 10);
        const done = connectPipeline(source.readable, stage).pipeTo(sink);

        await source.enqueueAll([1, 2, 3, 4, 5, 6, 7]);
        await source.close();
        await done;

        expect(batches).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
        expect(processed).toEqual(["item-1", "item-2", "item-3", "item-4", "item-5", "item-6", "item-7"]);
    });

    it("waits through backpressure when the downstream is slow", async () => {
        const source = createPipelineSource<number>({ highWaterMark: 1 });
        const sink = createSink<number>(async () => {
            await delay(40);
        });
        const done = source.readable.pipeTo(sink);

        const started = Date.now();
        await source.enqueueAll([1, 2, 3, 4]);
        await source.close();
        await done;

        expect(Date.now() - started).toBeGreaterThanOrEqual(80);
    });

    it("can wait until a downstream is connected by using zero buffering", async () => {
        const source = createPipelineSource<number>({ highWaterMark: 0 });
        let completed = false;
        const write = source.enqueue(1).then(() => {
            completed = true;
        });

        await delay(20);
        expect(completed).toBe(false);

        const received: number[] = [];
        const done = source.readable.pipeTo(createSink<number>((items) => received.push(...items)));

        await write;
        await source.close();
        await done;

        expect(received).toEqual([1]);
    });

    it("can fan in multiple producers through the source stage", async () => {
        const source = createPipelineSource<number>();
        const received: number[] = [];
        const done = source.readable.pipeTo(createSink<number>((items) => received.push(...items), 10));

        await Promise.all([source.enqueueAll([1, 2]), source.enqueueAll([3, 4])]);
        await source.close();
        await done;

        expect(received.sort()).toEqual([1, 2, 3, 4]);
    });

    it("can deduplicate queued items inside a processor stage", async () => {
        const source = createPipelineSource<{ key: string; value: number }>();
        const received: { key: string; value: number }[] = [];
        const replaced: { oldValue: number; newValue: number }[] = [];
        const enqueued: number[] = [];
        const stage = createProcessorStage<{ key: string; value: number }, { key: string; value: number }>(
            (items) => items,
            {
                batchSize: 10,
                queuePolicy: dedupeQueuePolicy((item) => item.key, {
                    onReplace: (oldItem, newItem) =>
                        replaced.push({ oldValue: oldItem.value, newValue: newItem.value }),
                    onEnqueue: (item) => enqueued.push(item.value),
                }),
            }
        );
        const done = source.readable.pipeThrough(stage).pipeTo(createSink((items) => received.push(...items), 10));

        await source.enqueue({ key: "a", value: 1 });
        await source.enqueue({ key: "b", value: 2 });
        await source.enqueue({ key: "b", value: 3 });
        await source.enqueue({ key: "c", value: 4 });
        await source.close();
        await done;

        expect(received).toEqual([
            { key: "a", value: 1 },
            { key: "b", value: 3 },
            { key: "c", value: 4 },
        ]);
        expect(replaced).toEqual([{ oldValue: 2, newValue: 3 }]);
        expect(enqueued).toEqual([1, 2, 3, 4]);
    });
});

describe("QueueProcessorShim", () => {
    it("supports constructor-based migration from QueueProcessor pipelines", async () => {
        const received: string[] = [];
        const root = new QueueProcessorShim<number, string>(
            (items) => items.map((item) => `item-${item}`),
            { batchSize: 2, suspended: true },
            [1, 2, 3]
        ).pipeTo(
            new QueueProcessorShim<string, never>(
                (items) => {
                    received.push(...items);
                },
                { batchSize: 10, suspended: true }
            )
        );

        expect(await root.startPipeline().waitForAllProcessed(1000)).toBe(true);
        expect(received).toEqual(["item-1", "item-2", "item-3"]);
    });

    it("supports replacing the queue policy for deduplication", async () => {
        const received: string[] = [];
        const processor = new QueueProcessorShim<string, never>(
            (items) => {
                received.push(...items);
            },
            { batchSize: 10, suspended: false }
        ).replaceEnqueueProcessor((queue, item) => [...queue.filter((queued) => queued !== item), item]);

        processor.enqueue("a").enqueue("b").enqueue("b").enqueue("c");

        expect(await processor.waitForAllProcessed(1000)).toBe(true);
        expect(received).toEqual(["a", "b", "c"]);
    });
});
