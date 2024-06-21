export type ReactiveChangeHandler<T> = (instance: ReactiveInstance<T>) => unknown;
export type ReactiveExpression<T> = (prev?: T) => T;
export type ReactiveValue<T> = {
    readonly value: T;
    onChanged: (handler: ReactiveChangeHandler<T>) => void;
    offChanged: (handler: ReactiveChangeHandler<T>) => void;
};
export type ReactiveSource<T> = {
    value: T;
    onChanged: (handler: ReactiveChangeHandler<T>) => void;
    offChanged: (handler: ReactiveChangeHandler<T>) => void;
};
export type ReactiveInstance<T> = {
    readonly value: T;
    markDirty(): void;
    rippleChanged(): void;
};
export declare function reactiveSource<T>(initialValue: T): ReactiveSource<T>;
export declare function reactive<T>(expression: (prev?: T) => T, initialValue?: T): ReactiveValue<T>;
export declare function computed<T>(expression: ReactiveExpression<T>): () => T;
