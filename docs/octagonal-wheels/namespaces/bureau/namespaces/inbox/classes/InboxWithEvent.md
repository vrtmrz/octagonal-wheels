[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [bureau](../../../README.md) / [inbox](../README.md) / InboxWithEvent

# Class: InboxWithEvent\<T\>

Defined in: [src/bureau/Inbox.ts:355](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L355)

## Extends

- [`Inbox`](Inbox.md)\<`T`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new InboxWithEvent<T>(capacity: number, onProgress?: (detail: InboxStateDetail) => void): InboxWithEvent<T>;
```

Defined in: [src/bureau/Inbox.ts:357](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L357)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `capacity` | `number` |
| `onProgress?` | (`detail`: [`InboxStateDetail`](../type-aliases/InboxStateDetail.md)) => `void` |

#### Returns

`InboxWithEvent`\<`T`\>

#### Overrides

[`Inbox`](Inbox.md).[`constructor`](Inbox.md#constructor)

## Properties

| Property | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_buffer"></a> `_buffer` | `T`[] | `undefined` | [`Inbox`](Inbox.md).[`_buffer`](Inbox.md#_buffer) | [src/bureau/Inbox.ts:18](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L18) |
| <a id="_callback"></a> `_callback?` | (`detail`: [`InboxStateDetail`](../type-aliases/InboxStateDetail.md)) => `void` | `undefined` | - | [src/bureau/Inbox.ts:356](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L356) |
| <a id="_capacity"></a> `_capacity` | `number` | `undefined` | [`Inbox`](Inbox.md).[`_capacity`](Inbox.md#_capacity) | [src/bureau/Inbox.ts:17](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L17) |
| <a id="_disposedpromise"></a> `_disposedPromise` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`void`\> | `undefined` | [`Inbox`](Inbox.md).[`_disposedPromise`](Inbox.md#_disposedpromise) | [src/bureau/Inbox.ts:24](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L24) |
| <a id="_isdisposed"></a> `_isDisposed` | `boolean` | `false` | [`Inbox`](Inbox.md).[`_isDisposed`](Inbox.md#_isdisposed) | [src/bureau/Inbox.ts:23](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L23) |
| <a id="_lockfull"></a> `_lockFull` | \| `undefined` \| [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<*typeof* [`READY_POST_SIGNAL`](../variables/READY_POST_SIGNAL.md)\> | `undefined` | [`Inbox`](Inbox.md).[`_lockFull`](Inbox.md#_lockfull) | [src/bureau/Inbox.ts:184](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L184) |
| <a id="_lockready"></a> `_lockReady` | \| `undefined` \| [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<*typeof* [`READY_PICK_SIGNAL`](../variables/READY_PICK_SIGNAL.md)\> | `undefined` | [`Inbox`](Inbox.md).[`_lockReady`](Inbox.md#_lockready) | [src/bureau/Inbox.ts:185](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L185) |
| <a id="_processed"></a> `_processed` | `number` | `0` | - | [src/bureau/Inbox.ts:362](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L362) |
| <a id="_readidx"></a> `_readIdx` | `number` | `0` | [`Inbox`](Inbox.md).[`_readIdx`](Inbox.md#_readidx) | [src/bureau/Inbox.ts:21](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L21) |
| <a id="_wraparoundcount"></a> `_wrapAroundCount` | `number` | `0` | [`Inbox`](Inbox.md).[`_wrapAroundCount`](Inbox.md#_wraparoundcount) | [src/bureau/Inbox.ts:22](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L22) |
| <a id="_writeidx"></a> `_writeIdx` | `number` | `0` | [`Inbox`](Inbox.md).[`_writeIdx`](Inbox.md#_writeidx) | [src/bureau/Inbox.ts:20](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L20) |

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

[`Inbox`](Inbox.md).[`free`](Inbox.md#free)

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

[`Inbox`](Inbox.md).[`isDisposed`](Inbox.md#isdisposed)

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

[`Inbox`](Inbox.md).[`isFull`](Inbox.md#isfull)

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

[`Inbox`](Inbox.md).[`isReady`](Inbox.md#isready)

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

[`Inbox`](Inbox.md).[`isRunningOut`](Inbox.md#isrunningout)

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

[`Inbox`](Inbox.md).[`onDisposed`](Inbox.md#ondisposed)

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

[`Inbox`](Inbox.md).[`size`](Inbox.md#size)

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

[`Inbox`](Inbox.md).[`state`](Inbox.md#state)

## Methods

### \_\_fixIdx()

```ts
__fixIdx(): void;
```

Defined in: [src/bureau/Inbox.ts:88](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L88)

#### Returns

`void`

#### Inherited from

[`Inbox`](Inbox.md).[`__fixIdx`](Inbox.md#__fixidx)

***

### \_\_onPicked()

```ts
__onPicked(): void;
```

Defined in: [src/bureau/Inbox.ts:229](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L229)

#### Returns

`void`

#### Inherited from

[`Inbox`](Inbox.md).[`__onPicked`](Inbox.md#__onpicked)

***

### \_\_onPosted()

```ts
__onPosted(): void;
```

Defined in: [src/bureau/Inbox.ts:225](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L225)

#### Returns

`void`

#### Inherited from

[`Inbox`](Inbox.md).[`__onPosted`](Inbox.md#__onposted)

***

### \_\_onProgress()

```ts
__onProgress(): void;
```

Defined in: [src/bureau/Inbox.ts:363](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L363)

#### Returns

`void`

#### Overrides

[`Inbox`](Inbox.md).[`__onProgress`](Inbox.md#__onprogress)

***

### \_notifyFree()

```ts
_notifyFree(): void;
```

Defined in: [src/bureau/Inbox.ts:206](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L206)

#### Returns

`void`

#### Inherited from

[`Inbox`](Inbox.md).[`_notifyFree`](Inbox.md#_notifyfree)

***

### \_notifyReady()

```ts
_notifyReady(): void;
```

Defined in: [src/bureau/Inbox.ts:221](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L221)

#### Returns

`void`

#### Inherited from

[`Inbox`](Inbox.md).[`_notifyReady`](Inbox.md#_notifyready)

***

### \_waitForFree()

```ts
_waitForFree(): Promise<typeof READY_POST_SIGNAL>;
```

Defined in: [src/bureau/Inbox.ts:196](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L196)

#### Returns

`Promise`\<*typeof* [`READY_POST_SIGNAL`](../variables/READY_POST_SIGNAL.md)\>

#### Inherited from

[`Inbox`](Inbox.md).[`_waitForFree`](Inbox.md#_waitforfree)

***

### \_waitForReady()

```ts
_waitForReady(): Promise<typeof READY_PICK_SIGNAL>;
```

Defined in: [src/bureau/Inbox.ts:211](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L211)

#### Returns

`Promise`\<*typeof* [`READY_PICK_SIGNAL`](../variables/READY_PICK_SIGNAL.md)\>

#### Inherited from

[`Inbox`](Inbox.md).[`_waitForReady`](Inbox.md#_waitforready)

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/bureau/Inbox.ts:234](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L234)

#### Returns

`void`

#### Inherited from

[`Inbox`](Inbox.md).[`dispose`](Inbox.md#dispose)

***

### pick()

```ts
pick(timeout?: number, cancellation?: Promise<any>[]): Promise<typeof NOT_AVAILABLE | T>;
```

Defined in: [src/bureau/Inbox.ts:299](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L299)

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

#### Inherited from

[`Inbox`](Inbox.md).[`pick`](Inbox.md#pick)

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

#### Inherited from

[`Inbox`](Inbox.md).[`post`](Inbox.md#post)

***

### setOnProgress()

```ts
setOnProgress(callback: (detail: InboxStateDetail) => void): void;
```

Defined in: [src/bureau/Inbox.ts:370](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L370)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`detail`: [`InboxStateDetail`](../type-aliases/InboxStateDetail.md)) => `void` |

#### Returns

`void`

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

[`Inbox`](Inbox.md).[`tryCancelPost`](Inbox.md#trycancelpost)

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

[`Inbox`](Inbox.md).[`tryPick`](Inbox.md#trypick)

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

[`Inbox`](Inbox.md).[`tryPost`](Inbox.md#trypost)
