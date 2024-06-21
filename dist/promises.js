// time util
const delay = (ms, result) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(result);
        }, ms);
    });
};
function polyfillPromiseWithResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return { promise, resolve, reject };
}
const promiseWithResolver = polyfillPromiseWithResolvers;
const noop = () => { };
function fireAndForget(p) {
    if (typeof p == "function")
        return fireAndForget(p());
    p.then(noop).catch(noop);
}

export { delay, fireAndForget, noop, promiseWithResolver };
