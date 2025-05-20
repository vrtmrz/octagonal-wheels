[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [memory](../../../README.md) / [memutil](../README.md) / Trench

# Class: Trench

Defined in: [src/memory/memutil.ts:45](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L45)

Represents a Trench, which is a memory utility class for managing data storage.

## Constructors

### Constructor

```ts
new Trench(db: SimpleStore<any>, flushExistItems: boolean): Trench;
```

Defined in: [src/memory/memutil.ts:53](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L53)

Constructs a new instance of the Trench class.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `db` | [`SimpleStore`](../../../../databases/namespaces/simplestorebase/interfaces/SimpleStore.md)\<`any`\> | `undefined` | The SimpleStore instance used for storing data. |
| `flushExistItems` | `boolean` | `true` | Determines whether to flush existing items from the database. |

#### Returns

`Trench`

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_db"></a> `_db` | [`SimpleStore`](../../../../databases/namespaces/simplestorebase/interfaces/SimpleStore.md)\<`any`\> | `undefined` | [src/memory/memutil.ts:46](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L46) |
| <a id="_flushtask"></a> `_flushTask` | `undefined` \| `Promise`\<`void`\> | `undefined` | [src/memory/memutil.ts:47](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L47) |
| <a id="concealing"></a> `concealing` | `Map`\<`string`, `any`\> | `undefined` | [src/memory/memutil.ts:87](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L87) |

## Methods

### \_dequeue()

```ts
_dequeue<T>(type: string, key: string): Promise<undefined | T>;
```

Defined in: [src/memory/memutil.ts:185](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L185)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### \_dequeueWithCommit()

```ts
_dequeueWithCommit<T>(type: string, key: string): CommittableDequeuedValue<T>;
```

Defined in: [src/memory/memutil.ts:191](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L191)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `key` | `string` |

#### Returns

`CommittableDequeuedValue`\<`T`\>

***

### \_evacuate()

```ts
_evacuate<T>(storeTask: Promise<void>, key: string): Evacuated<T>;
```

Defined in: [src/memory/memutil.ts:136](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L136)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `storeTask` | `Promise`\<`void`\> |
| `key` | `string` |

#### Returns

[`Evacuated`](../type-aliases/Evacuated.md)\<`T`\>

***

### \_queue()

```ts
_queue<T>(
   type: string, 
   key: string, 
   obj: T, 
index: undefined | number): Promise<void>;
```

Defined in: [src/memory/memutil.ts:175](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L175)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `key` | `string` |
| `obj` | `T` |
| `index` | `undefined` \| `number` |

#### Returns

`Promise`\<`void`\>

***

### bury()

```ts
bury(key: string): Promise<void>;
```

Defined in: [src/memory/memutil.ts:112](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L112)

Dispose concealed object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to bury. |

#### Returns

`Promise`\<`void`\>

***

### conceal()

```ts
conceal<T>(obj: T): string;
```

Defined in: [src/memory/memutil.ts:94](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L94)

Conceals an object by generating a unique key and storing the object in SimpleStore.
The object can later be retrieved using the generated key.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The object to be concealed. |

#### Returns

`string`

The generated key used to retrieve the concealed object.

***

### dequeue()

```ts
dequeue<T>(key: string): Promise<undefined | T>;
```

Defined in: [src/memory/memutil.ts:236](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L236)

Removes and returns the first element from the queue associated with the specified key.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of elements in the queue. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key associated with the queue. |

#### Returns

`Promise`\<`undefined` \| `T`\>

The first element from the queue, or undefined if the queue is empty.

***

### dequeuePermanent()

```ts
dequeuePermanent<T>(key: string): Promise<undefined | T>;
```

Defined in: [src/memory/memutil.ts:269](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L269)

Dequeues an permanent item from the SimpleStore with the specified key.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the item to dequeue. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the item to dequeue. |

#### Returns

`Promise`\<`undefined` \| `T`\>

The dequeued item.

***

### dequeuePermanentWithCommit()

```ts
dequeuePermanentWithCommit<T>(key: string): CommittableDequeuedValue<T>;
```

Defined in: [src/memory/memutil.ts:279](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L279)

Dequeues an permanent item from the SimpleStore. we can commit or cancel the dequeue operation.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the item being dequeued. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the item to dequeue. |

#### Returns

`CommittableDequeuedValue`\<`T`\>

The dequeued item.

***

### dequeueWithCommit()

```ts
dequeueWithCommit<T>(key: string): CommittableDequeuedValue<T>;
```

Defined in: [src/memory/memutil.ts:246](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L246)

Dequeues an item. you can commit or cancel the dequeue operation.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the item being dequeued. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the item to dequeue. |

#### Returns

`CommittableDequeuedValue`\<`T`\>

The dequeued item.

***

### eraseAllEphemerals()

```ts
eraseAllEphemerals(): Promise<void>;
```

Defined in: [src/memory/memutil.ts:69](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L69)

Deletes all ephemeral keys from the SimpleStore.

#### Returns

`Promise`\<`void`\>

A promise that resolves when all ephemeral keys are deleted.

***

### eraseAllPermanences()

```ts
eraseAllPermanences(): Promise<void>;
```

Defined in: [src/memory/memutil.ts:80](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L80)

Deletes all permanences from the SimpleStore.

#### Returns

`Promise`\<`void`\>

A promise that resolves when all permanences are deleted.

***

### evacuate()

```ts
evacuate<T>(obj: T): Evacuated<T>;
```

Defined in: [src/memory/memutil.ts:169](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L169)

Evacuates an object by storing it in the database and returning an `Evacuated` object.
If the object is a Promise, it is first evacuated using the `evacuatePromise` method.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The object to be evacuated. |

#### Returns

[`Evacuated`](../type-aliases/Evacuated.md)\<`T`\>

An `Evacuated` object representing the evacuated object.

***

### evacuatePromise()

```ts
evacuatePromise<T>(task: Promise<T>): Evacuated<T>;
```

Defined in: [src/memory/memutil.ts:155](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L155)

Evacuates a promise by storing its resolved value in the database and returning an `Evacuated` object.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `task` | `Promise`\<`T`\> | The promise to be evacuated. |

#### Returns

[`Evacuated`](../type-aliases/Evacuated.md)\<`T`\>

An `Evacuated` object representing the evacuated promise.

***

### expose()

```ts
expose<T>(key: string): Promise<undefined | T>;
```

Defined in: [src/memory/memutil.ts:126](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L126)

Exposes a concealed object by its key.
The object is removed from the database after being exposed.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the concealed object. |

#### Returns

`Promise`\<`undefined` \| `T`\>

The exposed object.

***

### queue()

```ts
queue<T>(
   key: string, 
   obj: T, 
index?: number): Promise<void>;
```

Defined in: [src/memory/memutil.ts:226](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L226)

Queues an object with the specified key and optional index.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the object being queued. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to associate with the object. |
| `obj` | `T` | The object to be queued. |
| `index?` | `number` | The optional index at which to insert the object in the queue. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the object is queued.

***

### queuePermanent()

```ts
queuePermanent<T>(
   key: string, 
   obj: T, 
index?: number): Promise<void>;
```

Defined in: [src/memory/memutil.ts:259](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/memory/memutil.ts#L259)

Queues an object permanently in the SimpleStore.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the object being queued. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to associate with the object. |
| `obj` | `T` | The object to be queued. |
| `index?` | `number` | Optional. The index at which to insert the object in the queue. |

#### Returns

`Promise`\<`void`\>

The updated queue.
