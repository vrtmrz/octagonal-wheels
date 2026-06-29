export type ProcessorResult<T> = Promise<T[] | undefined | void> | T[] | undefined | void;
export type BatchProcessor<T, U> = (items: T[]) => ProcessorResult<U>;
export type QueuePolicy<T> = (queue: T[], newItem: T) => T[];
export type DedupeQueuePolicyOptions<T> = {
    onReplace?: (queuedItem: T, newItem: T) => void;
    onEnqueue?: (newItem: T) => void;
};

export type PipelineSourceOptions = {
    highWaterMark?: number;
};

export type ProcessorStageOptions<T> = {
    batchSize?: number;
    queuePolicy?: QueuePolicy<T>;
    flushDelay?: number;
};

export type QueueProcessorShimOptions<T, U> = ProcessorStageOptions<T> & {
    concurrentLimit?: number;
    delay?: number;
    suspended?: boolean;
    pipeTo?: QueueProcessorShim<U, any>;
};

export type PipelineEndpoint<T> = {
    writable: WritableStream<T>;
};

export const appendQueuePolicy = <T>(queue: T[], newItem: T): T[] => {
    queue.push(newItem);
    return queue;
};

export function dedupeQueuePolicy<T>(
    getKey: (item: T) => string,
    options: DedupeQueuePolicyOptions<T> = {}
): QueuePolicy<T> {
    return (queue, newItem) => {
        const key = getKey(newItem);
        const newQueue: T[] = [];
        for (const item of queue) {
            if (getKey(item) === key) {
                options.onReplace?.(item, newItem);
            } else {
                newQueue.push(item);
            }
        }
        options.onEnqueue?.(newItem);
        newQueue.push(newItem);
        return newQueue;
    };
}

export class PipelineSource<T> {
    readonly readable: ReadableStream<T>;
    private readonly _writer: WritableStreamDefaultWriter<T>;

    constructor(options: PipelineSourceOptions = {}) {
        const stream = new TransformStream<T, T>(undefined, undefined, {
            highWaterMark: options.highWaterMark ?? 1,
        });
        this.readable = stream.readable;
        this._writer = stream.writable.getWriter();
    }

    async enqueue(item: T): Promise<void> {
        await this._writer.ready;
        await this._writer.write(item);
    }

    async enqueueAll(items: Iterable<T>): Promise<void> {
        for (const item of items) {
            await this.enqueue(item);
        }
    }

    async close(): Promise<void> {
        await this._writer.close();
    }

    pipeThrough<U>(stage: ProcessorStage<T, U>): ReadableStream<U> {
        return this.readable.pipeThrough(stage);
    }

    pipeTo(endpoint: PipelineEndpoint<T>): Promise<void> {
        return this.readable.pipeTo(endpoint.writable);
    }
}

export class ProcessorStage<T, U> extends TransformStream<T, U> {
    constructor(processor: BatchProcessor<T, U>, options: ProcessorStageOptions<T> = {}) {
        const batchSize = options.batchSize ?? 1;
        const queuePolicy = options.queuePolicy ?? appendQueuePolicy<T>;
        const flushDelay = options.flushDelay;
        if (batchSize <= 0) throw new TypeError("batchSize must be greater than 0");

        let queue: T[] = [];
        let flushTimer: ReturnType<typeof setTimeout> | undefined;
        let drainChain: Promise<void> = Promise.resolve();

        const drain = async (controller: TransformStreamDefaultController<U>, force: boolean) => {
            while (queue.length >= batchSize || (force && queue.length !== 0)) {
                const batch = queue.splice(0, batchSize);
                const result = await processor(batch);
                if (result) {
                    for (const item of result) {
                        controller.enqueue(item);
                    }
                }
            }
        };
        const runDrain = (controller: TransformStreamDefaultController<U>, force: boolean) => {
            drainChain = drainChain.then(() => drain(controller, force));
            return drainChain;
        };
        const clearFlushTimer = () => {
            if (flushTimer !== undefined) {
                clearTimeout(flushTimer);
                flushTimer = undefined;
            }
        };

        super({
            async transform(item, controller) {
                queue = queuePolicy(queue, item);
                if (queue.length >= batchSize) {
                    clearFlushTimer();
                    await runDrain(controller, false);
                } else if (flushDelay !== undefined && flushTimer === undefined) {
                    flushTimer = setTimeout(() => {
                        flushTimer = undefined;
                        void runDrain(controller, true);
                    }, flushDelay);
                }
            },
            async flush(controller) {
                clearFlushTimer();
                await runDrain(controller, true);
            },
        });
    }
}

export function createPipelineSource<T>(options?: PipelineSourceOptions): PipelineSource<T> {
    return new PipelineSource<T>(options);
}

export function createProcessorStage<T, U>(
    processor: BatchProcessor<T, U>,
    options?: ProcessorStageOptions<T>
): ProcessorStage<T, U> {
    return new ProcessorStage(processor, options);
}

export function createSink<T>(processor: (items: T[]) => Promise<void> | void, batchSize = 1): WritableStream<T> {
    if (batchSize <= 0) throw new TypeError("batchSize must be greater than 0");
    const queue: T[] = [];
    const drain = async (force: boolean) => {
        while (queue.length >= batchSize || (force && queue.length !== 0)) {
            await processor(queue.splice(0, batchSize));
        }
    };
    return new WritableStream<T>({
        async write(item) {
            queue.push(item);
            await drain(false);
        },
        async close() {
            await drain(true);
        },
    });
}

export function connectPipeline<T, U>(source: ReadableStream<T>, stage: ProcessorStage<T, U>): ReadableStream<U> {
    return source.pipeThrough(stage);
}

