[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [databases](../../README.md) / [simplestoreidb](../README.md) / SimpleStoreIDB

# Class: SimpleStoreIDB\<T\>

Defined in: [src/databases/SimpleStoreIDB.ts:9](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L9)

Represents a simple store using IndexedDB.

## Extends

- [`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md)\<`T`\>

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the values stored in the store. |

## Constructors

### Constructor

```ts
new SimpleStoreIDB<T>(name: string): SimpleStoreIDB<T>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:11](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`SimpleStoreIDB`\<`T`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md).[`constructor`](../../simplestorebase/SimpleStoreBase/README.md#constructor)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="db"></a> `db?` | `Promise`\<`IDBPDatabase`\<`any`\>\> | [src/databases/SimpleStoreIDB.ts:16](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L16) |
| <a id="name"></a> `name` | `string` | [src/databases/SimpleStoreIDB.ts:10](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L10) |

## Methods

### clear()

```ts
clear(): Promise<void>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:57](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L57)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md).[`clear`](../../simplestorebase/SimpleStoreBase/README.md#clear)

***

### close()

```ts
close(): void;
```

Defined in: [src/databases/SimpleStoreIDB.ts:62](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L62)

#### Returns

`void`

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md).[`close`](../../simplestorebase/SimpleStoreBase/README.md#close)

***

### delete()

```ts
delete(key: string): Promise<void>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:36](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L36)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md).[`delete`](../../simplestorebase/SimpleStoreBase/README.md#delete)

***

### destroy()

```ts
destroy(): Promise<void>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:70](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L70)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md).[`destroy`](../../simplestorebase/SimpleStoreBase/README.md#destroy)

***

### get()

```ts
get(key: string): Promise<undefined | T>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:26](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L26)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md).[`get`](../../simplestorebase/SimpleStoreBase/README.md#get)

***

### initDB()

```ts
initDB(name: string): void;
```

Defined in: [src/databases/SimpleStoreIDB.ts:18](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L18)

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

Defined in: [src/databases/SimpleStoreIDB.ts:40](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L40)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `from?` | `string` |
| `to?` | `string` |
| `count?` | `number` |

#### Returns

`Promise`\<`string`[]\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md).[`keys`](../../simplestorebase/SimpleStoreBase/README.md#keys)

***

### keysIDB()

```ts
keysIDB(query?: IDBValidKey | IDBKeyRange, count?: number): Promise<IDBValidKey[]>;
```

Defined in: [src/databases/SimpleStoreIDB.ts:52](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L52)

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

Defined in: [src/databases/SimpleStoreIDB.ts:31](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreIDB.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SimpleStoreBase`](../../simplestorebase/SimpleStoreBase/README.md).[`set`](../../simplestorebase/SimpleStoreBase/README.md#set)
