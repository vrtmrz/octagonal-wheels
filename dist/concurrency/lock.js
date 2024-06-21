import { promiseWithResolver, fireAndForget } from '../promises.js';

const queueTails = new Map();
async function performTask(queue) {
    if (queue.isRunning) {
        // The same queue has been started
        return;
    }
    try {
        queue.isRunning = true;
        const ret = await queue.task();
        queue.resolver(ret);
    }
    catch (ex) {
        queue.rejector(ex);
    }
    finally {
        const next = queue.next;
        queue.isFinished = true;
        // This makes non-sense, we have make the latest queue while enqueuing. 
        if (next) {
            fireAndForget(() => performTask(next));
        }
        else {
            queueTails.delete(queue.key);
        }
    }
    return;
}
function _enqueue(key, task, { swapIfExist, shareResult } = {}) {
    const t = promiseWithResolver();
    const resolver = t.resolve;
    const rejector = t.reject;
    const newQueue = {
        task,
        resolver,
        rejector,
        key
    };
    const prev = queueTails.get(key);
    if (prev === undefined) {
        queueTails.set(key, newQueue);
    }
    else {
        const current = prev;
        queueTails.set(key, newQueue);
        current.next = newQueue;
        if (swapIfExist) {
            // Force cancel previous one
            current.rejector(new Error("Cancelled"));
        }
    }
    if (!prev || prev.isFinished) {
        fireAndForget(() => performTask(newQueue));
    }
    return t.promise;
}
/**
 * Run tasks one by one in their group.
 * @param key key of the group
 * @param proc process to run
 * @returns result of the process
 */
function serialized(key, proc) {
    return _enqueue(key, proc);
}
/**
 * If free, run task and return the result (Same as serialized).
 * If any process has running, share the result.
 * @param key key of the group
 * @param proc process to run
 */
function shareRunningResult(key, proc) {
    const current = queueTails.get(key);
    if (!current)
        return _enqueue(key, proc);
    let oldResolver = current.resolver;
    let oldRejector = current.rejector;
    const resultP = promiseWithResolver();
    // Inject hooked handler
    current.resolver = (result) => {
        oldResolver?.(result);
        resultP.resolve(result);
    };
    current.rejector = (result) => {
        oldRejector?.(result);
        resultP.reject(result);
    };
    resultP.promise.finally(() => {
        oldResolver = undefined;
        oldRejector = undefined;
    });
    return resultP.promise;
}
function skipIfDuplicated(key, proc) {
    if (queueTails.get(key) !== undefined)
        return Promise.resolve(null);
    return _enqueue(key, proc);
}
const waitingProcess = new Map();
async function scheduleOnceIfDuplicated(key, proc) {
    if (isLockAcquired(key)) {
        waitingProcess.set(key, proc);
        return;
    }
    await serialized(key, proc);
    if (waitingProcess.has(key)) {
        const nextProc = waitingProcess.get(key);
        waitingProcess.delete(key);
        scheduleOnceIfDuplicated(key, nextProc);
    }
}
function isLockAcquired(key) {
    return queueTails.get(key) !== undefined;
}

export { isLockAcquired, scheduleOnceIfDuplicated, serialized, shareRunningResult, skipIfDuplicated };
