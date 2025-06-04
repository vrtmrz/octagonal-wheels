import { deleteDB, openDB, type IDBPDatabase } from "idb";
import { SimpleStoreBase } from "./SimpleStoreBase.ts";
import { fireAndForget } from "../promises.ts";

/**
 * Represents a simple store using IndexedDB.
 * @template T - The type of the values stored in the store.
 */
export class SimpleStoreIDB<T> extends SimpleStoreBase<T> {
    name: string;
    constructor(name: string) {
        super();
        this.name = name;
        this.initDB(name);
    }
    db?: Promise<IDBPDatabase<any>>;

    initDB(name: string) {
        this.db = openDB(name, 1, {
            upgrade(db) {
                db.createObjectStore(name);
            },
        });
    }

    async get(key: string): Promise<T | undefined> {
        if (this.db == undefined) throw new Error("Database not initialized or already destroyed");
        return await (await this.db).get(this.name, key);
    }

    async set(key: string, value: T): Promise<void> {
        if (this.db == undefined) throw new Error("Database not initialized or already destroyed");
        return await (await this.db).put(this.name, value, key);
    }

    async delete(key: string): Promise<void> {
        if (this.db == undefined) throw new Error("Database not initialized or already destroyed");
        return await (await this.db).delete(this.name, key);
    }
    async keys(from?: string | undefined, to?: string | undefined, count?: number | undefined): Promise<string[]> {
        if (this.db == undefined) throw new Error("Database not initialized or already destroyed");
        const range =
            from && to
                ? IDBKeyRange.bound(from, to)
                : from
                  ? IDBKeyRange.lowerBound(from)
                  : to
                    ? IDBKeyRange.upperBound(to)
                    : undefined;
        return await (await this.db).getAllKeys(this.name, range, count);
    }
    async keysIDB(query?: IDBValidKey | IDBKeyRange, count?: number): Promise<IDBValidKey[]> {
        if (this.db == undefined) throw new Error("Database not initialized or already destroyed");
        return await (await this.db).getAllKeys(this.name, query, count);
    }

    async clear(): Promise<void> {
        if (this.db == undefined) throw new Error("Database not initialized or already destroyed");
        return (await this.db).clear(this.name);
    }

    close(): void {
        fireAndForget(async () => {
            if (this.db == undefined) throw new Error("Database not initialized or already destroyed");
            (await this.db).close();
            this.db = undefined!;
        });
    }

    async destroy(): Promise<void> {
        if (this.db == undefined) throw new Error("Database not initialized or already destroyed");
        (await this.db).close();
        this.db = undefined!;
        return await deleteDB(this.name);
    }
}
