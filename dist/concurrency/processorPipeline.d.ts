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
export declare const appendQueuePolicy: <T>(queue: T[], newItem: T) => T[];
export declare function dedupeQueuePolicy<T>(getKey: (item: T) => string, options?: DedupeQueuePolicyOptions<T>): QueuePolicy<T>;
export declare class PipelineSource<T> {
    readonly readable: ReadableStream<T>;
    private readonly _writer;
    constructor(options?: PipelineSourceOptions);
    enqueue(item: T): Promise<void>;
    enqueueAll(items: Iterable<T>): Promise<void>;
    close(): Promise<void>;
    pipeThrough<U>(stage: ProcessorStage<T, U>): ReadableStream<U>;
    pipeTo(endpoint: PipelineEndpoint<T>): Promise<void>;
}
export declare class ProcessorStage<T, U> extends TransformStream<T, U> {
    constructor(processor: BatchProcessor<T, U>, options?: ProcessorStageOptions<T>);
}
export declare function createPipelineSource<T>(options?: PipelineSourceOptions): PipelineSource<T>;
export declare function createProcessorStage<T, U>(processor: BatchProcessor<T, U>, options?: ProcessorStageOptions<T>): ProcessorStage<T, U>;
export declare function createSink<T>(processor: (items: T[]) => Promise<void> | void, batchSize?: number): WritableStream<T>;
export declare function connectPipeline<T, U>(source: ReadableStream<T>, stage: ProcessorStage<T, U>): ReadableStream<U>;
export declare class QueueProcessorShim<T, U> {
    private readonly _processor;
    private readonly _batchSize;
    private readonly _concurrency;
    private readonly _delay;
    private _queue;
    private readonly _idleWaiters;
    private _downstream?;
    private _root;
    private _runningBatches;
    private _isSuspended;
    private _queuePolicy;
    private _delayTimer?;
    constructor(processor: BatchProcessor<T, U>, options?: QueueProcessorShimOptions<T, U>, items?: T[], queuePolicy?: QueuePolicy<T>);
    get root(): QueueProcessorShim<any, any>;
    get writable(): WritableStream<T>;
    get isSuspended(): boolean;
    enqueue(item: T): this;
    enqueueAll(items: Iterable<T>): this;
    replaceEnqueueProcessor(queuePolicy: QueuePolicy<T>): this;
    pipeTo<V>(downstream: QueueProcessorShim<U, V>): QueueProcessorShim<U, V>;
    resume(): this;
    resumePipeLine(): this;
    startPipeline(): this;
    waitForAllProcessed(timeout?: number): Promise<boolean>;
    waitForAllDoneAndTerminate(timeout?: number): Promise<boolean>;
    terminate(): void;
    private _schedule;
    private _runNextBatch;
    private _forceFlushPipeline;
    private _isIdle;
    private _waitForIdle;
    private _notifyIdleIfNeeded;
}
