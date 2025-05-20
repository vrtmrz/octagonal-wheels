[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [databases](../../../README.md) / [simplestoreidb](../README.md) / SimpleStoreIDB

# Class: SimpleStoreIDB\<T\>

Defined in: [src/databases/SimpleStoreIDB.ts:9](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L9)

Represents a simple store using IndexedDB.

## Extends

- [`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md)\<`T`\>

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the values stored in the store. |

## Constructors

### Constructor

```ts
new SimpleStoreIDB<T>(name: string): SimpleStoreIDB<T>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:12](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`SimpleStoreIDB`\<`T`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md).[`constructor`](../../simplestorebase/classes/SimpleStoreBase.md#constructor)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="db"></a> `db?` | `Promise`\<`IDBPDatabase`\<`any`\>\> | [src/databases/SimpleStoreIDB.ts:17](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L17) |
| <a id="name"></a> `name` | `string` | [src/databases/SimpleStoreIDB.ts:11](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L11) |

## Methods

### clear()

```ts
clear(): Promise<void>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:51](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L51)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md).[`clear`](../../simplestorebase/classes/SimpleStoreBase.md#clear)

***

### close()

```ts
close(): void;
```

Defined in: [src/databases/SimpleStoreIDB.ts:56](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L56)

#### Returns

`void`

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md).[`close`](../../simplestorebase/classes/SimpleStoreBase.md#close)

***

### delete()

```ts
delete(key: string): Promise<void>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:37](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L37)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md).[`delete`](../../simplestorebase/classes/SimpleStoreBase.md#delete)

***

### destroy()

```ts
destroy(): Promise<void>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:65](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L65)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md).[`destroy`](../../simplestorebase/classes/SimpleStoreBase.md#destroy)

***

### get()

```ts
get(key: string): Promise<undefined | T>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:27](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md).[`get`](../../simplestorebase/classes/SimpleStoreBase.md#get)

***

### initDB()

```ts
initDB(name: string): void;
```

Defined in: [src/databases/SimpleStoreIDB.ts:19](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

***

### keys()

```ts
keys(
   from?: string, 
   to?: string, 
count?: number): Promise<string[]>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:41](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L41)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `from?` | `string` |
| `to?` | `string` |
| `count?` | `number` |

#### Returns

`Promise`\<`string`[]\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md).[`keys`](../../simplestorebase/classes/SimpleStoreBase.md#keys)

***

### keysIDB()

```ts
keysIDB(query?: IDBValidKey | IDBKeyRange, count?: number): Promise<IDBValidKey[]>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:46](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L46)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | `IDBValidKey` \| `IDBKeyRange` |
| `count?` | `number` |

#### Returns

`Promise`\<`IDBValidKey`[]\>

***

### set()

```ts
set(key: string, value: T): Promise<void>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:32](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/classes/SimpleStoreBase.md).[`set`](../../simplestorebase/classes/SimpleStoreBase.md#set)
