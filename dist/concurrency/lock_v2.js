import { promiseWithResolver, fireAndForget } from '../promises.js';

// --- asynchronous execution / locking utilities
/**
 * Run tasks one by one in their group.
 */
const serializedMap = new Map();
/**
 * How many tasks waiting for the same key (on serialized processing)
 */
const queueCount = new Map();
/**
 * Tasks that are waiting for the same key (on serialized processing)
 */
const waitingProcessMap = new Map();
/**
 * Tasks that are waiting for the same key (on sharing result)
 */
const shareSerializedMap = new Map();
/**
 * Tasks that are waiting for the same key (on skipping duplicated)
 */
const skipDuplicatedMap = new Map();
/**
 * Run tasks one by one in their group.
 * @param key key of the group
 * @param proc process to run
 * @returns result of the process
 */
function serialized(key, proc) {
    const prev = serializedMap.get(key);
    const p = promiseWithResolver();
    queueCount.set(key, (queueCount.get(key) ?? 0) + 1);
    const nextTask = async () => {
        try {
            p.resolve(await proc());
        }
        catch (ex) {
            p.reject(ex);
        }
        finally {
            const count = queueCount.get(key) - 1;
            if (count === 0) {
                serializedMap.delete(key);
                queueCount.delete(key);
            }
            else {
                queueCount.set(key, count);
            }
        }
    };
    if (prev) {
        const newP = prev.then(() => nextTask());
        serializedMap.set(key, newP);
    }
    else {
        serializedMap.set(key, nextTask());
    }
    return p.promise;
}
const latestProcessMap = new Map();
const SYMBOL_SKIPPED = Symbol("SKIPPED");
function onlyLatest(key, proc) {
    const p = promiseWithResolver();
    latestProcessMap.set(key, p.promise);
    fireAndForget(async () => {
        try {
            await serialized(key, async () => {
                try {
                    const latestProcess = latestProcessMap.get(key);
                    // If the latest process is not this one (meaning another process is waiting or running), this process is skipped.
                    if (latestProcess && latestProcess !== p.promise) {
                        p.resolve(SYMBOL_SKIPPED);
                        return;
                    }
                    // Otherwise, run the process
                    try {
                        const r = await proc();
                        p.resolve(r);
                    }
                    catch (ex) {
                        p.reject(ex);
                    }
                    return;
                }
                finally {
                    // After the process is done, delete the mark if it is still the latest one.
                    if (latestProcessMap.get(key) === p.promise) {
                        latestProcessMap.delete(key);
                    }
                }
            });
        }
        catch (ex) {
            // Ensure that the promise is removed from the map after completion.
            if (latestProcessMap.get(key) === p.promise) {
                latestProcessMap.delete(key);
            }
            p.reject(ex);
        }
    });
    return p.promise;
}
/**
 * If free, run task and return the result (Same as serialized).
 * If any process has running, share the result.
 * Mostly same as `SlipBoard.issueAndProceed` but this is for general purpose.
 * @param key key of the group
 * @param proc process to run
 */
function shareRunningResult(key, proc) {
    const prev = shareSerializedMap.get(key);
    if (prev)
        return prev;
    const p = promiseWithResolver();
    shareSerializedMap.set(key, p.promise);
    const task = async () => {
        try {
            p.resolve(await proc());
        }
        catch (ex) {
            p.reject(ex);
        }
        finally {
            shareSerializedMap.delete(key);
        }
    };
    fireAndForget(() => task());
    return p.promise;
}
/**
 * Skips the execution of a task if it is already duplicated.
 *
 * @param key - The key to identify the task.
 * @param proc - The task to be executed.
 * @returns A promise that resolves to the result of the task, or `null` if the task is duplicated.
 */
function skipIfDuplicated(key, proc) {
    const prev = skipDuplicatedMap.get(key);
    if (prev)
        return Promise.resolve(null);
    const p = promiseWithResolver();
    skipDuplicatedMap.set(key, p.promise);
    const task = async () => {
        try {
            p.resolve(await proc());
        }
        catch (ex) {
            p.reject(ex);
        }
        finally {
            skipDuplicatedMap.delete(key);
        }
    };
    fireAndForget(() => task());
    return p.promise;
}
/**
 * Schedules a process to be executed once if it is not already running.
 * If the process is already running, it will be added to the waiting queue. An existing waiting process will be replaced.
 *
 * @param key - The key used to identify the process.
 * @param proc - The process to be executed.
 * @returns A Promise that resolves once the process has been scheduled.
 */
async function scheduleOnceIfDuplicated(key, proc) {
    if (isLockAcquired(key)) {
        waitingProcessMap.set(key, proc);
        return Promise.resolve(undefined);
    }
    else {
        return await serialized(key, proc).then(() => {
            const nextProc = waitingProcessMap.get(key);
            if (nextProc) {
                waitingProcessMap.delete(key);
                return scheduleOnceIfDuplicated(key, nextProc);
            }
        });
    }
}
/**
 * Checks if a serialised-processing-lock is acquired for the given key.
 * @param key - The key to check for lock acquisition.
 * @returns `true` if the lock is acquired, `false` otherwise.
 */
function isLockAcquired(key) {
    const count = queueCount.get(key) ?? 0;
    return count > 0;
}

export { SYMBOL_SKIPPED, isLockAcquired, onlyLatest, scheduleOnceIfDuplicated, serialized, shareRunningResult, skipIfDuplicated };
//# sourceMappingURL=lock_v2.js.map
