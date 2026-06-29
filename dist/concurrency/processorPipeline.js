const appendQueuePolicy = (queue, newItem) => {
    queue.push(newItem);
    return queue;
};
function dedupeQueuePolicy(getKey, options = {}) {
    return (queue, newItem) => {
        const key = getKey(newItem);
        const newQueue = [];
        for (const item of queue) {
            if (getKey(item) === key) {
                options.onReplace?.(item, newItem);
            }
            else {
                newQueue.push(item);
            }
        }
        options.onEnqueue?.(newItem);
        newQueue.push(newItem);
        return newQueue;
    };
}
class PipelineSource {
    constructor(options = {}) {
        Object.defineProperty(this, "readable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_writer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const stream = new TransformStream(undefined, undefined, {
            highWaterMark: options.highWaterMark ?? 1,
        });
        this.readable = stream.readable;
        this._writer = stream.writable.getWriter();
    }
    async enqueue(item) {
        await this._writer.ready;
        await this._writer.write(item);
    }
    async enqueueAll(items) {
        for (const item of items) {
            await this.enqueue(item);
        }
    }
    async close() {
        await this._writer.close();
    }
    pipeThrough(stage) {
        return this.readable.pipeThrough(stage);
    }
    pipeTo(endpoint) {
        return this.readable.pipeTo(endpoint.writable);
    }
}
class ProcessorStage extends TransformStream {
    constructor(processor, options = {}) {
        const batchSize = options.batchSize ?? 1;
        const queuePolicy = options.queuePolicy ?? (appendQueuePolicy);
        const flushDelay = options.flushDelay;
        if (batchSize <= 0)
            throw new TypeError("batchSize must be greater than 0");
        let queue = [];
        let flushTimer;
        let drainChain = Promise.resolve();
        const drain = async (controller, force) => {
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
        const runDrain = (controller, force) => {
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
                }
                else if (flushDelay !== undefined && flushTimer === undefined) {
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
function createPipelineSource(options) {
    return new PipelineSource(options);
}
function createProcessorStage(processor, options) {
    return new ProcessorStage(processor, options);
}
function createSink(processor, batchSize = 1) {
    if (batchSize <= 0)
        throw new TypeError("batchSize must be greater than 0");
    const queue = [];
    const drain = async (force) => {
        while (queue.length >= batchSize || (force && queue.length !== 0)) {
            await processor(queue.splice(0, batchSize));
        }
    };
    return new WritableStream({
        async write(item) {
            queue.push(item);
            await drain(false);
        },
        async close() {
            await drain(true);
        },
    });
}
function connectPipeline(source, stage) {
    return source.pipeThrough(stage);
}
class QueueProcessorShim {
    constructor(processor, options = {}, items, queuePolicy) {
        Object.defineProperty(this, "_processor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_batchSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_concurrency", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_delay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "_idleWaiters", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "_downstream", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this
        });
        Object.defineProperty(this, "_runningBatches", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_isSuspended", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_queuePolicy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_delayTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
    get root() {
        return this._root;
    }
    get writable() {
        return new WritableStream({
            write: (item) => {
                this.enqueue(item);
            },
        });
    }
    get isSuspended() {
        return this._isSuspended;
    }
    enqueue(item) {
        this._queue = this._queuePolicy([...this._queue], item);
        this._schedule();
        return this;
    }
    enqueueAll(items) {
        for (const item of items) {
            this.enqueue(item);
        }
        return this;
    }
    replaceEnqueueProcessor(queuePolicy) {
        this._queuePolicy = queuePolicy;
        return this;
    }
    pipeTo(downstream) {
        this._downstream = downstream;
        downstream._root = this.root;
        return downstream;
    }
    resume() {
        this._isSuspended = false;
        this._schedule();
        return this;
    }
    resumePipeLine() {
        this._downstream?.resumePipeLine();
        return this.resume();
    }
    startPipeline() {
        this.root.resumePipeLine();
        return this;
    }
    async waitForAllProcessed(timeout) {
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
            new Promise((r) => setTimeout(() => r(false), timeout)),
        ]);
    }
    async waitForAllDoneAndTerminate(timeout) {
        const result = await this.waitForAllProcessed(timeout);
        this.terminate();
        return result;
    }
    terminate() {
        this._queue.length = 0;
        if (this._delayTimer) {
            clearTimeout(this._delayTimer);
            this._delayTimer = undefined;
        }
        this._downstream?.terminate();
        this._notifyIdleIfNeeded();
    }
    _schedule() {
        if (this._isSuspended)
            return;
        if (this._runningBatches >= this._concurrency)
            return;
        if (this._queue.length >= this._batchSize) {
            this._runNextBatch();
            return;
        }
        if (this._queue.length === 0) {
            this._notifyIdleIfNeeded();
            return;
        }
        if (this._delayTimer !== undefined)
            return;
        this._delayTimer = setTimeout(() => {
            this._delayTimer = undefined;
            this._runNextBatch();
        }, this._delay);
    }
    _runNextBatch() {
        if (this._isSuspended)
            return;
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
    _forceFlushPipeline() {
        if (this._delayTimer) {
            clearTimeout(this._delayTimer);
            this._delayTimer = undefined;
        }
        if (!this._isSuspended && this._queue.length !== 0 && this._runningBatches < this._concurrency) {
            this._runNextBatch();
        }
        this._downstream?._forceFlushPipeline();
    }
    _isIdle() {
        if (this._queue.length !== 0)
            return false;
        if (this._runningBatches !== 0)
            return false;
        if (this._downstream && !this._downstream._isIdle())
            return false;
        return true;
    }
    _waitForIdle() {
        if (this._isIdle())
            return Promise.resolve();
        return new Promise((resolve) => {
            this._idleWaiters.add(resolve);
        });
    }
    _notifyIdleIfNeeded() {
        if (this.root !== this) {
            this.root._notifyIdleIfNeeded();
        }
        if (!this._isIdle())
            return;
        for (const resolve of this._idleWaiters) {
            resolve();
        }
        this._idleWaiters.clear();
    }
}

export { PipelineSource, ProcessorStage, QueueProcessorShim, appendQueuePolicy, connectPipeline, createPipelineSource, createProcessorStage, createSink, dedupeQueuePolicy };
//# sourceMappingURL=processorPipeline.js.map
