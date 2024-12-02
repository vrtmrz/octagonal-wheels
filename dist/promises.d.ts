/**
 * Delays the execution of a function by the specified number of milliseconds.
 * @param ms - The number of milliseconds to delay the execution.
 * @param result - The optional result value to be resolved with after the delay.
 * @returns A promise that resolves with the specified result value after the delay.
 */
export declare const delay: <T>(ms: number, result?: T) => Promise<T>;
/**
 * Checking whether a promise has been resolved.
 * @param promise
 * @returns true if resolved, false if not.
 */
export declare function isResolved(promise: Promise<unknown>): Promise<boolean>;
export type PromiseWithResolvers<T> = {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};
/**
 * Creates a promise and returns it along with the resolve and reject functions.
 * @returns An object containing the promise, resolve, and reject functions.
 * @typeparam T The type of the promise value.
 */
export declare function polyfillPromiseWithResolvers<T>(): PromiseWithResolvers<T>;
/**
 * Creates a native promise with resolvers. This function is used when the `Promise.withResolvers` function is available.
 * @template T The type of the promise value.
 * @returns An object containing the promise, resolve function, and reject function.
 */
export declare function nativePromiseWithResolvers<T>(): {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};
/**
 * Creates a promise with custom resolvers.
 * @param {Function} polyfillPromiseWithResolvers - The function that polyfills the promise with resolvers.
 * @returns {Promise} - The promise with custom resolvers.
 */
export declare const promiseWithResolver: <T>() => PromiseWithResolvers<T>;
/**
 * A no-operation function.
 */
export declare const noop: () => void;
/**
 * Executes a promise or a function that returns a promise and ignores any errors or results.
 * @param p - The promise or function that returns a promise to be executed.
 */
export declare function fireAndForget(p: Promise<any> | (() => Promise<any>)): void;
/**
 * Yields a microtask.
 *
 * @returns A promise that resolves when the microtask is completed.
 */
export declare function yieldMicrotask(): Promise<void>;
/**
 * A utility function that wraps the `requestIdleCallback` function and returns a promise.
 * If `requestIdleCallback` is not available in the global scope (iOS, Safari), it falls back to `yieldMicrotask`.
 *
 * @param options - The options to be passed to the `requestIdleCallback` function.
 * @returns A promise that resolves when the idle callback is executed.
 */
export declare function yieldRequestIdleCallback(options?: Parameters<typeof requestIdleCallback>[1]): Promise<void>;
/**
 * Yields the next animation frame.
 *
 * @returns A promise that resolves with the next animation frame.
 */
export declare function yieldAnimationFrame(): Promise<number>;
export declare function yieldNextAnimationFrame(): Promise<number>;
export declare function yieldNextMicrotask(): Promise<void>;
