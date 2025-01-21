// --- asynchronous execution / locking utilities
import { fireAndForget, promiseWithResolver } from "../promises";

type Task<T> = () => Promise<T> | T;

/**
 * Run tasks one by one in their group.
 */
const serializedMap = new Map<string | symbol, Promise<void>>();
/**
 * How many tasks waiting for the same key (on serialized processing)
 */
const queueCount = new Map<string | symbol, number>();

/**
 * Tasks that are waiting for the same key (on serialized processing)
 */

const waitingProcessMap = new Map<string | symbol, Task<any>>();

/**
 * Tasks that are waiting for the same key (on sharing result)
 */
const shareSerializedMap = new Map<string | symbol, Promise<any>>();

/**
 * Tasks that are waiting for the same key (on skipping duplicated)
 */
const skipDuplicatedMap = new Map<string | symbol, Promise<any>>();

/**
 * Run tasks one by one in their group.
 * @param key key of the group
 * @param proc process to run
 * @returns result of the process
 */

export function serialized<T>(key: string | symbol, proc: Task<T>): Promise<T> {
    const prev = serializedMap.get(key);
    const p = promiseWithResolver<T>();
    queueCount.set(key, (queueCount.get(key) ?? 0) + 1);
    const nextTask = async () => {
        try {
            p.resolve(await proc());
        } catch (ex) {
            p.reject(ex);
        } finally {
            const count = queueCount.get(key)! - 1;
            if (count === 0) {
                serializedMap.delete(key);
                queueCount.delete(key);
            } else {
                queueCount.set(key, count);
            }
        }
    };
    if (prev) {
        const newP = prev.then(() => nextTask());
        serializedMap.set(key, newP);
    } else {
        serializedMap.set(key, nextTask());
    }
    return p.promise;
}


/**
 * If free, run task and return the result (Same as serialized).
 * If any process has running, share the result.
 * Mostly same as `SlipBoard.issueAndProceed` but this is for general purpose.
 * @param key key of the group
 * @param proc process to run
 */
export function shareRunningResult<T>(key: string | symbol, proc: Task<T>): Promise<T> {
    const prev = shareSerializedMap.get(key) as Promise<T> | undefined;
    if (prev) return prev;

    const p = promiseWithResolver<T>();
    shareSerializedMap.set(key, p.promise);

    const task = async () => {
        try {
            p.resolve(await proc());
        } catch (ex) {
            p.reject(ex);
        } finally {
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
export function skipIfDuplicated<T>(key: string | symbol, proc: Task<T>): Promise<T | null> {
    const prev = skipDuplicatedMap.get(key) as Promise<T> | undefined;
    if (prev) return Promise.resolve(null);

    const p = promiseWithResolver<T>();
    skipDuplicatedMap.set(key, p.promise);

    const task = async () => {
        try {
            p.resolve(await proc());
        } catch (ex) {
            p.reject(ex);
        } finally {
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
export async function scheduleOnceIfDuplicated<T>(key: string, proc: () => Promise<T>): Promise<T | null | undefined> {

    if (isLockAcquired(key)) {
        waitingProcessMap.set(key, proc);
        return Promise.resolve(undefined);
    } else {
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
export function isLockAcquired(key: string | symbol): boolean {
    const count = queueCount.get(key) ?? 0;
    return count > 0;
}
