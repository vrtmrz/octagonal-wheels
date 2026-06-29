export type StreamInboxOverflowPolicy = "reject" | "drop-newest";

export type StreamInboxOptions = {
    capacity?: number;
    overflowPolicy?: StreamInboxOverflowPolicy;
};

export class StreamInbox<T> {
    readonly readable: ReadableStream<T>;
    private readonly _capacity: number;
    private readonly _overflowPolicy: StreamInboxOverflowPolicy;
    private readonly _queue: T[] = [];
    private _controller?: ReadableStreamDefaultController<T>;
    private _isClosed = false;
    private _isControllerClosed = false;

    constructor(options: StreamInboxOptions = {}) {
        const capacity = options.capacity ?? 1;
        if (capacity <= 0) throw new TypeError("capacity must be greater than 0");
        this._capacity = capacity;
        this._overflowPolicy = options.overflowPolicy ?? "reject";
        this.readable = new ReadableStream<T>(
            {
                start: (controller) => {
                    this._controller = controller;
                    this._drain();
                },
                pull: () => {
                    this._drain();
                },
                cancel: () => {
                    this._isClosed = true;
                    this._queue.length = 0;
                },
            },
            { highWaterMark: capacity }
        );
    }

    get size(): number {
        const desiredSize = this._controller?.desiredSize ?? this._capacity;
        const streamQueued = Math.max(0, this._capacity - desiredSize);
        return this._queue.length + streamQueued;
    }

    get free(): number {
        return this._capacity - this.size;
    }

    get isFull(): boolean {
        return this.free <= 0;
    }

    get isClosed(): boolean {
        return this._isClosed;
    }

    post(item: T): boolean {
        if (this._isClosed) return false;
        if (!this.isFull) {
            this._queue.push(item);
            this._drain();
            return true;
        }
        if (this._overflowPolicy === "drop-newest") return false;
        return false;
    }

    close(): void {
        if (this._isClosed) return;
        this._isClosed = true;
        this._drain();
        if (this._queue.length === 0) {
            this._closeController();
        }
    }

    error(reason?: unknown): void {
        if (this._isClosed) return;
        this._isClosed = true;
        this._queue.length = 0;
        this._controller?.error(reason);
    }

    private _drain(): void {
        if (!this._controller) return;
        while (this._queue.length !== 0 && (this._controller.desiredSize ?? 0) > 0) {
            const item = this._queue[0];
            this._queue.shift();
            this._controller.enqueue(item);
        }
        if (this._isClosed && this._queue.length === 0) {
            this._closeController();
        }
    }

    private _closeController(): void {
        if (this._isControllerClosed) return;
        this._isControllerClosed = true;
        this._controller?.close();
    }
}

export function createStreamInbox<T>(options?: StreamInboxOptions): StreamInbox<T> {
    return new StreamInbox<T>(options);
}
