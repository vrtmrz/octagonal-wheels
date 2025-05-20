[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [bureau](../../../README.md) / [inbox](../README.md) / SyncInbox

# Class: SyncInbox\<T\>

Defined in: [src/bureau/Inbox.ts:15](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L15)

## Extended by

- [`Inbox`](Inbox.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new SyncInbox<T>(capacity: number): SyncInbox<T>;
```

Defined in: [src/bureau/Inbox.ts:25](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L25)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `capacity` | `number` |

#### Returns

`SyncInbox`\<`T`\>

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_buffer"></a> `_buffer` | `T`[] | `undefined` | [src/bureau/Inbox.ts:18](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L18) |
| <a id="_capacity"></a> `_capacity` | `number` | `undefined` | [src/bureau/Inbox.ts:17](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L17) |
| <a id="_disposedpromise"></a> `_disposedPromise` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`void`\> | `undefined` | [src/bureau/Inbox.ts:24](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L24) |
| <a id="_isdisposed"></a> `_isDisposed` | `boolean` | `false` | [src/bureau/Inbox.ts:23](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L23) |
| <a id="_readidx"></a> `_readIdx` | `number` | `0` | [src/bureau/Inbox.ts:21](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L21) |
| <a id="_wraparoundcount"></a> `_wrapAroundCount` | `number` | `0` | [src/bureau/Inbox.ts:22](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L22) |
| <a id="_writeidx"></a> `_writeIdx` | `number` | `0` | [src/bureau/Inbox.ts:20](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L20) |

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

***

### isDisposed

#### Get Signature

```ts
get isDisposed(): boolean;
```

Defined in: [src/bureau/Inbox.ts:81](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L81)

##### Returns

`boolean`

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

***

### onDisposed

#### Get Signature

```ts
get onDisposed(): Promise<void>;
```

Defined in: [src/bureau/Inbox.ts:84](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L84)

##### Returns

`Promise`\<`void`\>

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

***

### state

#### Get Signature

```ts
get state(): InboxStateDetail;
```

Defined in: [src/bureau/Inbox.ts:99](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L99)

##### Returns

[`InboxStateDetail`](../type-aliases/InboxStateDetail.md)

## Methods

### \_\_fixIdx()

```ts
__fixIdx(): void;
```

Defined in: [src/bureau/Inbox.ts:88](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L88)

#### Returns

`void`

***

### \_\_onPicked()

```ts
__onPicked(): void;
```

Defined in: [src/bureau/Inbox.ts:126](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L126)

#### Returns

`void`

***

### \_\_onPosted()

```ts
__onPosted(): void;
```

Defined in: [src/bureau/Inbox.ts:122](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L122)

#### Returns

`void`

***

### \_\_onProgress()

```ts
__onProgress(): void;
```

Defined in: [src/bureau/Inbox.ts:130](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L130)

#### Returns

`void`

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/bureau/Inbox.ts:110](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Inbox.ts#L110)

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
