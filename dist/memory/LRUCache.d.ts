export declare class LRUCache<K, V> {
    private cache;
    private revCache;
    maxCache: number;
    maxCachedLength: number;
    cachedLength: number;
    enableReversed: boolean;
    constructor(maxCache: number, maxCacheLength: number, forwardOnly?: boolean);
    clear(): void;
    has(key: K): boolean;
    get(key: K): V | undefined;
    revGet(value: V): K | undefined;
    set(key: K, value: V): void;
}
