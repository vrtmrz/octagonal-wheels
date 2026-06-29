export type StreamInboxOverflowPolicy = "reject" | "drop-newest";
export type StreamInboxOptions = {
    capacity?: number;
    overflowPolicy?: StreamInboxOverflowPolicy;
};
export declare class StreamInbox<T> {
    readonly readable: ReadableStream<T>;
    private readonly _capacity;
    private readonly _overflowPolicy;
    private readonly _queue;
    private _controller?;
    private _isClosed;
    private _isControllerClosed;
    constructor(options?: StreamInboxOptions);
    get size(): number;
    get free(): number;
    get isFull(): boolean;
    get isClosed(): boolean;
    post(item: T): boolean;
    close(): void;
    error(reason?: unknown): void;
    private _drain;
    private _closeController;
}
export declare function createStreamInbox<T>(options?: StreamInboxOptions): StreamInbox<T>;
