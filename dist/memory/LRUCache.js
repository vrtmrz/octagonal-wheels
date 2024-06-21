import { Logger, LOG_LEVEL_VERBOSE } from '../common/logger.js';

class LRUCache {
    constructor(maxCache, maxCacheLength, forwardOnly = false) {
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map([])
        });
        Object.defineProperty(this, "revCache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map([])
        });
        Object.defineProperty(this, "maxCache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 200
        });
        Object.defineProperty(this, "maxCachedLength", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 50000000
        }); // means 50 mb to 400mb.
        Object.defineProperty(this, "cachedLength", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "enableReversed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        this.maxCache = maxCache || 200;
        this.maxCachedLength = (maxCacheLength || 1) * 1000000;
        this.enableReversed = !forwardOnly;
        Logger(`Cache initialized ${this.maxCache} / ${this.maxCachedLength}`, LOG_LEVEL_VERBOSE);
    }
    clear() {
        this.cache.clear();
        this.revCache.clear();
    }
    has(key) {
        return this.cache.has(key);
    }
    get(key) {
        const v = this.cache.get(key);
        if (v) {
            // update the key to recently used.
            this.cache.delete(key);
            this.cache.set(key, v);
            if (this.enableReversed) {
                this.revCache.delete(v);
                this.revCache.set(v, key);
            }
        }
        return v;
    }
    revGet(value) {
        const key = this.revCache.get(value);
        if (key) {
            // update the key to recently used.
            this.cache.delete(key);
            this.revCache.delete(value);
            this.cache.set(key, value);
            this.revCache.set(value, key);
        }
        return key;
    }
    set(key, value) {
        this.cache.set(key, value);
        if (this.enableReversed)
            this.revCache.set(value, key);
        this.cachedLength += `${value}`.length;
        if (this.cache.size > this.maxCache || this.cachedLength > this.maxCachedLength) {
            for (const [key, value] of this.cache) {
                this.cache.delete(key);
                if (this.enableReversed)
                    this.revCache.delete(value);
                this.cachedLength -= `${value}`.length;
                if (this.cache.size <= this.maxCache && this.cachedLength <= this.maxCachedLength)
                    break;
            }
        }
    }
}

export { LRUCache };
