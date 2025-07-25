[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [bureau](../../README.md) / [inbox](../README.md) / InboxWithEvent

# Class: InboxWithEvent\<T\>

Defined in: [src/bureau/Inbox.ts:347](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L347)

## Extends

- [`Inbox`](../Inbox/README.md)\<`T`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new InboxWithEvent<T>(capacity: number, onProgress?: (detail: InboxStateDetail) => void): InboxWithEvent<T>;
```

Defined in: [src/bureau/Inbox.ts:349](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L349)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `capacity` | `number` |
| `onProgress?` | (`detail`: [`InboxStateDetail`](../InboxStateDetail/README.md)) => `void` |

#### Returns

`InboxWithEvent`\<`T`\>

#### Overrides

[`Inbox`](../Inbox/README.md).[`constructor`](../Inbox/README.md#constructor)

## Properties

| Property | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_buffer"></a> `_buffer` | `T`[] | `undefined` | [`Inbox`](../Inbox/README.md).[`_buffer`](../Inbox/README.md#_buffer) | [src/bureau/Inbox.ts:15](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L15) |
| <a id="_callback"></a> `_callback?` | (`detail`: [`InboxStateDetail`](../InboxStateDetail/README.md)) => `void` | `undefined` | - | [src/bureau/Inbox.ts:348](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L348) |
| <a id="_capacity"></a> `_capacity` | `number` | `undefined` | [`Inbox`](../Inbox/README.md).[`_capacity`](../Inbox/README.md#_capacity) | [src/bureau/Inbox.ts:14](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L14) |
| <a id="_disposedpromise"></a> `_disposedPromise` | [`PromiseWithResolvers`](../../../promises/PromiseWithResolvers/README.md)\<`void`\> | `undefined` | [`Inbox`](../Inbox/README.md).[`_disposedPromise`](../Inbox/README.md#_disposedpromise) | [src/bureau/Inbox.ts:21](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L21) |
| <a id="_isdisposed"></a> `_isDisposed` | `boolean` | `false` | [`Inbox`](../Inbox/README.md).[`_isDisposed`](../Inbox/README.md#_isdisposed) | [src/bureau/Inbox.ts:20](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L20) |
| <a id="_lockfull"></a> `_lockFull` | \| `undefined` \| [`PromiseWithResolvers`](../../../promises/PromiseWithResolvers/README.md)\<*typeof* [`READY_POST_SIGNAL`](../READY_POST_SIGNAL-1/README.md)\> | `undefined` | [`Inbox`](../Inbox/README.md).[`_lockFull`](../Inbox/README.md#_lockfull) | [src/bureau/Inbox.ts:179](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L179) |
| <a id="_lockready"></a> `_lockReady` | \| `undefined` \| [`PromiseWithResolvers`](../../../promises/PromiseWithResolvers/README.md)\<*typeof* [`READY_PICK_SIGNAL`](../READY_PICK_SIGNAL-1/README.md)\> | `undefined` | [`Inbox`](../Inbox/README.md).[`_lockReady`](../Inbox/README.md#_lockready) | [src/bureau/Inbox.ts:180](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L180) |
| <a id="_processed"></a> `_processed` | `number` | `0` | - | [src/bureau/Inbox.ts:354](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L354) |
| <a id="_readidx"></a> `_readIdx` | `number` | `0` | [`Inbox`](../Inbox/README.md).[`_readIdx`](../Inbox/README.md#_readidx) | [src/bureau/Inbox.ts:18](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L18) |
| <a id="_wraparoundcount"></a> `_wrapAroundCount` | `number` | `0` | [`Inbox`](../Inbox/README.md).[`_wrapAroundCount`](../Inbox/README.md#_wraparoundcount) | [src/bureau/Inbox.ts:19](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L19) |
| <a id="_writeidx"></a> `_writeIdx` | `number` | `0` | [`Inbox`](../Inbox/README.md).[`_writeIdx`](../Inbox/README.md#_writeidx) | [src/bureau/Inbox.ts:17](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L17) |

## Accessors

### free

#### Get Signature

```ts
get free(): number;
```

Defined in: [src/bureau/Inbox.ts:53](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L53)

The number of free slots in the buffer.

##### Returns

`number`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`free`](../Inbox/README.md#free)

***

### isDisposed

#### Get Signature

```ts
get isDisposed(): boolean;
```

Defined in: [src/bureau/Inbox.ts:78](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L78)

##### Returns

`boolean`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`isDisposed`](../Inbox/README.md#isdisposed)

***

### isFull

#### Get Signature

```ts
get isFull(): boolean;
```

Defined in: [src/bureau/Inbox.ts:67](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L67)

Whether the buffer is full.

##### Returns

`boolean`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`isFull`](../Inbox/README.md#isfull)

***

### isReady

#### Get Signature

```ts
get isReady(): boolean;
```

Defined in: [src/bureau/Inbox.ts:74](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L74)

Whether the buffer is ready to be picked.

##### Returns

`boolean`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`isReady`](../Inbox/README.md#isready)

***

### isRunningOut

#### Get Signature

```ts
get isRunningOut(): boolean;
```

Defined in: [src/bureau/Inbox.ts:60](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L60)

Whether the buffer is running out.

##### Returns

`boolean`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`isRunningOut`](../Inbox/README.md#isrunningout)

***

### onDisposed

#### Get Signature

```ts
get onDisposed(): Promise<void>;
```

Defined in: [src/bureau/Inbox.ts:81](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L81)

##### Returns

`Promise`\<`void`\>

#### Inherited from

[`Inbox`](../Inbox/README.md).[`onDisposed`](../Inbox/README.md#ondisposed)

***

### size

#### Get Signature

```ts
get size(): number;
```

Defined in: [src/bureau/Inbox.ts:47](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L47)

The number of items in the buffer.

##### Returns

`number`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`size`](../Inbox/README.md#size)

***

### state

#### Get Signature

```ts
get state(): InboxStateDetail;
```

Defined in: [src/bureau/Inbox.ts:96](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L96)

##### Returns

[`InboxStateDetail`](../InboxStateDetail/README.md)

#### Inherited from

[`Inbox`](../Inbox/README.md).[`state`](../Inbox/README.md#state)

## Methods

### \_\_fixIdx()

```ts
__fixIdx(): void;
```

Defined in: [src/bureau/Inbox.ts:85](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L85)

#### Returns

`void`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`__fixIdx`](../Inbox/README.md#__fixidx)

***

### \_\_onPicked()

```ts
__onPicked(): void;
```

Defined in: [src/bureau/Inbox.ts:223](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L223)

#### Returns

`void`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`__onPicked`](../Inbox/README.md#__onpicked)

***

### \_\_onPosted()

```ts
__onPosted(): void;
```

Defined in: [src/bureau/Inbox.ts:219](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L219)

#### Returns

`void`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`__onPosted`](../Inbox/README.md#__onposted)

***

### \_\_onProgress()

```ts
__onProgress(): void;
```

Defined in: [src/bureau/Inbox.ts:355](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L355)

#### Returns

`void`

#### Overrides

[`Inbox`](../Inbox/README.md).[`__onProgress`](../Inbox/README.md#__onprogress)

***

### \_notifyFree()

```ts
_notifyFree(): void;
```

Defined in: [src/bureau/Inbox.ts:200](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L200)

#### Returns

`void`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`_notifyFree`](../Inbox/README.md#_notifyfree)

***

### \_notifyReady()

```ts
_notifyReady(): void;
```

Defined in: [src/bureau/Inbox.ts:215](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L215)

#### Returns

`void`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`_notifyReady`](../Inbox/README.md#_notifyready)

***

### \_waitForFree()

```ts
_waitForFree(): Promise<typeof READY_POST_SIGNAL>;
```

Defined in: [src/bureau/Inbox.ts:190](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L190)

#### Returns

`Promise`\<*typeof* [`READY_POST_SIGNAL`](../READY_POST_SIGNAL-1/README.md)\>

#### Inherited from

[`Inbox`](../Inbox/README.md).[`_waitForFree`](../Inbox/README.md#_waitforfree)

***

### \_waitForReady()

```ts
_waitForReady(): Promise<typeof READY_PICK_SIGNAL>;
```

Defined in: [src/bureau/Inbox.ts:205](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L205)

#### Returns

`Promise`\<*typeof* [`READY_PICK_SIGNAL`](../READY_PICK_SIGNAL-1/README.md)\>

#### Inherited from

[`Inbox`](../Inbox/README.md).[`_waitForReady`](../Inbox/README.md#_waitforready)

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/bureau/Inbox.ts:228](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L228)

#### Returns

`void`

#### Inherited from

[`Inbox`](../Inbox/README.md).[`dispose`](../Inbox/README.md#dispose)

***

### pick()

```ts
pick(timeout?: number, cancellation?: Promise<any>[]): Promise<typeof NOT_AVAILABLE | T>;
```

Defined in: [src/bureau/Inbox.ts:293](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L293)

Picks an item from the buffer.
Waits until an item is available.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout?` | `number` | The timeout in milliseconds. |
| `cancellation?` | `Promise`\<`any`\>[] | The promise that cancels the operation. |

#### Returns

`Promise`\<*typeof* [`NOT_AVAILABLE`](../NOT_AVAILABLE-1/README.md) \| `T`\>

The item picked.

#### Inherited from

[`Inbox`](../Inbox/README.md).[`pick`](../Inbox/README.md#pick)

***

### post()

```ts
post(
   item: T, 
   timeout?: number, 
cancellation?: Promise<any>[]): Promise<boolean>;
```

Defined in: [src/bureau/Inbox.ts:248](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L248)

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

[`Inbox`](../Inbox/README.md).[`post`](../Inbox/README.md#post)

***

### setOnProgress()

```ts
setOnProgress(callback: (detail: InboxStateDetail) => void): void;
```

Defined in: [src/bureau/Inbox.ts:362](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L362)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`detail`: [`InboxStateDetail`](../InboxStateDetail/README.md)) => `void` |

#### Returns

`void`

***

### tryCancelPost()

```ts
tryCancelPost(): typeof NOT_AVAILABLE | T;
```

Defined in: [src/bureau/Inbox.ts:150](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L150)

Tries to cancel the last posted item.

#### Returns

*typeof* [`NOT_AVAILABLE`](../NOT_AVAILABLE-1/README.md) \| `T`

The item picked, or `NOT_AVAILABLE` if no item is available.

#### Inherited from

[`Inbox`](../Inbox/README.md).[`tryCancelPost`](../Inbox/README.md#trycancelpost)

***

### tryPick()

```ts
tryPick(): typeof NOT_AVAILABLE | T;
```

Defined in: [src/bureau/Inbox.ts:166](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L166)

Tries to pick an item from the buffer.

#### Returns

*typeof* [`NOT_AVAILABLE`](../NOT_AVAILABLE-1/README.md) \| `T`

The item picked, or `NOT_AVAILABLE` if no item is available.

#### Inherited from

[`Inbox`](../Inbox/README.md).[`tryPick`](../Inbox/README.md#trypick)

***

### tryPost()

```ts
tryPost(item: T): boolean;
```

Defined in: [src/bureau/Inbox.ts:136](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L136)

Tries to post an item to the buffer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | `T` | The item to post. |

#### Returns

`boolean`

whether the item is posted. `false` if the buffer is full.

#### Inherited from

[`Inbox`](../Inbox/README.md).[`tryPost`](../Inbox/README.md#trypost)
