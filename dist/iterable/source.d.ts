import { promiseWithResolver } from "../promises";
declare const GENERATOR_CLOSED: unique symbol;
export declare function generativeBuffer<T>(): {
    enqueue(item: T): void;
    [Symbol.asyncIterator](): AsyncGenerator<Awaited<T>, void, unknown>;
    dispose(): void;
    finish(): void;
    [Symbol.dispose](): void;
    values(): AsyncGenerator<Awaited<T>, void, unknown>;
};
export declare class GeneratorSource<T> {
    next: ReturnType<typeof promiseWithResolver<T | typeof GENERATOR_CLOSED>>[];
    current: ReturnType<typeof promiseWithResolver<T | typeof GENERATOR_CLOSED>>;
    closed: boolean;
    finished: boolean;
    constructor();
    enqueue(item: T): void;
    dispose(): void;
    finish(): void;
    [Symbol.asyncIterator](): AsyncGenerator<Awaited<T>, void, unknown>;
    [Symbol.dispose](): void;
    values(): AsyncGenerator<Awaited<T>, void, unknown>;
}
export {};
