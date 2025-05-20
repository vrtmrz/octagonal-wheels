[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [databases](../../../README.md) / [keyvaluedatabase](../README.md) / OpenKeyValueDatabase

# Function: OpenKeyValueDatabase()

```ts
function OpenKeyValueDatabase(dbKey: string): Promise<KeyValueDatabase>;
```

Defined in: [src/databases/KeyValueDB.ts:60](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L60)

Opens a key-value database and returns a promise that resolves to a KeyValueDatabase object.
If the database with the given key already exists in the cache, it will be closed and removed from the cache before opening a new one.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dbKey` | `string` | The key of the database. |

## Returns

`Promise`\<[`KeyValueDatabase`](../interfaces/KeyValueDatabase.md)\>

A promise that resolves to a KeyValueDatabase object.
