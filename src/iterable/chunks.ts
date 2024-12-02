import { GeneratorSource } from "./source";

type ChunkProcessOptions = {
    /**
     * The number of items to be packed into a single chunk.
     */
    unit: number;
    /**
     * The maximum time to wait for the next chunk to be filled.
     * If the timeout is reached, the current chunk will be yielded partially.
     * This counted from the last item has been enqueued.
     * Empty chunks will not be yielded.
     */
    timeout?: number;
    /**
     * The minimum time to wait before yielding the next chunk.
     * If chunks are filled before the interval passes, yielding will be delayed.
     * This counted from the last chunk has been yielded.
     */
    interval?: number;
};
const FINISHED = Symbol("finished");

/**
 * async generator that yields chunks of items from the source.
 * @param source
 * @param {ChunkProcessOptions} options
 */
export async function* asChunk<T>(source: Iterable<T> | AsyncIterable<T>, { unit, timeout, interval }: ChunkProcessOptions): AsyncIterable<T[]> {
    const outputSource = new GeneratorSource<T[] | typeof FINISHED>();
    const pBuffer: T[] = [];
    let previousYielded = 0;
    let timeoutTimer: ReturnType<typeof setTimeout> | undefined = undefined;

    const scheduleTimeout = () => {
        if (timeout) {
            if (!timeoutTimer) {
                clearTimeout(timeoutTimer);
            }
            timeoutTimer = setTimeout(() => {
                flush(false);
                timeoutTimer = undefined;
            }, timeout);
        }
    };
    const enqueueItem = (item: T) => {
        pBuffer.push(item);
        if (pBuffer.length >= unit) {
            flush(false);
        }
    };
    const flush = (done: boolean) => {
        const flushTo = done ? 0 : unit;
        while (pBuffer.length >= flushTo) {
            const chunk = pBuffer.splice(0, unit);
            if (chunk.length === 0) {
                break;
            }
            outputSource.enqueue(chunk);
        }
        if (done) {
            outputSource.enqueue(FINISHED);
        }
    };

    void (async () => {
        for await (const item of source) {
            enqueueItem(item);
        }
        flush(true);
    })();

    for await (const chunk of outputSource) {
        if (chunk === FINISHED) {
            break;
        }
        scheduleTimeout();
        if (interval) {
            const now = Date.now();
            const elapsed = now - previousYielded;
            if (elapsed < interval) {
                await new Promise(resolve => setTimeout(resolve, interval - elapsed));
            }
        }
        yield chunk;
        previousYielded = Date.now();
    }
    // Cleanup
    if (timeoutTimer) {
        clearTimeout(timeoutTimer);
    }
    outputSource.dispose();
}

/**
 * Flattens nested async or sync iterables.
 * The counterpart to `asChunk`.
 * @param source 
 */
export async function* asFlat<T>(source: AsyncIterable<AsyncIterable<T> | Iterable<T>>): AsyncIterable<T> {
    for await (const chunk of source) {
        for await (const item of chunk) {
            yield item;
        }
    }
}