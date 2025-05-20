[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [bureau](../../../README.md) / [clerk](../README.md) / Harvester

# Class: Harvester\<T\>

Defined in: [src/bureau/Clerk.ts:442](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L442)

a clerk that picks items from an inbox and stores them in a buffer.

## Method

clear - Clears the buffer.

## Method

drainAndReset - Drains the buffer and resets it.

## Extends

- [`ClerkBase`](ClerkBase.md)\<`T`\>

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of items being processed. |

## Constructors

### Constructor

```ts
new Harvester<T>(params: ClerkOptionBase<T>): Harvester<T>;
```

Defined in: [src/bureau/Clerk.ts:464](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L464)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ClerkOptionBase`](../type-aliases/ClerkOptionBase.md)\<`T`\> |

#### Returns

`Harvester`\<`T`\>

#### Overrides

[`ClerkBase`](ClerkBase.md).[`constructor`](ClerkBase.md#constructor)

## Properties

| Property | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_buffer"></a> `_buffer` | `T`[] | `[]` | - | [src/bureau/Clerk.ts:444](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L444) |
| <a id="_disposed"></a> `_disposed` | `boolean` | `false` | [`ClerkBase`](ClerkBase.md).[`_disposed`](ClerkBase.md#_disposed) | [src/bureau/Clerk.ts:60](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L60) |
| <a id="_disposepromise"></a> `_disposePromise` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`void`\> | `undefined` | [`ClerkBase`](ClerkBase.md).[`_disposePromise`](ClerkBase.md#_disposepromise) | [src/bureau/Clerk.ts:61](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L61) |
| <a id="_inbox"></a> `_inbox` | [`Inbox`](../../inbox/classes/Inbox.md)\<`T`\> | `undefined` | [`ClerkBase`](ClerkBase.md).[`_inbox`](ClerkBase.md#_inbox) | [src/bureau/Clerk.ts:50](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L50) |
| <a id="_name"></a> `_name` | `string` | `undefined` | [`ClerkBase`](ClerkBase.md).[`_name`](ClerkBase.md#_name) | [src/bureau/Clerk.ts:51](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L51) |
| <a id="_onprogress"></a> `_onProgress?` | (`state`: `ClerkStateDetail`) => `void` | `undefined` | [`ClerkBase`](ClerkBase.md).[`_onProgress`](ClerkBase.md#_onprogress) | [src/bureau/Clerk.ts:88](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L88) |
| <a id="_state"></a> `_state` | [`ClerkState`](../enumerations/ClerkState.md) | `ClerkState.STALLED` | [`ClerkBase`](ClerkBase.md).[`_state`](ClerkBase.md#_state) | [src/bureau/Clerk.ts:55](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L55) |
| <a id="_timeouttimer"></a> `_timeoutTimer` | `undefined` \| `Timeout` | `undefined` | - | [src/bureau/Clerk.ts:445](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L445) |
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

### result

#### Get Signature

```ts
get result(): T[];
```

Defined in: [src/bureau/Clerk.ts:447](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L447)

##### Returns

`T`[]

Returns the buffer of items.

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

Defined in: [src/bureau/Clerk.ts:72](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L72)

##### Returns

`ClerkStateDetail`

#### Inherited from

[`ClerkBase`](ClerkBase.md).[`stateDetail`](ClerkBase.md#statedetail)

## Methods

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

Defined in: [src/bureau/Clerk.ts:459](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L459)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ClerkBase`](ClerkBase.md).[`_onPick`](ClerkBase.md#_onpick)

***

### \_onSentinel()?

```ts
optional _onSentinel(item: SENTINELS): Promise<any>;
```

Defined in: [src/bureau/Clerk.ts:53](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L53)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`SENTINELS`](../type-aliases/SENTINELS.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ClerkBase`](ClerkBase.md).[`_onSentinel`](ClerkBase.md#_onsentinel)

***

### clear()

```ts
clear(): void;
```

Defined in: [src/bureau/Clerk.ts:450](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L450)

#### Returns

`void`

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/bureau/Clerk.ts:468](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L468)

#### Returns

`void`

#### Overrides

[`ClerkBase`](ClerkBase.md).[`dispose`](ClerkBase.md#dispose)

***

### drainAndReset()

```ts
drainAndReset(): T[];
```

Defined in: [src/bureau/Clerk.ts:453](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L453)

#### Returns

`T`[]

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
