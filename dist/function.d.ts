type ThrottledFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;
export declare const throttle: <T extends (...args: any[]) => any>(func: T, timeout: number) => ThrottledFunction<T>;
export {};
