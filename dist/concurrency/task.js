import { promiseWithResolver } from '../promises.js';

function unwrapTaskResult(result) {
    if ("ok" in result)
        return result.ok;
    if ("err" in result)
        return result.err;
    throw new Error("Argument Exception: Could not unwrap");
}
function isTaskWaiting(task) {
    if (task instanceof Promise) {
        return false;
    }
    if (task instanceof Function) {
        return true;
    }
    throw new Error("Invalid state");
}
async function wrapEachProcess(key, task) {
    try {
        const r = await task;
        return { key, ok: r };
    }
    catch (ex) {
        return { key, err: ex instanceof Error ? ex : new Error(`${ex}`) };
    }
}
/**
 * Perform all tasks within given concurrency.
 * @param limit Concurrency limit
 * @param tasks Tasks to perform all
 *
 */
async function* processAllGeneratorTasksWithConcurrencyLimit(limit, tasks) {
    const nowProcessing = new Map();
    let idx = 0;
    // for await (const task of tasks){
    let generatorDone = false;
    while (nowProcessing.size > 0 || !generatorDone) {
        L2: while (nowProcessing.size < limit && !generatorDone) {
            const w = await tasks.next();
            if (w.done) {
                generatorDone = true;
                // break L2;
            }
            if (w.value === undefined) {
                break L2;
            }
            const task = w.value;
            idx++;
            const newProcess = isTaskWaiting(task) ? task() : task;
            const wrappedPromise = wrapEachProcess(idx, newProcess);
            nowProcessing.set(idx, wrappedPromise);
        }
        const done = await Promise.race(nowProcessing.values());
        nowProcessing.delete(done.key);
        yield done;
    }
}
async function* pipeGeneratorToGenerator(generator, callback) {
    for await (const e of generator) {
        const closure = () => callback(e);
        yield closure;
    }
}
async function* pipeArrayToGenerator(array, callback) {
    for (const e of array) {
        const closure = () => callback(e);
        yield closure;
    }
}
/**
 * Perform all tasks within given concurrency.
 * @param limit Concurrency limit
 * @param tasks Tasks to perform all
 *
 */
async function* processAllTasksWithConcurrencyLimit(limit, tasks) {
    const nowProcessing = new Map();
    let idx = 0;
    const pendingTasks = tasks.reverse();
    while (pendingTasks.length > 0 || nowProcessing.size > 0) {
        L2: while (nowProcessing.size < limit && pendingTasks.length > 0) {
            const task = pendingTasks.pop(); // Pop is faster than shift.
            if (task === undefined) {
                break L2;
            }
            idx++;
            const newProcess = isTaskWaiting(task) ? task() : task;
            const wrappedPromise = wrapEachProcess(idx, newProcess);
            nowProcessing.set(idx, wrappedPromise);
        }
        const done = await Promise.race(nowProcessing.values());
        nowProcessing.delete(done.key);
        yield done;
    }
}
/**
 * Perform all tasks and returns all result by keeping the order.
 * @param limit Concurrency limit
 * @param tasks Tasks to perform all
 * @returns
 */
async function mapAllTasksWithConcurrencyLimit(limit, tasks) {
    const results = new Map();
    for await (const v of processAllTasksWithConcurrencyLimit(limit, tasks)) {
        results.set(v.key, v);
    }
    const ret = [...results.entries()].sort((a, b) => a[0] - b[0]).map(e => e[1]);
    return ret;
}
const tasks = {};
function scheduleTask(key, timeout, proc, skipIfTaskExist) {
    if (skipIfTaskExist && key in tasks) {
        return;
    }
    cancelTask(key);
    tasks[key] = setTimeout(async () => {
        delete tasks[key];
        await proc();
    }, timeout);
}
function cancelTask(key) {
    if (key in tasks) {
        clearTimeout(tasks[key]);
        delete tasks[key];
    }
}
function cancelAllTasks() {
    for (const v in tasks) {
        clearTimeout(tasks[v]);
        delete tasks[v];
    }
}
const intervals = {};
function setPeriodicTask(key, timeout, proc) {
    cancelPeriodicTask(key);
    intervals[key] = setInterval(async () => {
        delete intervals[key];
        await proc();
    }, timeout);
}
function cancelPeriodicTask(key) {
    if (key in intervals) {
        clearInterval(intervals[key]);
        delete intervals[key];
    }
}
function cancelAllPeriodicTask() {
    for (const v in intervals) {
        clearInterval(intervals[v]);
        delete intervals[v];
    }
}
const waitingItems = new Map();
function waitForTimeout(key, timeout) {
    if (waitingItems.has(key)) {
        return waitingItems.get(key).timeoutPromise.promise;
    }
    const timeoutPromise = promiseWithResolver();
    const timer = setTimeout(() => {
        finishWaitingForTimeout(key, true);
    }, timeout);
    waitingItems.set(key, {
        waitFrom: Date.now(),
        timeout,
        timeoutPromise: timeoutPromise,
        timer
    });
    return timeoutPromise.promise;
}
function finishWaitingForTimeout(key, hasTimeout = false) {
    const x = waitingItems.get(key);
    if (x) {
        if (x.timer)
            clearTimeout(x.timer);
        x.timeoutPromise.resolve(hasTimeout);
        waitingItems.delete(key);
        return true;
    }
    return false;
}
function finishAllWaitingForTimeout(prefix, hasTimeout) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [key, _] of waitingItems) {
        if (key.startsWith(prefix)) {
            finishWaitingForTimeout(key, hasTimeout);
        }
    }
}
function isWaitingForTimeout(key) {
    return waitingItems.has(key);
}

export { cancelAllPeriodicTask, cancelAllTasks, cancelPeriodicTask, cancelTask, finishAllWaitingForTimeout, finishWaitingForTimeout, isWaitingForTimeout, mapAllTasksWithConcurrencyLimit, pipeArrayToGenerator, pipeGeneratorToGenerator, processAllGeneratorTasksWithConcurrencyLimit, processAllTasksWithConcurrencyLimit, scheduleTask, setPeriodicTask, unwrapTaskResult, waitForTimeout };
//# sourceMappingURL=task.js.map
