/**
 * Delays the execution of a function by the specified number of milliseconds.
 * @param ms - The number of milliseconds to delay the execution.
 * @param result - The optional result value to be resolved with after the delay.
 * @returns A promise that resolves with the specified result value after the delay.
 */
export declare const delay: <T>(ms: number, result?: T) => Promise<T>;
/**
 * Creates a promise and returns it along with the resolve and reject functions.
 * @returns An object containing the promise, resolve, and reject functions.
 * @typeparam T The type of the promise value.
 */
declare function polyfillPromiseWithResolvers<T>(): {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};
/**
 * Creates a promise with custom resolvers.
 * @param {Function} polyfillPromiseWithResolvers - The function that polyfills the promise with resolvers.
 * @returns {Promise} - The promise with custom resolvers.
 */
export declare const promiseWithResolver: typeof polyfillPromiseWithResolvers;
/**
 * A no-operation function.
 */
export declare const noop: () => void;
/**
 * Executes a promise or a function that returns a promise and ignores any errors or results.
 * @param p - The promise or function that returns a promise to be executed.
 */
export declare function fireAndForget(p: Promise<any> | (() => Promise<any>)): void;
export {};
