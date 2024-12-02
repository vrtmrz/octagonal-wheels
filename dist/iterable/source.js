import { promiseWithResolver } from '../promises.js';

const GENERATOR_CLOSED = Symbol("closed");
function generativeBuffer() {
    let current = promiseWithResolver();
    let next = [current];
    let closed = false;
    let finished = false;
    return {
        enqueue(item) {
            if (closed || finished) {
                throw new Error("Cannot enqueue to a closed or finished source");
            }
            const promise = current;
            const newNext = promiseWithResolver();
            current = newNext;
            next.push(current);
            promise.resolve(item);
        },
        [Symbol.asyncIterator]() {
            return this.values();
        },
        dispose() {
            if (closed)
                return;
            closed = true;
            current.resolve(GENERATOR_CLOSED);
        },
        finish() {
            finished = true;
            current.resolve(GENERATOR_CLOSED);
        },
        [Symbol.dispose]() {
            this.dispose();
        },
        async *values() {
            while (!closed) {
                try {
                    const ret = await next[0].promise;
                    next = next.slice(1); //// Drop the resolved promise
                    if (ret === GENERATOR_CLOSED)
                        return;
                    yield ret;
                }
                catch (e) {
                    if (closed || e === GENERATOR_CLOSED) {
                        return;
                    }
                    throw e;
                }
            }
            try {
                next.forEach(p => p.reject(GENERATOR_CLOSED));
                next.length = 0;
            }
            catch (e) {
                console.log(`Error on cleanup: ${String(e)}`);
            }
        }
    };
}
class GeneratorSource {
    constructor() {
        Object.defineProperty(this, "next", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "current", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "closed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "finished", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.closed = false;
        this.finished = false;
        this.current = promiseWithResolver();
        this.next = [this.current];
    }
    enqueue(item) {
        if (this.closed || this.finished) {
            throw new Error("Cannot enqueue to a closed or finished source");
        }
        const promise = this.current;
        const next = promiseWithResolver();
        this.current = next;
        this.next.push(this.current);
        promise.resolve(item);
    }
    dispose() {
        if (this.closed)
            return;
        this.closed = true;
        // this.closedPromise.resolve(GENERATOR_CLOSED);
        this.current.resolve(GENERATOR_CLOSED);
    }
    finish() {
        this.finished = true;
        this.current.resolve(GENERATOR_CLOSED);
    }
    [Symbol.asyncIterator]() {
        return this.values();
    }
    [Symbol.dispose]() {
        console.log("@disposed");
        this.dispose();
    }
    async *values() {
        while (!this.closed) {
            try {
                const ret = await this.next[0].promise;
                this.next = this.next.slice(1); //// Drop the resolved promise
                if (ret === GENERATOR_CLOSED)
                    break;
                yield ret;
            }
            catch (e) {
                if (this.closed || e === GENERATOR_CLOSED) {
                    break;
                }
                throw e;
            }
        }
        try {
            this.next.forEach(p => {
                p.reject();
            });
            this.next.length = 0;
        }
        catch (e) {
            console.log(`Error on cleanup: ${String(e)}`);
        }
    }
}

export { GeneratorSource, generativeBuffer };
//# sourceMappingURL=source.js.map
