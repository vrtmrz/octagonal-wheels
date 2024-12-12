import { promiseWithResolver } from "../promises";
declare const GENERATOR_CLOSED: unique symbol;
export declare function generativeBuffer<T>(): {
    enqueue(item: T): void;
    [Symbol.asyncIterator](): AsyncGenerator<Awaited<T>, void, unknown>;
    dispose(): void;
    finish(): void;
    [Symbol.dispose](): void;
    values(): AsyncGenerator<Awaited<T>, void, unknown>;
    readonly size: number;
};
export declare class GeneratorSource<T> {
    _next: ReturnType<typeof promiseWithResolver<T | typeof GENERATOR_CLOSED>>[];
    _current: ReturnType<typeof promiseWithResolver<T | typeof GENERATOR_CLOSED>>;
    _onSizeUpdated?: (size: number) => void;
    _updateSize(): void;
    get size(): number;
    closed: boolean;
    finished: boolean;
    constructor(onSizeUpdated?: (size: number) => void);
    enqueue(item: T): void;
    dispose(): void;
    finish(): void;
    [Symbol.asyncIterator](): AsyncGenerator<Awaited<T>, void, unknown>;
    [Symbol.dispose](): void;
    values(): AsyncGenerator<Awaited<T>, void, unknown>;
}
export {};
