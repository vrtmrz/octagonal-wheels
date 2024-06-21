import { RESULT_NOT_FOUND, RESULT_TIMED_OUT } from "../common/const";
export type WithTimeout<T> = T | typeof RESULT_TIMED_OUT;
export type WithNotFound<T> = T | typeof RESULT_NOT_FOUND;
export declare function waitForSignal(id: string, timeout?: number): Promise<boolean>;
export declare function waitForValue<T>(id: string, timeout?: number): Promise<WithTimeout<T>>;
export declare function sendSignal(key: string): void;
export declare function sendValue<T>(key: string, result: T): void;
