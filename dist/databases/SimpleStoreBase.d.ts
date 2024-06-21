export declare abstract class SimpleStoreBase<T> {
    abstract get(key: string): Promise<T | undefined>;
    abstract set(key: string, value: T): Promise<void>;
    abstract delete(key: string): Promise<void>;
    abstract keys(from: string | undefined, to: string | undefined, count?: number): Promise<string[]>;
    abstract clear(): Promise<void>;
    abstract close(): void;
    abstract destroy(): Promise<void>;
}
export interface SimpleStore<T> {
    get(key: string): Promise<T | undefined>;
    set(key: string, value: T): Promise<void>;
    delete(key: string): Promise<void>;
    keys(from: string | undefined, to: string | undefined, count?: number): Promise<string[]>;
}
