[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [bureau](../../../README.md) / [clerk](../README.md) / ClerkBase

# Class: `abstract` ClerkBase\<T\>

Defined in: [src/bureau/Clerk.ts:49](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L49)

## Extended by

- [`Clerk`](Clerk.md)
- [`Porter`](Porter.md)
- [`Harvester`](Harvester.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new ClerkBase<T>(params: ClerkOptionBase<T>): ClerkBase<T>;
```

Defined in: [src/bureau/Clerk.ts:65](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L65)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ClerkOptionBase`](../type-aliases/ClerkOptionBase.md)\<`T`\> |

#### Returns

`ClerkBase`\<`T`\>

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_disposed"></a> `_disposed` | `boolean` | `false` | [src/bureau/Clerk.ts:60](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L60) |
| <a id="_disposepromise"></a> `_disposePromise` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`void`\> | `undefined` | [src/bureau/Clerk.ts:61](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L61) |
| <a id="_inbox"></a> `_inbox` | [`Inbox`](../../inbox/classes/Inbox.md)\<`T`\> | `undefined` | [src/bureau/Clerk.ts:50](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L50) |
| <a id="_name"></a> `_name` | `string` | `undefined` | [src/bureau/Clerk.ts:51](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L51) |
| <a id="_onprogress"></a> `_onProgress?` | (`state`: `ClerkStateDetail`) => `void` | `undefined` | [src/bureau/Clerk.ts:88](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L88) |
| <a id="_state"></a> `_state` | [`ClerkState`](../enumerations/ClerkState.md) | `ClerkState.STALLED` | [src/bureau/Clerk.ts:55](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L55) |
| <a id="_totalfailed"></a> `_totalFailed` | `number` | `0` | [src/bureau/Clerk.ts:58](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L58) |
| <a id="_totalfetched"></a> `_totalFetched` | `number` | `0` | [src/bureau/Clerk.ts:59](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L59) |
| <a id="_totalprocessed"></a> `_totalProcessed` | `number` | `0` | [src/bureau/Clerk.ts:56](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L56) |
| <a id="_totalsuccess"></a> `_totalSuccess` | `number` | `0` | [src/bureau/Clerk.ts:57](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L57) |

## Accessors

### onDisposed

#### Get Signature

```ts
get onDisposed(): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:156](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L156)

##### Returns

`Promise`\<`void`\>

***

### state

#### Get Signature

```ts
get state(): ClerkState;
```

Defined in: [src/bureau/Clerk.ts:62](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L62)

##### Returns

[`ClerkState`](../enumerations/ClerkState.md)

***

### stateDetail

#### Get Signature

```ts
get stateDetail(): ClerkStateDetail;
```

Defined in: [src/bureau/Clerk.ts:72](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L72)

##### Returns

`ClerkStateDetail`

## Methods

### \_mainLoop()

```ts
_mainLoop(): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:100](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L100)

#### Returns

`Promise`\<`void`\>

***

### \_onPick()

```ts
abstract _onPick(item: T): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:52](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L52)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

#### Returns

`Promise`\<`void`\>

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

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/bureau/Clerk.ts:150](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L150)

#### Returns

`void`

***

### onProgress()

```ts
onProgress(): void;
```

Defined in: [src/bureau/Clerk.ts:90](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L90)

#### Returns

`void`

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
