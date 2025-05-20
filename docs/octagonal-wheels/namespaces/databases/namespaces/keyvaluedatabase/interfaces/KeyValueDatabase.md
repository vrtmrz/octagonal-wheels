[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [databases](../../../README.md) / [keyvaluedatabase](../README.md) / KeyValueDatabase

# Interface: KeyValueDatabase

Defined in: [src/databases/KeyValueDB.ts:5](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L5)

Represents a key-value database.

## Methods

### clear()

```ts
clear(): Promise<void>;
```

Defined in: [src/databases/KeyValueDB.ts:32](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L32)

Clears all key-value pairs in the database.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the database is cleared.

***

### close()

```ts
close(): void;
```

Defined in: [src/databases/KeyValueDB.ts:45](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L45)

Closes the database connection.

#### Returns

`void`

***

### del()

```ts
del(key: IDBValidKey): Promise<void>;
```

Defined in: [src/databases/KeyValueDB.ts:26](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L26)

Deletes the value associated with the specified key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `IDBValidKey` | The key to delete the value for. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the value is deleted.

***

### destroy()

```ts
destroy(): Promise<void>;
```

Defined in: [src/databases/KeyValueDB.ts:51](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L51)

Destroys the database and removes all data.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the database is destroyed.

***

### get()

```ts
get<T>(key: IDBValidKey): Promise<T>;
```

Defined in: [src/databases/KeyValueDB.ts:11](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L11)

Retrieves the value associated with the specified key.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `IDBValidKey` | The key to retrieve the value for. |

#### Returns

`Promise`\<`T`\>

A promise that resolves with the retrieved value.

***

### keys()

```ts
keys(query?: IDBValidKey | IDBKeyRange, count?: number): Promise<IDBValidKey[]>;
```

Defined in: [src/databases/KeyValueDB.ts:40](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L40)

Retrieves an array of keys that match the specified query.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | `IDBValidKey` \| `IDBKeyRange` | The query to match the keys against. |
| `count?` | `number` | The maximum number of keys to retrieve. |

#### Returns

`Promise`\<`IDBValidKey`[]\>

A promise that resolves with an array of keys.

***

### set()

```ts
set<T>(key: IDBValidKey, value: T): Promise<IDBValidKey>;
```

Defined in: [src/databases/KeyValueDB.ts:19](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/KeyValueDB.ts#L19)

Sets the value associated with the specified key.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `IDBValidKey` | The key to set the value for. |
| `value` | `T` | The value to be set. |

#### Returns

`Promise`\<`IDBValidKey`\>

A promise that resolves with the key.
