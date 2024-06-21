type Task<T> = () => Promise<T> | T;
/**
 * Run tasks one by one in their group.
 * @param key key of the group
 * @param proc process to run
 * @returns result of the process
 */
export declare function serialized<T>(key: string | symbol, proc: Task<T>): Promise<T>;
/**
 * If free, run task and return the result (Same as serialized).
 * If any process has running, share the result.
 * @param key key of the group
 * @param proc process to run
 */
export declare function shareRunningResult<T>(key: string | symbol, proc: Task<T>): Promise<T>;
export declare function skipIfDuplicated<T>(key: string | symbol, proc: Task<T>): Promise<T | null>;
export declare function scheduleOnceIfDuplicated<T>(key: string, proc: () => Promise<T>): Promise<void>;
export declare function isLockAcquired(key: string): boolean;
export {};
