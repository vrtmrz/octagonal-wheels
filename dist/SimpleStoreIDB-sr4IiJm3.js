import { o as openDB, d as deleteDB } from './index-BeukPKWu.js';
import { a as SimpleStoreBase } from './SimpleStoreBase-BmfPaz5W.js';
import { f as fireAndForget } from './promises-DnQZoyFR.js';

/**
 * Represents a simple store using IndexedDB.
 * @template T - The type of the values stored in the store.
 */
class SimpleStoreIDB extends SimpleStoreBase {
    constructor(name) {
        super();
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "db", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.initDB(name);
    }
    initDB(name) {
        this.db = openDB(name, 1, {
            upgrade(db) {
                db.createObjectStore(name);
            },
        });
    }
    async get(key) {
        if (this.db == undefined)
            throw new Error("Database not initialized or already destroyed");
        return await (await this.db).get(this.name, key);
    }
    async set(key, value) {
        if (this.db == undefined)
            throw new Error("Database not initialized or already destroyed");
        return await (await this.db).put(this.name, value, key);
    }
    async delete(key) {
        if (this.db == undefined)
            throw new Error("Database not initialized or already destroyed");
        return await (await this.db).delete(this.name, key);
    }
    async keys(from, to, count) {
        if (this.db == undefined)
            throw new Error("Database not initialized or already destroyed");
        const range = from && to ? IDBKeyRange.bound(from, to) : from ? IDBKeyRange.lowerBound(from) : to ? IDBKeyRange.upperBound(to) : undefined;
        return await (await this.db).getAllKeys(this.name, range, count);
    }
    async keysIDB(query, count) {
        if (this.db == undefined)
            throw new Error("Database not initialized or already destroyed");
        return await (await this.db).getAllKeys(this.name, query, count);
    }
    async clear() {
        if (this.db == undefined)
            throw new Error("Database not initialized or already destroyed");
        return (await this.db).clear(this.name);
    }
    close() {
        fireAndForget(async () => {
            if (this.db == undefined)
                throw new Error("Database not initialized or already destroyed");
            (await this.db).close();
            this.db = undefined;
        });
    }
    async destroy() {
        if (this.db == undefined)
            throw new Error("Database not initialized or already destroyed");
        (await this.db).close();
        this.db = undefined;
        return await deleteDB(this.name);
    }
}

var SimpleStoreIDB$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SimpleStoreIDB: SimpleStoreIDB
});

export { SimpleStoreIDB$1 as S, SimpleStoreIDB as a };
//# sourceMappingURL=SimpleStoreIDB-sr4IiJm3.js.map
