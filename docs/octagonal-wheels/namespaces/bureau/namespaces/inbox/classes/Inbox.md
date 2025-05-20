[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [bureau](../../../README.md) / [inbox](../README.md) / Inbox

# Class: Inbox\<T\>

Defined in: [src/bureau/Inbox.ts:182](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L182)

## Extends

- [`SyncInbox`](SyncInbox.md)\<`T`\>

## Extended by

- [`InboxWithEvent`](InboxWithEvent.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new Inbox<T>(capacity: number): Inbox<T>;
```

Defined in: [src/bureau/Inbox.ts:191](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L191)

Creates a new PostBox.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `capacity` | `number` | The capacity of the buffer. |

#### Returns

`Inbox`\<`T`\>

#### Overrides

[`SyncInbox`](SyncInbox.md).[`constructor`](SyncInbox.md#constructor)

## Properties

| Property | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_buffer"></a> `_buffer` | `T`[] | `undefined` | [`SyncInbox`](SyncInbox.md).[`_buffer`](SyncInbox.md#_buffer) | [src/bureau/Inbox.ts:18](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L18) |
| <a id="_capacity"></a> `_capacity` | `number` | `undefined` | [`SyncInbox`](SyncInbox.md).[`_capacity`](SyncInbox.md#_capacity) | [src/bureau/Inbox.ts:17](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L17) |
| <a id="_disposedpromise"></a> `_disposedPromise` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`void`\> | `undefined` | [`SyncInbox`](SyncInbox.md).[`_disposedPromise`](SyncInbox.md#_disposedpromise) | [src/bureau/Inbox.ts:24](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L24) |
| <a id="_isdisposed"></a> `_isDisposed` | `boolean` | `false` | [`SyncInbox`](SyncInbox.md).[`_isDisposed`](SyncInbox.md#_isdisposed) | [src/bureau/Inbox.ts:23](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L23) |
| <a id="_lockfull"></a> `_lockFull` | \| `undefined` \| [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<*typeof* [`READY_POST_SIGNAL`](../variables/READY_POST_SIGNAL.md)\> | `undefined` | - | [src/bureau/Inbox.ts:184](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L184) |
| <a id="_lockready"></a> `_lockReady` | \| `undefined` \| [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<*typeof* [`READY_PICK_SIGNAL`](../variables/READY_PICK_SIGNAL.md)\> | `undefined` | - | [src/bureau/Inbox.ts:185](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L185) |
| <a id="_readidx"></a> `_readIdx` | `number` | `0` | [`SyncInbox`](SyncInbox.md).[`_readIdx`](SyncInbox.md#_readidx) | [src/bureau/Inbox.ts:21](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L21) |
| <a id="_wraparoundcount"></a> `_wrapAroundCount` | `number` | `0` | [`SyncInbox`](SyncInbox.md).[`_wrapAroundCount`](SyncInbox.md#_wraparoundcount) | [src/bureau/Inbox.ts:22](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L22) |
| <a id="_writeidx"></a> `_writeIdx` | `number` | `0` | [`SyncInbox`](SyncInbox.md).[`_writeIdx`](SyncInbox.md#_writeidx) | [src/bureau/Inbox.ts:20](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L20) |

## Accessors

### free

#### Get Signature

```ts
get free(): number;
```

Defined in: [src/bureau/Inbox.ts:56](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L56)

The number of free slots in the buffer.

##### Returns

`number`

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`free`](SyncInbox.md#free)

***

### isDisposed

#### Get Signature

```ts
get isDisposed(): boolean;
```

Defined in: [src/bureau/Inbox.ts:81](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L81)

##### Returns

`boolean`

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`isDisposed`](SyncInbox.md#isdisposed)

***

### isFull

#### Get Signature

```ts
get isFull(): boolean;
```

Defined in: [src/bureau/Inbox.ts:70](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L70)

Whether the buffer is full.

##### Returns

`boolean`

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`isFull`](SyncInbox.md#isfull)

***

### isReady

#### Get Signature

```ts
get isReady(): boolean;
```

Defined in: [src/bureau/Inbox.ts:77](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L77)

Whether the buffer is ready to be picked.

##### Returns

`boolean`

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`isReady`](SyncInbox.md#isready)

***

### isRunningOut

#### Get Signature

```ts
get isRunningOut(): boolean;
```

Defined in: [src/bureau/Inbox.ts:63](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L63)

Whether the buffer is running out.

##### Returns

`boolean`

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`isRunningOut`](SyncInbox.md#isrunningout)

***

### onDisposed

#### Get Signature

```ts
get onDisposed(): Promise<void>;
```

Defined in: [src/bureau/Inbox.ts:84](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L84)

##### Returns

`Promise`\<`void`\>

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`onDisposed`](SyncInbox.md#ondisposed)

***

### size

#### Get Signature

```ts
get size(): number;
```

Defined in: [src/bureau/Inbox.ts:50](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L50)

The number of items in the buffer.

##### Returns

`number`

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`size`](SyncInbox.md#size)

***

### state

#### Get Signature

```ts
get state(): InboxStateDetail;
```

Defined in: [src/bureau/Inbox.ts:99](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L99)

##### Returns

[`InboxStateDetail`](../type-aliases/InboxStateDetail.md)

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`state`](SyncInbox.md#state)

## Methods

### \_\_fixIdx()

```ts
__fixIdx(): void;
```

Defined in: [src/bureau/Inbox.ts:88](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L88)

#### Returns

`void`

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`__fixIdx`](SyncInbox.md#__fixidx)

***

### \_\_onPicked()

```ts
__onPicked(): void;
```

Defined in: [src/bureau/Inbox.ts:229](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L229)

#### Returns

`void`

#### Overrides

[`SyncInbox`](SyncInbox.md).[`__onPicked`](SyncInbox.md#__onpicked)

***

### \_\_onPosted()

```ts
__onPosted(): void;
```

Defined in: [src/bureau/Inbox.ts:225](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L225)

#### Returns

`void`

#### Overrides

[`SyncInbox`](SyncInbox.md).[`__onPosted`](SyncInbox.md#__onposted)

***

### \_\_onProgress()

```ts
__onProgress(): void;
```

Defined in: [src/bureau/Inbox.ts:130](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L130)

#### Returns

`void`

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`__onProgress`](SyncInbox.md#__onprogress)

***

### \_notifyFree()

```ts
_notifyFree(): void;
```

Defined in: [src/bureau/Inbox.ts:206](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L206)

#### Returns

`void`

***

### \_notifyReady()

```ts
_notifyReady(): void;
```

Defined in: [src/bureau/Inbox.ts:221](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L221)

#### Returns

`void`

***

### \_waitForFree()

```ts
_waitForFree(): Promise<typeof READY_POST_SIGNAL>;
```

Defined in: [src/bureau/Inbox.ts:196](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L196)

#### Returns

`Promise`\<*typeof* [`READY_POST_SIGNAL`](../variables/READY_POST_SIGNAL.md)\>

***

### \_waitForReady()

```ts
_waitForReady(): Promise<typeof READY_PICK_SIGNAL>;
```

Defined in: [src/bureau/Inbox.ts:211](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L211)

#### Returns

`Promise`\<*typeof* [`READY_PICK_SIGNAL`](../variables/READY_PICK_SIGNAL.md)\>

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/bureau/Inbox.ts:234](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L234)

#### Returns

`void`

#### Overrides

[`SyncInbox`](SyncInbox.md).[`dispose`](SyncInbox.md#dispose)

***

### pick()

```ts
pick(timeout?: number, cancellation?: Promise<any>[]): Promise<typeof NOT_AVAILABLE | T>;
```

Defined in: [src/bureau/Inbox.ts:298](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L298)

Picks an item from the buffer.
Waits until an item is available.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout?` | `number` | The timeout in milliseconds. |
| `cancellation?` | `Promise`\<`any`\>[] | The promise that cancels the operation. |

#### Returns

`Promise`\<*typeof* [`NOT_AVAILABLE`](../variables/NOT_AVAILABLE.md) \| `T`\>

The item picked.

***

### post()

```ts
post(
   item: T, 
   timeout?: number, 
cancellation?: Promise<any>[]): Promise<boolean>;
```

Defined in: [src/bureau/Inbox.ts:254](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L254)

Posts an item to the buffer.
Waits until a slot is available.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | `T` | The item to post. |
| `timeout?` | `number` | The timeout in milliseconds. |
| `cancellation?` | `Promise`\<`any`\>[] | The promise that cancels the operation. |

#### Returns

`Promise`\<`boolean`\>

whether the item is posted.

***

### tryCancelPost()

```ts
tryCancelPost(): typeof NOT_AVAILABLE | T;
```

Defined in: [src/bureau/Inbox.ts:153](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L153)

Tries to cancel the last posted item.

#### Returns

*typeof* [`NOT_AVAILABLE`](../variables/NOT_AVAILABLE.md) \| `T`

The item picked, or `NOT_AVAILABLE` if no item is available.

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`tryCancelPost`](SyncInbox.md#trycancelpost)

***

### tryPick()

```ts
tryPick(): typeof NOT_AVAILABLE | T;
```

Defined in: [src/bureau/Inbox.ts:169](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L169)

Tries to pick an item from the buffer.

#### Returns

*typeof* [`NOT_AVAILABLE`](../variables/NOT_AVAILABLE.md) \| `T`

The item picked, or `NOT_AVAILABLE` if no item is available.

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`tryPick`](SyncInbox.md#trypick)

***

### tryPost()

```ts
tryPost(item: T): boolean;
```

Defined in: [src/bureau/Inbox.ts:139](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L139)

Tries to post an item to the buffer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | `T` | The item to post. |

#### Returns

`boolean`

whether the item is posted. `false` if the buffer is full.

#### Inherited from

[`SyncInbox`](SyncInbox.md).[`tryPost`](SyncInbox.md#trypost)
