// Due to strict constraints, they may have to be hidden once in order to save memory,
const PREFIX_TRENCH = "trench";
const PREFIX_EPHEMERAL = "ephemeral";
const PREFIX_PERMANENT = "permanent";
let idx = 0;
let series = `${Date.now()}`;
function generateId(prefix) {
    idx++;
    if (idx > 10000) {
        series = `${Date.now()}`;
        idx = 0;
    }
    const paddedIdx = idx + 10000000;
    return `${PREFIX_TRENCH}-${prefix}-${series}-${paddedIdx}`;
}
function createRange(prefix, series) {
    return [`${PREFIX_TRENCH}-${prefix}-${series}-`, `${PREFIX_TRENCH}-${prefix}-${series}.`];
}
function createId(prefix, series, idx) {
    const paddedIdx = idx + 10000000;
    return `${PREFIX_TRENCH}-${prefix}-${series}-${paddedIdx}`;
}
const indexes = new Map();
const inProgress = new Set();
const failed = new Map();
class Trench {
    constructor(db, flushExistItems = true) {
        Object.defineProperty(this, "_db", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_flushTask", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        Object.defineProperty(this, "concealing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        this._db = db;
        if (flushExistItems) {
            this._flushTask = (async () => {
                const keys = await db.keys(`${PREFIX_TRENCH}-${PREFIX_EPHEMERAL}`, `${PREFIX_TRENCH}-${PREFIX_EPHEMERAL}.`);
                for (const key of keys) {
                    await db.delete(key);
                }
            })();
        }
    }
    async eraseAllEphemerals() {
        const keys = await this._db.keys(`${PREFIX_TRENCH}-${PREFIX_EPHEMERAL}`, `${PREFIX_TRENCH}-${PREFIX_EPHEMERAL}.`);
        for (const key of keys) {
            await this._db.delete(key);
        }
    }
    async eraseAllPermanences() {
        const keys = await this._db.keys(`${PREFIX_TRENCH}-${PREFIX_PERMANENT}`, `${PREFIX_TRENCH}-${PREFIX_PERMANENT}.`);
        for (const key of keys) {
            await this._db.delete(key);
        }
    }
    conceal(obj) {
        // TODO: TEST, This is untested yet
        const key = generateId(PREFIX_EPHEMERAL);
        // Race conditions should only be addressed in advance.
        this.concealing.set(key, obj);
        this._db.set(key, obj).then(async (e) => {
            if (this.concealing.has(key)) {
                this.concealing.delete(key);
            }
            else {
                // If not in time
                await this._db.delete(key);
            }
        });
        return key;
    }
    async bury(key) {
        // TODO: TEST, This is untested yet
        if (this.concealing.has(key)) {
            this.concealing.delete(key);
        }
        await this._db.delete(key);
    }
    async expose(key) {
        // TODO: TEST, This is untested yet
        if (this.concealing.has(key)) {
            const value = this.concealing.get(key);
            this.concealing.delete(key);
            return value;
        }
        const obj = await this._db.get(key);
        await this._db.delete(key);
        return obj;
    }
    _evacuate(storeTask, key) {
        return async () => {
            if (this._flushTask) {
                await this._flushTask;
                this._flushTask = undefined;
            }
            await storeTask;
            const item = await this._db.get(key);
            await this._db.delete(key);
            return item;
        };
    }
    evacuatePromise(task) {
        const key = generateId(PREFIX_EPHEMERAL);
        const storeTask = (async () => {
            const data = await task;
            await this._db.set(key, data);
        })();
        return this._evacuate(storeTask, key);
    }
    evacuate(obj) {
        if (obj instanceof Promise)
            return this.evacuatePromise(obj);
        const key = generateId(PREFIX_EPHEMERAL);
        const storeTask = this._db.set(key, obj);
        return this._evacuate(storeTask, key);
    }
    async _queue(type, key, obj, index) {
        if (index === undefined) {
            // Only in ephemeral, we can do this.
            index = indexes.get(key) ?? 0;
            indexes.set(key, index + 1);
        }
        // is actually only need ephemeral?
        const storeKey = createId(type, key, index);
        await this._db.set(storeKey, obj);
    }
    async _dequeue(type, key) {
        const range = createRange(type, key);
        const keys = (await this._db.keys(range[0], range[1])).filter(e => !inProgress.has(e));
        if (keys.length === 0)
            return undefined;
        return await this.expose(keys[0]);
    }
    async _dequeueWithCommit(type, key) {
        const range = createRange(type, key);
        const keysAll = (await this._db.keys(range[0], range[1]));
        const keys = keysAll.filter(e => !inProgress.has(e));
        if (keys.length === 0)
            return undefined;
        const storeKey = keys[0];
        inProgress.add(storeKey);
        const previousFailed = failed.get(storeKey) || 0;
        const value = await this._db.get(storeKey);
        return {
            key: storeKey,
            value,
            cancelCount: previousFailed,
            pendingItems: keysAll.length - 1,
            commit: async () => {
                await this._db.delete(storeKey);
                failed.delete(storeKey);
                inProgress.delete(storeKey);
            },
            cancel: () => {
                failed.set(storeKey, (failed.get(storeKey) || 0) + 1);
                inProgress.delete(storeKey);
            }
        };
    }
    queue(key, obj, index) {
        return this._queue(PREFIX_EPHEMERAL, key, obj, index);
    }
    dequeue(key) {
        return this._dequeue(PREFIX_EPHEMERAL, key);
    }
    dequeueWithCommit(key) {
        return this._dequeueWithCommit(PREFIX_EPHEMERAL, key);
    }
    queuePermanent(key, obj, index) {
        return this._queue(PREFIX_PERMANENT, key, obj, index);
    }
    dequeuePermanent(key) {
        return this._dequeue(PREFIX_PERMANENT, key);
    }
    dequeuePermanentWithCommit(key) {
        return this._dequeueWithCommit(PREFIX_PERMANENT, key);
    }
}

export { PREFIX_EPHEMERAL, PREFIX_PERMANENT, PREFIX_TRENCH, Trench };
