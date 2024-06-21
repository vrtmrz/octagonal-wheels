/**
 * The Map, which can keep the data.
 */
export declare class PersistentMap<T> {
    _setCount: number;
    _map: Map<string, T>;
    _key: string;
    flush(): void;
    _save(): void;
    _load(suppliedEntries?: readonly (readonly [string, T])[]): Promise<void>;
    _queueSave(): void;
    delete(key: string): boolean;
    has(key: string): boolean;
    set(key: string, value: T): this;
    clear(): void;
    get(key: string, defValue?: T): T | undefined;
    constructor(key: string, entries?: readonly (readonly [string, T])[]);
}
