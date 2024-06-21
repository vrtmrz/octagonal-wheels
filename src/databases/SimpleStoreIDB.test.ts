import { describe, beforeEach, afterEach, test, expect, should } from 'vitest';
import { SimpleStoreIDB } from './SimpleStoreIDB';

describe('SimpleStoreIDB', () => {
    let store: SimpleStoreIDB<string>;
    beforeEach(() => {
        store = new SimpleStoreIDB<string>('test-store');
    });

    afterEach(async () => {
        if (store.db !== undefined) await store.destroy();
    });

    test('should get unset value as undefined', async () => {
        const key = 'test-key';

        const result = await store.get(key);

        expect(result).toBeUndefined();
    });
    test('should set and get a value', async () => {
        const key = 'test-key';
        const value = 'test-value';

        await store.set(key, value);
        const result = await store.get(key);

        expect(result).toBe(value);
    });

    test('should delete a value', async () => {
        const key = 'test-key';
        const value = 'test-value';

        await store.set(key, value);
        await store.delete(key);
        const result = await store.get(key);

        expect(result).toBeUndefined();
    });

    test('should return keys within a range', async () => {
        const keys = ['key1', 'key2', 'key3', 'key4', 'key5'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        const result = await store.keys('key2', 'key4');

        expect(result).toEqual(['key2', 'key3', 'key4']);
    });

    test('should return all keys', async () => {
        const keys = ['key1', 'key2', 'key3'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        const result = await store.keys();

        expect(result).toEqual(keys);
    });

    test('should clear all values', async () => {
        const keys = ['key1', 'key2', 'key3'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        await store.clear();

        for (const key of keys) {
            const result = await store.get(key);
            expect(result).toBeUndefined();
        }
    }); test('should return all keys using keysIDB', async () => {
        const keys = ['key1', 'key2', 'key3'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        const result = await store.keysIDB();

        expect(result).toEqual(keys);
    });

    test('should return keys within a range using keysIDB', async () => {
        const keys = ['key1', 'key2', 'key3', 'key4', 'key5'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        const result = await store.keysIDB(IDBKeyRange.bound('key2', 'key4'));

        expect(result).toEqual(['key2', 'key3', 'key4']);
    });

    test('should return keys with a count limit using keysIDB', async () => {
        const keys = ['key1', 'key2', 'key3', 'key4', 'key5'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        const result = await store.keysIDB(undefined, 3);

        expect(result).toEqual(['key1', 'key2', 'key3']);
    });
    test('should return all keys using keysIDB', async () => {
        const keys = ['key1', 'key2', 'key3'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        const result = await store.keysIDB();

        expect(result).toEqual(keys);
    });

    test('should return keys within a range using keysIDB', async () => {
        const keys = ['key1', 'key2', 'key3', 'key4', 'key5'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        const result = await store.keysIDB(IDBKeyRange.bound('key2', 'key4'));

        expect(result).toEqual(['key2', 'key3', 'key4']);
    });

    test('should return keys with a count limit using keysIDB', async () => {
        const keys = ['key1', 'key2', 'key3', 'key4', 'key5'];

        for (const key of keys) {
            await store.set(key, 'value');
        }

        const result = await store.keysIDB(undefined, 3);

        expect(result).toEqual(['key1', 'key2', 'key3']);
    });

    test('should destroy the database', async () => {
        // Act
        await store.destroy();

        const key = 'test-key';
        expect((async () => await store.clear())).rejects.toThrowError();
        expect((async () => await store.delete(key))).rejects.toThrowError();
        expect((async () => await store.set(key, "a"))).rejects.toThrowError();
        expect((async () => await store.get(key))).rejects.toThrowError();
        expect((async () => await store.keys())).rejects.toThrowError();
        expect((async () => await store.keysIDB())).rejects.toThrowError();
        expect((async () => await store.destroy())).rejects.toThrowError();
    });
    test('should close the database', async () => {


        // Act
        store.close();

        // Assert
        // Verify that the database is closed by attempting to get a value
        const key = 'test-key';
        expect((async () => await store.clear())).rejects.toThrowError();
        expect((async () => await store.delete(key))).rejects.toThrowError();
        expect((async () => await store.set(key, "a"))).rejects.toThrowError();
        expect((async () => await store.get(key))).rejects.toThrowError();
        expect((async () => await store.keys())).rejects.toThrowError();
        expect((async () => await store.keysIDB())).rejects.toThrowError();
    });

});