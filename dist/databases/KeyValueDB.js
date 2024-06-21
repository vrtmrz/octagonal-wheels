import { o as openDB, d as deleteDB } from '../index-BeukPKWu.js';

const databaseCache = {};
async function OpenKeyValueDatabase(dbKey) {
    if (dbKey in databaseCache) {
        databaseCache[dbKey].close();
        delete databaseCache[dbKey];
    }
    const storeKey = dbKey;
    const dbPromise = openDB(dbKey, 1, {
        upgrade(db) {
            db.createObjectStore(storeKey);
        },
    });
    const db = await dbPromise;
    databaseCache[dbKey] = db;
    return {
        async get(key) {
            return await db.get(storeKey, key);
        },
        async set(key, value) {
            return await db.put(storeKey, value, key);
        },
        async del(key) {
            return await db.delete(storeKey, key);
        },
        async clear() {
            return await db.clear(storeKey);
        },
        async keys(query, count) {
            return await db.getAllKeys(storeKey, query, count);
        },
        close() {
            delete databaseCache[dbKey];
            return db.close();
        },
        async destroy() {
            delete databaseCache[dbKey];
            db.close();
            await deleteDB(dbKey);
        },
    };
}

export { OpenKeyValueDatabase };
