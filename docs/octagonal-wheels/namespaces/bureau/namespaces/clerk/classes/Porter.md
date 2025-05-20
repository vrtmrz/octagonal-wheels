[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [bureau](../../../README.md) / [clerk](../README.md) / Porter

# Class: Porter\<T\>

Defined in: [src/bureau/Clerk.ts:259](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L259)

A clerk that making batch of items and posts that to another inbox.
Please keep in mind that the interval of consuming results should be realised by `PaceMaker`.

## Extends

- [`ClerkBase`](ClerkBase.md)\<`T`\>

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of items being processed. |

## Constructors

### Constructor

```ts
new Porter<T>(params: {
  from: Inbox<T>;
  maxSize: number;
  timeout?: number;
  to: Inbox<T[]>;
}): Porter<T>;
```

Defined in: [src/bureau/Clerk.ts:345](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L345)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `from`: [`Inbox`](../../inbox/classes/Inbox.md)\<`T`\>; `maxSize`: `number`; `timeout?`: `number`; `to`: [`Inbox`](../../inbox/classes/Inbox.md)\<`T`[]\>; \} |
| `params.from` | [`Inbox`](../../inbox/classes/Inbox.md)\<`T`\> |
| `params.maxSize` | `number` |
| `params.timeout?` | `number` |
| `params.to` | [`Inbox`](../../inbox/classes/Inbox.md)\<`T`[]\> |

#### Returns

`Porter`\<`T`\>

#### Overrides

