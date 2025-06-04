[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [databases](../../README.md) / [simplestorebase](../README.md) / SimpleStore

# Interface: SimpleStore\<T\>

Defined in: [src/databases/SimpleStoreBase.ts:20](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L20)

Represents a simple key-value store.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of values stored in the store. |

## Methods

### delete()

```ts
delete(key: string): Promise<void>;
```

Defined in: [src/databases/SimpleStoreBase.ts:41](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L41)

Deletes the value associated with the specified key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to delete the value for. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the value is successfully deleted.

***

### get()

```ts
get(key: string): Promise<undefined | T>;
```

Defined in: [src/databases/SimpleStoreBase.ts:26](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L26)

Retrieves the value associated with the specified key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to retrieve the value for. |

#### Returns

`Promise`\<`undefined` \| `T`\>

A Promise that resolves to the value associated with the key, or undefined if the key does not exist.

***

### keys()

```ts
keys(
   from: undefined | string, 
   to: undefined | string, 
count?: number): Promise<string[]>;
```

Defined in: [src/databases/SimpleStoreBase.ts:50](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L50)

Retrieves an array of keys within the specified range.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `from` | `undefined` \| `string` | The starting key (inclusive) of the range. If undefined, starts from the first key. |
| `to` | `undefined` \| `string` | The ending key (inclusive) of the range. If undefined, ends at the last key. |
| `count?` | `number` | The maximum number of keys to retrieve. If not specified, retrieves all keys within the range. |

#### Returns

`Promise`\<`string`[]\>

A Promise that resolves to an array of keys within the specified range.

***

### set()

```ts
set(key: string, value: T): Promise<void>;
```

Defined in: [src/databases/SimpleStoreBase.ts:34](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L34)

Sets the value associated with the specified key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to set the value for. |
| `value` | `T` | The value to be set. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the value is successfully set.
