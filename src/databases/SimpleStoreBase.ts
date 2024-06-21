/**
 * Represents a base class for a simple key-value-store.
 * @template T The type of the values stored in the store.
 */
export abstract class SimpleStoreBase<T> {
    abstract get(key: string): Promise<T | undefined>;
    abstract set(key: string, value: T): Promise<void>;
    abstract delete(key: string): Promise<void>;
    abstract keys(from: string | undefined, to: string | undefined, count?: number): Promise<string[]>;

    abstract clear(): Promise<void>;
    abstract close(): void;
    abstract destroy(): Promise<void>;
}

/**
 * Represents a simple key-value store.
 * @template T The type of values stored in the store.
 */
export interface SimpleStore<T> {
    /**
     * Retrieves the value associated with the specified key.
     * @param key The key to retrieve the value for.
     * @returns A Promise that resolves to the value associated with the key, or undefined if the key does not exist.
     */
    get(key: string): Promise<T | undefined>;

    /**
     * Sets the value associated with the specified key.
     * @param key The key to set the value for.
     * @param value The value to be set.
     * @returns A Promise that resolves when the value is successfully set.
     */
    set(key: string, value: T): Promise<void>;

    /**
     * Deletes the value associated with the specified key.
     * @param key The key to delete the value for.
     * @returns A Promise that resolves when the value is successfully deleted.
     */
    delete(key: string): Promise<void>;

    /**
     * Retrieves an array of keys within the specified range.
     * @param from The starting key (inclusive) of the range. If undefined, starts from the first key.
     * @param to The ending key (inclusive) of the range. If undefined, ends at the last key.
     * @param count The maximum number of keys to retrieve. If not specified, retrieves all keys within the range.
     * @returns A Promise that resolves to an array of keys within the specified range.
     */
    keys(from: string | undefined, to: string | undefined, count?: number): Promise<string[]>;
}
