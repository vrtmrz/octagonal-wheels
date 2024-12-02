import { promiseWithResolver } from "../promises";

const GENERATOR_CLOSED = Symbol("closed");
export function generativeBuffer<T>() {
    let current = promiseWithResolver<T | typeof GENERATOR_CLOSED>();
    let next = [current];
    let closed = false;
    let finished = false;

    return {
        enqueue(item: T) {
            if (closed || finished) {
                throw new Error("Cannot enqueue to a closed or finished source");
            }
            const promise = current;
            const newNext = promiseWithResolver<T | typeof GENERATOR_CLOSED>();
            current = newNext;
            next.push(current);
            promise.resolve(item);
        },
        [Symbol.asyncIterator](): AsyncGenerator<Awaited<T>, void, unknown> {
            return this.values();
        },
        dispose() {
            if (closed) return;
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
        async *values(): AsyncGenerator<Awaited<T>, void, unknown> {
            while (!closed) {
                try {
                    const ret = await next[0].promise;
                    next = next.slice(1); //// Drop the resolved promise
                    if (ret === GENERATOR_CLOSED) return;
                    yield ret;
                } catch (e) {
                    if (closed || e === GENERATOR_CLOSED) {
                        return;
                    }
                    throw e;
                }
            }
            try {
                next.forEach(p => p.reject(GENERATOR_CLOSED));
                next.length = 0;
            } catch (e) {
                console.log(`Error on cleanup: ${String(e)}`);
            }
        }
    };
}


export class GeneratorSource<T> {

    next: ReturnType<typeof promiseWithResolver<T | typeof GENERATOR_CLOSED>>[];
    current: ReturnType<typeof promiseWithResolver<T | typeof GENERATOR_CLOSED>>;
    closed: boolean;
    finished: boolean;
    constructor() {
        this.closed = false;
        this.finished = false;
        this.current = promiseWithResolver<T | typeof GENERATOR_CLOSED>();
        this.next = [this.current];
    }
    enqueue(item: T) {
        if (this.closed || this.finished) {
            throw new Error("Cannot enqueue to a closed or finished source");
        }
        const promise = this.current;
        const next = promiseWithResolver<T | typeof GENERATOR_CLOSED>();
        this.current = next;
        this.next.push(this.current);
        promise.resolve(item);
    }
    dispose() {
        if (this.closed) return;
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
                if (ret === GENERATOR_CLOSED) break;
                yield ret;
            } catch (e) {
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
        } catch (e) {
            console.log(`Error on cleanup: ${String(e)}`);
        }
    }
}

