export declare const delay: <T>(ms: number, result?: T) => Promise<T>;
declare function polyfillPromiseWithResolvers<T>(): {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};
export declare const promiseWithResolver: typeof polyfillPromiseWithResolvers;
export declare const noop: () => void;
export declare function fireAndForget(p: Promise<any> | (() => Promise<any>)): void;
export {};
