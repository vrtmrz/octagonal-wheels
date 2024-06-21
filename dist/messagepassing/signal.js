import { RESULT_TIMED_OUT } from '../common/const.js';

const traps = {};
async function waitForSignal(id, timeout) {
    return await waitForValue(id, timeout) !== RESULT_TIMED_OUT;
}
function waitForValue(id, timeout) {
    let resolveTrap;
    let trapJob;
    const timer = timeout ? setTimeout(() => {
        if (id in traps) {
            traps[id] = traps[id].filter(e => e != trapJob);
        }
        if (resolveTrap)
            resolveTrap(RESULT_TIMED_OUT);
        resolveTrap = undefined;
    }, timeout) : false;
    return new Promise((res) => {
        if (!(id in traps))
            traps[id] = [];
        resolveTrap = res;
        trapJob = (result) => {
            if (timer)
                clearTimeout(timer);
            res(result);
        };
        traps[id].push(trapJob);
    });
}
function sendSignal(key) {
    sendValue(key, true);
}
function sendValue(key, result) {
    if (!(key in traps)) {
        return;
    }
    const trap = traps[key];
    delete traps[key];
    for (const resolver of trap) {
        resolver(result);
    }
}

export { sendSignal, sendValue, waitForSignal, waitForValue };
