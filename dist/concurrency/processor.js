import { Logger, LOG_LEVEL_VERBOSE } from '../common/logger.js';
import { RESULT_TIMED_OUT } from '../common/const.js';
import { promiseWithResolver, noop, delay, yieldNextMicrotask, fireAndForget } from '../promises.js';

class Notifier {
    constructor() {
        Object.defineProperty(this, "_p", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: promiseWithResolver()
        });
        Object.defineProperty(this, "isUsed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    notify() {
        if (!this.isUsed) {
            return;
        }
        this.isUsed = false;
        this._p.promise.finally(noop);
        this._p.resolve();
        this._p = promiseWithResolver();
    }
    get nextNotify() {
        this.isUsed = true;
        return this._p.promise;
    }
}
let processNo = 0;
const allRunningProcessors = new Set([]);
class QueueProcessor {
    get nowProcessing() {
        return this.processingEntities;
    }
    get totalNowProcessing() {
        return this.nowProcessing + (this._pipeTo?.totalNowProcessing || 0);
    }
    get remaining() {
        return this._queue.length + this.processingEntities + this.waitingEntries;
    }
    get totalRemaining() {
        return this.remaining + (this._pipeTo?.totalRemaining || 0);
    }
    updateStatus(setFunc) {
        setFunc();
        this._updateReactiveSource();
    }
    suspend() {
        this._isSuspended = true;
        this._notifier.notify();
        return this;
    }
    resume() {
        this._isSuspended = false;
        this._notifier.notify();
        this.requestNextFlush();
        this._run();
        return this;
    }
    resumePipeLine() {
        this._pipeTo?.resumePipeLine();
        this.resume();
        return this;
    }
    startPipeline() {
        this.root.resumePipeLine();
        return this;
    }
    get root() {
        if (this._root === undefined) {
            return this;
        }
        return this._root;
    }
    constructor(processor, params, items, enqueueProcessor) {
        Object.defineProperty(this, "_queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "_processor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_enqueueProcessor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (queue, entity) => (queue.push(entity), queue)
        });
        Object.defineProperty(this, "_isSuspended", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "_nextProcessNeedsImmediate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_pipeTo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_waitId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        Object.defineProperty(this, "_instance", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: processNo++
        });
        Object.defineProperty(this, "_remainingReactiveSource", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_totalRemainingReactiveSource", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_processingEntitiesReactiveSource", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_keepResultUntilDownstreamConnected", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_keptResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "_runOnUpdateBatch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => { }
        });
        // Parameters
        // How many processes running concurrently
        Object.defineProperty(this, "concurrentLimit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        // How many entries processed at once
        Object.defineProperty(this, "batchSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        // How many entries kept in before the delay
        Object.defineProperty(this, "yieldThreshold", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        // If set, wait for set milliseconds after enqueued
        // Note: If reached to the batchSize, run immediately
        Object.defineProperty(this, "delay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "maintainDelay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "interval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        // This means numbers of the entities which are now processing
        Object.defineProperty(this, "processingEntities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        // This means numbers of the entries which dequeued from the queue but not processed yet.
        Object.defineProperty(this, "waitingEntries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_notifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Notifier()
        });
        Object.defineProperty(this, "_processingBatches", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "addProcessingBatch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (value) => {
                const r = this._processingBatches.add(value);
                this._updateBatchProcessStatus();
                return r;
            }
        });
        Object.defineProperty(this, "deleteProcessingBatch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (value) => {
                const r = this._processingBatches.delete(value);
                this._updateBatchProcessStatus();
                return r;
            }
        });
        Object.defineProperty(this, "_processing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this._root = this;
        this._processor = processor;
        this.batchSize = params?.batchSize ?? 1;
        this.yieldThreshold = params?.yieldThreshold ?? params?.batchSize ?? 0;
        this.concurrentLimit = params?.concurrentLimit ?? 1;
        this.delay = params?.delay ?? 0;
        this.maintainDelay = params?.maintainDelay ?? false;
        this.interval = params?.interval ?? 0;
        if (params?.keepResultUntilDownstreamConnected)
            this._keepResultUntilDownstreamConnected = params.keepResultUntilDownstreamConnected;
        if (params?.remainingReactiveSource)
            this._remainingReactiveSource = params?.remainingReactiveSource;
        if (params?.totalRemainingReactiveSource)
            this._totalRemainingReactiveSource = params?.totalRemainingReactiveSource;
        if (params?.processingEntitiesReactiveSource)
            this._processingEntitiesReactiveSource = params?.processingEntitiesReactiveSource;
        if (params?.suspended !== undefined)
            this._isSuspended = params?.suspended;
        if (enqueueProcessor)
            this.replaceEnqueueProcessor(enqueueProcessor);
        if (params?.pipeTo !== undefined) {
            this.pipeTo(params.pipeTo);
        }
        if (items)
            this.enqueueAll(items);
        allRunningProcessors.add(this);
        this._run();
    }
    /**
     * replace enqueue logic.
     * @param processor enqueue logic. this should return new queue.
     * @returns
     */
    replaceEnqueueProcessor(processor) {
        this._enqueueProcessor = processor;
        return this;
    }
    /**
     * Modify the queue by force.
     * @param processor
     * @remarks I know that you have known this is very dangerous.
     */
    modifyQueue(processor) {
        this._queue = processor(this._queue);
        this._notifier.notify();
    }
    /**
     * Clear the queue
     * @remarks I know that you have known this is very dangerous.
     */
    clearQueue() {
        this._queue = [];
        this._notifier.notify();
    }
    /**
     * Set the handler for when the queue has been modified
     * @param proc
     * @returns
     */
    onUpdateProgress(proc) {
        this._runOnUpdateBatch = proc;
        return this;
    }
    /**
     * Join another processor
     * @param pipeTo
     * @returns
     */
    pipeTo(pipeTo) {
        this._pipeTo = pipeTo;
        this._pipeTo._root = this.root;
        // If something buffered, send to the downstream.
        if (this._keptResult.length > 0) {
            const temp = [...this._keptResult];
            this._keptResult = [];
            this._pipeTo.enqueueAll(temp);
        }
        return pipeTo;
    }
    isIdle() {
        return this._isIdle() && (!this._pipeTo ? true : this._pipeTo.isIdle());
    }
    _isIdle() {
        return this.totalRemaining == 0;
    }
    async _idleDetector() {
        if (this._isSuspended)
            return Promise.resolve();
        if (this._isIdle())
            return Promise.resolve();
        do {
            await Promise.race([delay(3000), this._notifier.nextNotify]);
        } while (!this._isIdle());
        return Promise.resolve();
    }
    idleDetectors() {
        const thisPromise = this._idleDetector();
        if (this._pipeTo) {
            return [thisPromise, ...this._pipeTo.idleDetectors()];
        }
        return [thisPromise];
    }
    get isSuspended() {
        return this._isSuspended || this._pipeTo?.isSuspended || false;
    }
    _updateReactiveSource() {
        this.root.updateReactiveSource();
    }
    updateReactiveSource() {
        if (this._pipeTo) {
            this._pipeTo.updateReactiveSource();
        }
        if (this._remainingReactiveSource)
            this._remainingReactiveSource.value = this.remaining;
        if (this._totalRemainingReactiveSource)
            this._totalRemainingReactiveSource.value = this.totalRemaining;
        if (this._processingEntitiesReactiveSource)
            this._processingEntitiesReactiveSource.value = this.nowProcessing;
    }
    _updateBatchProcessStatus() {
        this._updateReactiveSource();
        this._runOnUpdateBatch();
    }
    _collectBatch() {
        return this._queue.splice(0, this.batchSize);
    }
    _canCollectBatch() {
        return this._queue.length !== 0;
    }
    enqueue(entity) {
        this._queue = this._enqueueProcessor(this._queue, entity);
        this._updateBatchProcessStatus();
        this._notifier.notify();
        return this;
    }
    enqueueAll(entities) {
        let queue = this._queue;
        for (const v of entities) {
            queue = this._enqueueProcessor(queue, v);
        }
        this._queue = queue;
        this._updateBatchProcessStatus();
        this._notifier.notify();
        return this;
    }
    requestNextFlush() {
        if (this._canCollectBatch()) {
            this._nextProcessNeedsImmediate = true;
            this._notifier.notify();
        }
    }
    flush() {
        if (this._isSuspended)
            return;
        this.requestNextFlush();
        return this.waitForAllDownstream();
    }
    async waitForAllDownstream(timeout) {
        // Prepare timeout detector
        const baseTasks = [];
        if (timeout) {
            baseTasks.push(delay(timeout, RESULT_TIMED_OUT));
        }
        do {
            const idleTasks = this.idleDetectors();
            const tasks = [...baseTasks, Promise.all(idleTasks)];
            const ret = await Promise.race(tasks);
            if (ret === RESULT_TIMED_OUT)
                return false;
        } while (!this.isIdle());
        return true;
    }
    waitForAllProcessed(timeout) {
        this.root.startPipeline();
        return this.root.waitForAllDownstream(timeout);
    }
    async waitForAllDoneAndTerminate(timeout) {
        this.root.startPipeline();
        const r = await this.root.waitForAllDownstream(timeout);
        this.terminateAll();
        return r;
    }
    async _runProcessor(items) {
        // runProcessor does not modify queue. so updateStatus should only update about reactiveSource.
        const ret = await this._processor(items);
        if (!ret)
            return;
        // If downstream is connected, the result sent to that.
        if (this._pipeTo) {
            this._pipeTo.enqueueAll(ret);
        }
        else if (this._keepResultUntilDownstreamConnected) {
            // Buffer the result if downstream is not connected.
            this._keptResult.push(...ret);
        }
    }
    async *pump() {
        let items;
        let queueRunOut = true;
        do {
            await yieldNextMicrotask();
            if (!this._canCollectBatch()) {
                // If we cannot collect any items from the queue, sleep until a next notify
                queueRunOut = true;
                await Promise.race([this._notifier.nextNotify, delay(3000)]);
                continue;
            }
            // Here, we have some items in the queue.
            if (queueRunOut) {
                // If the pump has been slept, wait for the chance to accumulate some more in the queue.
                await this.delayUntilRequested(this.delay);
            }
            items = this._collectBatch();
            // If the queue has been modified (by modifyQueue or something).
            // We have to try from the begin again.
            if (items.length == 0) {
                continue;
            }
            yield items;
            // For subsequent processes, check run out status
            if (this._canCollectBatch()) {
                queueRunOut = false;
            }
        } while (this._canCollectBatch() && !this._isSuspended);
    }
    async delayUntilRequested(delayMs) {
        if (this._nextProcessNeedsImmediate) {
            this._nextProcessNeedsImmediate = false;
            return;
        }
        const delayTimer = delay(delayMs, RESULT_TIMED_OUT);
        let ret;
        do {
            ret = await Promise.race([this._notifier.nextNotify, delayTimer]);
        } while (ret !== RESULT_TIMED_OUT &&
            this._nextProcessNeedsImmediate === false &&
            this.yieldThreshold >= this._queue.length);
        this._nextProcessNeedsImmediate = false;
        return;
    }
    async _process() {
        if (this._processing && this._isSuspended)
            return;
        let lastProcessBegin = 0;
        try {
            this._processing = true;
            do {
                const batchPump = this.pump();
                for await (const batch of batchPump) {
                    const batchLength = batch.length;
                    this.updateStatus(() => {
                        this.waitingEntries += batchLength;
                    });
                    while (this._processingBatches.size >= this.concurrentLimit) {
                        await this._notifier.nextNotify;
                    }
                    // Add batch to the processing
                    const key = Date.now() + Math.random();
                    const batchTask = async () => {
                        this.updateStatus(() => {
                            // To avoid false positive of idle, add processingEntities before reducing waitingEntries
                            this.processingEntities += batchLength;
                            this.waitingEntries -= batchLength;
                        });
                        this.addProcessingBatch(key);
                        try {
                            if (this.interval && lastProcessBegin) {
                                const diff = Date.now() - lastProcessBegin;
                                if (diff < this.interval) {
                                    const delayMs = this.interval - diff;
                                    await delay(delayMs);
                                }
                            }
                            lastProcessBegin = Date.now();
                            await this._runProcessor(batch);
                        }
                        catch (ex) {
                            Logger(`Processor error!`);
                            Logger(ex, LOG_LEVEL_VERBOSE);
                        }
                        finally {
                            this.deleteProcessingBatch(key);
                            this.updateStatus(() => {
                                this.processingEntities -= batchLength;
                            });
                            this._notifier.notify();
                        }
                    };
                    this._notifier.notify();
                    fireAndForget(async () => {
                        await yieldNextMicrotask();
                        await batchTask();
                    });
                }
                await this._notifier.nextNotify;
            } while (!this._isSuspended);
        }
        finally {
            this._processing = false;
        }
    }
    _run() {
        if (this._isSuspended)
            return;
        if (this._processing)
            return;
        fireAndForget(() => this._process());
    }
    terminateAll() {
        this.root.terminate();
    }
    terminate() {
        if (this._pipeTo) {
            this._pipeTo.terminate();
            this._pipeTo = undefined;
        }
        this._isSuspended = true;
        this._enqueueProcessor = () => [];
        this._processor = () => Promise.resolve([]);
        this.clearQueue();
        this._notifier.notify();
        this._notifier.notify();
        this._notifier.notify();
        this._queue.length = 0;
        allRunningProcessors.delete(this);
    }
}
function stopAllRunningProcessors() {
    const processors = [...allRunningProcessors];
    for (const processor of processors) {
        processor.terminate();
    }
}

export { Notifier, QueueProcessor, stopAllRunningProcessors };
//# sourceMappingURL=processor.js.map
