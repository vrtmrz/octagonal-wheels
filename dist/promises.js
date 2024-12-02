/**
 * Delays the execution of a function by the specified number of milliseconds.
 * @param ms - The number of milliseconds to delay the execution.
 * @param result - The optional result value to be resolved with after the delay.
 * @returns A promise that resolves with the specified result value after the delay.
 */
const delay = (ms, result) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(result);
        }, ms);
    });
};
const UNRESOLVED = Symbol('UNRESOLVED');
/**
 * Checking whether a promise has been resolved.
 * @param promise
 * @returns true if resolved, false if not.
 */
async function isResolved(promise) {
    return await Promise.race([promise, Promise.resolve(UNRESOLVED)]) !== UNRESOLVED;
}
/**
 * Creates a promise and returns it along with the resolve and reject functions.
 * @returns An object containing the promise, resolve, and reject functions.
 * @typeparam T The type of the promise value.
 */
function polyfillPromiseWithResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return { promise, resolve, reject };
}
/**
 * Creates a native promise with resolvers. This function is used when the `Promise.withResolvers` function is available.
 * @template T The type of the promise value.
 * @returns An object containing the promise, resolve function, and reject function.
 */
function nativePromiseWithResolvers() {
    const p = Promise.withResolvers();
    const { promise, resolve, reject } = p;
    return { promise, resolve, reject };
}
/**
 * Creates a promise with custom resolvers.
 * @param {Function} polyfillPromiseWithResolvers - The function that polyfills the promise with resolvers.
 * @returns {Promise} - The promise with custom resolvers.
 */
const promiseWithResolver = ("withResolvers" in Promise) ? nativePromiseWithResolvers : polyfillPromiseWithResolvers;
/**
 * A no-operation function.
 */
const noop = () => { };
/**
 * Executes a promise or a function that returns a promise and ignores any errors or results.
 * @param p - The promise or function that returns a promise to be executed.
 */
function fireAndForget(p) {
    if (typeof p == "function")
        return fireAndForget(p());
    p.then(noop).catch(noop);
}
/**
 * Yields a microtask.
 *
 * @returns A promise that resolves when the microtask is completed.
 */
function yieldMicrotask() {
    return new Promise(res => queueMicrotask(res));
}
/**
 * A utility function that wraps the `requestIdleCallback` function and returns a promise.
 * If `requestIdleCallback` is not available in the global scope (iOS, Safari), it falls back to `yieldMicrotask`.
 *
 * @param options - The options to be passed to the `requestIdleCallback` function.
 * @returns A promise that resolves when the idle callback is executed.
 */
function yieldRequestIdleCallback(options) {
    if (!("requestIdleCallback" in globalThis))
        return yieldMicrotask();
    return new Promise(res => requestIdleCallback(() => res(), options));
}
/**
 * Yields the next animation frame.
 *
 * @returns A promise that resolves with the next animation frame.
 */
function yieldAnimationFrame() {
    return new Promise(res => requestAnimationFrame(res));
}
/**
 * Yields the next batched animation frame.
 *
 * @returns A promise that resolves with the next frame.
 */
let currentYieldingAnimationFrame;
function yieldNextAnimationFrame() {
    if (currentYieldingAnimationFrame)
        return currentYieldingAnimationFrame;
    currentYieldingAnimationFrame = (async () => {
        const ret = await yieldAnimationFrame();
        currentYieldingAnimationFrame = undefined;
        return ret;
    })();
    return currentYieldingAnimationFrame;
}
let currentYieldingMicrotask;
function yieldNextMicrotask() {
    if (currentYieldingMicrotask)
        return currentYieldingMicrotask;
    currentYieldingMicrotask = (async () => {
        await yieldMicrotask();
        currentYieldingMicrotask = undefined;
    })();
    return currentYieldingMicrotask;
}

export { delay, fireAndForget, isResolved, nativePromiseWithResolvers, noop, polyfillPromiseWithResolvers, promiseWithResolver, yieldAnimationFrame, yieldMicrotask, yieldNextAnimationFrame, yieldNextMicrotask, yieldRequestIdleCallback };
//# sourceMappingURL=promises.js.map