[`ClerkBase`](ClerkBase.md).[`constructor`](ClerkBase.md#constructor)

## Properties

| Property | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_buffer"></a> `_buffer` | `T`[] | `[]` | - | [src/bureau/Clerk.ts:263](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L263) |
| <a id="_disposed"></a> `_disposed` | `boolean` | `false` | [`ClerkBase`](ClerkBase.md).[`_disposed`](ClerkBase.md#_disposed) | [src/bureau/Clerk.ts:60](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L60) |
| <a id="_disposepromise"></a> `_disposePromise` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`void`\> | `undefined` | [`ClerkBase`](ClerkBase.md).[`_disposePromise`](ClerkBase.md#_disposepromise) | [src/bureau/Clerk.ts:61](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L61) |
| <a id="_flushing"></a> `_flushing` | `Promise`\<`void`\> | `undefined` | - | [src/bureau/Clerk.ts:265](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L265) |
| <a id="_inbox"></a> `_inbox` | [`Inbox`](../../inbox/classes/Inbox.md)\<`T`\> | `undefined` | [`ClerkBase`](ClerkBase.md).[`_inbox`](ClerkBase.md#_inbox) | [src/bureau/Clerk.ts:50](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L50) |
| <a id="_maxsize"></a> `_maxSize` | `number` | `undefined` | - | [src/bureau/Clerk.ts:262](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L262) |
| <a id="_name"></a> `_name` | `string` | `undefined` | [`ClerkBase`](ClerkBase.md).[`_name`](ClerkBase.md#_name) | [src/bureau/Clerk.ts:51](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L51) |
| <a id="_onprogress"></a> `_onProgress?` | (`state`: `ClerkStateDetail`) => `void` | `undefined` | [`ClerkBase`](ClerkBase.md).[`_onProgress`](ClerkBase.md#_onprogress) | [src/bureau/Clerk.ts:88](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L88) |
| <a id="_outgoing"></a> `_outgoing` | [`Inbox`](../../inbox/classes/Inbox.md)\<`T`[]\> | `undefined` | - | [src/bureau/Clerk.ts:260](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L260) |
| <a id="_separatechunk"></a> `_separateChunk` | `boolean` | `false` | - | [src/bureau/Clerk.ts:266](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L266) |
| <a id="_state"></a> `_state` | [`ClerkState`](../enumerations/ClerkState.md) | `ClerkState.STALLED` | [`ClerkBase`](ClerkBase.md).[`_state`](ClerkBase.md#_state) | [src/bureau/Clerk.ts:55](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L55) |
| <a id="_timeout"></a> `_timeout?` | `number` | `undefined` | - | [src/bureau/Clerk.ts:261](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L261) |
| <a id="_timeouttimer"></a> `_timeoutTimer` | `undefined` \| `Timeout` | `undefined` | - | [src/bureau/Clerk.ts:264](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L264) |
| <a id="_totalfailed"></a> `_totalFailed` | `number` | `0` | [`ClerkBase`](ClerkBase.md).[`_totalFailed`](ClerkBase.md#_totalfailed) | [src/bureau/Clerk.ts:58](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L58) |
| <a id="_totalfetched"></a> `_totalFetched` | `number` | `0` | [`ClerkBase`](ClerkBase.md).[`_totalFetched`](ClerkBase.md#_totalfetched) | [src/bureau/Clerk.ts:59](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L59) |
| <a id="_totalprocessed"></a> `_totalProcessed` | `number` | `0` | [`ClerkBase`](ClerkBase.md).[`_totalProcessed`](ClerkBase.md#_totalprocessed) | [src/bureau/Clerk.ts:56](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L56) |
| <a id="_totalsuccess"></a> `_totalSuccess` | `number` | `0` | [`ClerkBase`](ClerkBase.md).[`_totalSuccess`](ClerkBase.md#_totalsuccess) | [src/bureau/Clerk.ts:57](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L57) |

## Accessors

### onDisposed

#### Get Signature

```ts
get onDisposed(): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:156](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L156)

##### Returns

`Promise`\<`void`\>

#### Inherited from

[`ClerkBase`](ClerkBase.md).[`onDisposed`](ClerkBase.md#ondisposed)

***

### state

#### Get Signature

```ts
get state(): ClerkState;
```

Defined in: [src/bureau/Clerk.ts:62](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L62)

##### Returns

[`ClerkState`](../enumerations/ClerkState.md)

#### Inherited from

[`ClerkBase`](ClerkBase.md).[`state`](ClerkBase.md#state)

***

### stateDetail

#### Get Signature

```ts
get stateDetail(): ClerkStateDetail;
```

Defined in: [src/bureau/Clerk.ts:295](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L295)

##### Returns

`ClerkStateDetail`

Returns the current state details.

#### Overrides

[`ClerkBase`](ClerkBase.md).[`stateDetail`](ClerkBase.md#statedetail)

## Methods

### \_flush()

```ts
_flush(): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:267](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L267)

#### Returns

`Promise`\<`void`\>

***

### \_mainLoop()

```ts
_mainLoop(): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:100](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L100)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ClerkBase`](ClerkBase.md).[`_mainLoop`](ClerkBase.md#_mainloop)

***

### \_onPick()

```ts
_onPick(item: T): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:311](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L311)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ClerkBase`](ClerkBase.md).[`_onPick`](ClerkBase.md#_onpick)

***

### \_onSentinel()

```ts
_onSentinel(item: SENTINELS): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:302](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L302)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`SENTINELS`](../type-aliases/SENTINELS.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ClerkBase`](ClerkBase.md).[`_onSentinel`](ClerkBase.md#_onsentinel)

***

### changeParams()

```ts
changeParams(params: {
  maxSize?: number;
  timeout?: number;
}): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:330](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L330)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `maxSize?`: `number`; `timeout?`: `number`; \} |
| `params.maxSize?` | `number` |
| `params.timeout?` | `number` |

#### Returns

`Promise`\<`void`\>

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/bureau/Clerk.ts:352](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L352)

#### Returns

`void`

#### Overrides

[`ClerkBase`](ClerkBase.md).[`dispose`](ClerkBase.md#dispose)

***

### flush()

```ts
flush(): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:326](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L326)

#### Returns

`Promise`\<`void`\>

***

### onProgress()

```ts
onProgress(): void;
```

Defined in: [src/bureau/Clerk.ts:90](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L90)

#### Returns

`void`

#### Inherited from

[`ClerkBase`](ClerkBase.md).[`onProgress`](ClerkBase.md#onprogress)

***

### setOnProgress()

```ts
setOnProgress(callback: (state: ClerkStateDetail) => void): void;
```

Defined in: [src/bureau/Clerk.ts:97](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L97)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`state`: `ClerkStateDetail`) => `void` |

#### Returns

`void`

#### Inherited from

[`ClerkBase`](ClerkBase.md).[`setOnProgress`](ClerkBase.md#setonprogress)
