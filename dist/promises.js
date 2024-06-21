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
 * Creates a promise with custom resolvers.
 * @param {Function} polyfillPromiseWithResolvers - The function that polyfills the promise with resolvers.
 * @returns {Promise} - The promise with custom resolvers.
 */
const promiseWithResolver = polyfillPromiseWithResolvers;
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

export { delay, fireAndForget, noop, promiseWithResolver };
