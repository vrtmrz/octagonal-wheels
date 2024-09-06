
/**
 * Delays the execution of a function by the specified number of milliseconds.
 * @param ms - The number of milliseconds to delay the execution.
 * @param result - The optional result value to be resolved with after the delay.
 * @returns A promise that resolves with the specified result value after the delay.
 */
export const delay = <T>(ms: number, result?: T): Promise<T> => {
    return new Promise((res) => {
        setTimeout(() => {
            res(result!);
        }, ms);
    });
};

export type PromiseWithResolvers<T> = {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}

/**
 * Creates a promise and returns it along with the resolve and reject functions.
 * @returns An object containing the promise, resolve, and reject functions.
 * @typeparam T The type of the promise value.
 */
export function polyfillPromiseWithResolvers<T>(): PromiseWithResolvers<T> {
    let resolve!: Parameters<ConstructorParameters<typeof Promise<T>>[0]>[0];
    let reject!: Parameters<ConstructorParameters<typeof Promise<T>>[0]>[1];
    const promise = new Promise<T>((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return { promise, resolve, reject }
}

/**
 * Creates a native promise with resolvers. This function is used when the `Promise.withResolvers` function is available.
 * @template T The type of the promise value.
 * @returns An object containing the promise, resolve function, and reject function.
 */
export function nativePromiseWithResolvers<T>() {
    const p = Promise.withResolvers<T>();
    const { promise, resolve, reject } = p;
    return { promise, resolve, reject };
}
/**
 * Creates a promise with custom resolvers.
 * @param {Function} polyfillPromiseWithResolvers - The function that polyfills the promise with resolvers.
 * @returns {Promise} - The promise with custom resolvers.
 */
export const promiseWithResolver: <T>() => PromiseWithResolvers<T> = ("withResolvers" in Promise) ? nativePromiseWithResolvers : polyfillPromiseWithResolvers;

/**
 * A no-operation function.
 */
export const noop = () => {/* NO OP */ };

/**
 * Executes a promise or a function that returns a promise and ignores any errors or results.
 * @param p - The promise or function that returns a promise to be executed.
 */
export function fireAndForget(p: Promise<any> | (() => Promise<any>)): void {
    if (typeof p == "function") return fireAndForget(p());
    p.then(noop).catch(noop);
}

/**
 * Yields a microtask.
 * 
 * @returns A promise that resolves when the microtask is completed.
 */
export function yieldMicrotask() {
    return new Promise<void>(res => queueMicrotask(res));
}

/**
 * A utility function that wraps the `requestIdleCallback` function and returns a promise.
 * If `requestIdleCallback` is not available in the global scope (iOS, Safari), it falls back to `yieldMicrotask`.
 * 
 * @param options - The options to be passed to the `requestIdleCallback` function.
 * @returns A promise that resolves when the idle callback is executed.
 */
export function yieldRequestIdleCallback(options?: Parameters<typeof requestIdleCallback>[1]) {
    if (!("requestIdleCallback" in globalThis)) return yieldMicrotask();
    return new Promise<void>(res => requestIdleCallback(() => res(), options));
}

/**
 * Yields the next animation frame.
 * 
 * @returns A promise that resolves with the next animation frame.
 */
export function yieldAnimationFrame() {
    return new Promise<number>(res => requestAnimationFrame(res));
}

/**
 * Yields the next batched animation frame.
 * 
 * @returns A promise that resolves with the next frame.
 */

let currentYieldingAnimationFrame: Promise<number> | undefined;
export function yieldNextAnimationFrame() {
    if (currentYieldingAnimationFrame) return currentYieldingAnimationFrame;
    currentYieldingAnimationFrame = (async () => {
        const ret = await yieldAnimationFrame();
        currentYieldingAnimationFrame = undefined;
        return ret;
    })();
    return currentYieldingAnimationFrame;
}


let currentYieldingMicrotask: Promise<void> | undefined;

export function yieldNextMicrotask() {
    if (currentYieldingMicrotask) return currentYieldingMicrotask;
    currentYieldingMicrotask = (async () => {
        await yieldMicrotask();
        currentYieldingMicrotask = undefined;
    })();
    return currentYieldingMicrotask;
}