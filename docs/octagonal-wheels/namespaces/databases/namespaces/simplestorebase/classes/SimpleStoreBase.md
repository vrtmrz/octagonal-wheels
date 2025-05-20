[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [databases](../../../README.md) / [simplestorebase](../README.md) / SimpleStoreBase

# Class: `abstract` SimpleStoreBase\<T\>

Defined in: [src/databases/SimpleStoreBase.ts:5](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L5)

Represents a base class for a simple key-value-store.

## Extended by

- [`SimpleStoreIDB`](../../simplestoreidb/classes/SimpleStoreIDB.md)

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the values stored in the store. |

## Constructors

### Constructor

```ts
new SimpleStoreBase<T>(): SimpleStoreBase<T>;
```

#### Returns

`SimpleStoreBase`\<`T`\>

## Methods

### clear()

```ts
abstract clear(): Promise<void>;
```

Defined in: [src/databases/SimpleStoreBase.ts:11](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L11)

#### Returns

`Promise`\<`void`\>

***

### close()

```ts
abstract close(): void;
```

Defined in: [src/databases/SimpleStoreBase.ts:12](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L12)

#### Returns

`void`

***

### delete()

```ts
abstract delete(key: string): Promise<void>;
```

Defined in: [src/databases/SimpleStoreBase.ts:8](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L8)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

***

### destroy()

```ts
abstract destroy(): Promise<void>;
```

Defined in: [src/databases/SimpleStoreBase.ts:13](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L13)

#### Returns

`Promise`\<`void`\>

***

### get()

```ts
abstract get(key: string): Promise<undefined | T>;
```

Defined in: [src/databases/SimpleStoreBase.ts:6](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### keys()

```ts
abstract keys(
   from: undefined | string, 
   to: undefined | string, 
count?: number): Promise<string[]>;
```

Defined in: [src/databases/SimpleStoreBase.ts:9](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | `undefined` \| `string` |
| `to` | `undefined` \| `string` |
| `count?` | `number` |

#### Returns

`Promise`\<`string`[]\>

***

### set()

```ts
abstract set(key: string, value: T): Promise<void>;
```

Defined in: [src/databases/SimpleStoreBase.ts:7](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/databases/SimpleStoreBase.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`Promise`\<`void`\>