export class QueueProcessorShim<T, U> {
    private readonly _processor: BatchProcessor<T, U>;
    private readonly _batchSize: number;
    private readonly _concurrency: number;
    private readonly _delay: number;
    private _queue: T[] = [];
    private readonly _idleWaiters = new Set<() => void>();
    private _downstream?: QueueProcessorShim<U, any>;
    private _root: QueueProcessorShim<any, any> = this;
    private _runningBatches = 0;
    private _isSuspended: boolean;
    private _queuePolicy: QueuePolicy<T>;
    private _delayTimer?: ReturnType<typeof setTimeout>;

    constructor(
        processor: BatchProcessor<T, U>,
        options: QueueProcessorShimOptions<T, U> = {},
        items?: T[],
        queuePolicy?: QueuePolicy<T>
    ) {
        this._processor = processor;
        this._batchSize = options.batchSize ?? 1;
        this._concurrency = options.concurrentLimit ?? 1;
        this._delay = options.delay ?? 0;
        this._isSuspended = options.suspended ?? false;
        this._queuePolicy = queuePolicy ?? options.queuePolicy ?? appendQueuePolicy;
        if (options.pipeTo) {
            this.pipeTo(options.pipeTo);
        }
        if (items) {
            this.enqueueAll(items);
        }
    }

    get root(): QueueProcessorShim<any, any> {
        return this._root;
    }

    get writable(): WritableStream<T> {
        return new WritableStream<T>({
            write: (item) => {
                this.enqueue(item);
            },
        });
    }

    get isSuspended(): boolean {
        return this._isSuspended;
    }

    enqueue(item: T): this {
        this._queue = this._queuePolicy([...this._queue], item);
        this._schedule();
        return this;
    }

    enqueueAll(items: Iterable<T>): this {
        for (const item of items) {
            this.enqueue(item);
        }
        return this;
    }

    replaceEnqueueProcessor(queuePolicy: QueuePolicy<T>): this {
        this._queuePolicy = queuePolicy;
        return this;
    }

    pipeTo<V>(downstream: QueueProcessorShim<U, V>): QueueProcessorShim<U, V> {
        this._downstream = downstream;
        downstream._root = this.root;
        return downstream;
    }

    resume(): this {
        this._isSuspended = false;
        this._schedule();
        return this;
    }

    resumePipeLine(): this {
        this._downstream?.resumePipeLine();
        return this.resume();
    }

    startPipeline(): this {
        this.root.resumePipeLine();
        return this;
    }

    async waitForAllProcessed(timeout?: number): Promise<boolean> {
        if (this.root !== this) {
            return this.root.waitForAllProcessed(timeout);
        }
        this.startPipeline();
        this._forceFlushPipeline();
        if (timeout === undefined) {
            await this._waitForIdle();
            return true;
        }
        return await Promise.race([
            this._waitForIdle().then(() => true),
            new Promise<false>((r) => setTimeout(() => r(false), timeout)),
        ]);
    }

    async waitForAllDoneAndTerminate(timeout?: number): Promise<boolean> {
        const result = await this.waitForAllProcessed(timeout);
        this.terminate();
        return result;
    }

    terminate(): void {
        this._queue.length = 0;
        if (this._delayTimer) {
            clearTimeout(this._delayTimer);
            this._delayTimer = undefined;
        }
        this._downstream?.terminate();
        this._notifyIdleIfNeeded();
    }

    private _schedule(): void {
        if (this._isSuspended) return;
        if (this._runningBatches >= this._concurrency) return;
        if (this._queue.length >= this._batchSize) {
            this._runNextBatch();
            return;
        }
        if (this._queue.length === 0) {
            this._notifyIdleIfNeeded();
            return;
        }
        if (this._delayTimer !== undefined) return;
        this._delayTimer = setTimeout(() => {
            this._delayTimer = undefined;
            this._runNextBatch();
        }, this._delay);
    }

    private _runNextBatch(): void {
        if (this._isSuspended) return;
        if (this._queue.length === 0) {
            this._notifyIdleIfNeeded();
            return;
        }
        const batch = this._queue.splice(0, this._batchSize);
        this._runningBatches++;
        void Promise.resolve(this._processor(batch))
            .then((result) => {
                if (result && this._downstream) {
                    this._downstream.enqueueAll(result);
                    this._downstream.startPipeline();
                }
            })
            .finally(() => {
                this._runningBatches--;
                this._schedule();
                this._notifyIdleIfNeeded();
            });
    }

    private _forceFlushPipeline(): void {
        if (this._delayTimer) {
            clearTimeout(this._delayTimer);
            this._delayTimer = undefined;
        }
        if (!this._isSuspended && this._queue.length !== 0 && this._runningBatches < this._concurrency) {
            this._runNextBatch();
        }
        this._downstream?._forceFlushPipeline();
    }

    private _isIdle(): boolean {
        if (this._queue.length !== 0) return false;
        if (this._runningBatches !== 0) return false;
        if (this._downstream && !this._downstream._isIdle()) return false;
        return true;
    }

    private _waitForIdle(): Promise<void> {
        if (this._isIdle()) return Promise.resolve();
        return new Promise((resolve) => {
            this._idleWaiters.add(resolve);
        });
    }

    private _notifyIdleIfNeeded(): void {
        if (this.root !== this) {
            this.root._notifyIdleIfNeeded();
        }
        if (!this._isIdle()) return;
        for (const resolve of this._idleWaiters) {
            resolve();
        }
        this._idleWaiters.clear();
    }
}
