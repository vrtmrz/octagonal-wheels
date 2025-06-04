[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [bureau](../../README.md) / [clerk](../README.md) / Feeder

# Class: Feeder\<T\>

Defined in: [src/bureau/Clerk.ts:365](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L365)

The `Feeder` class is responsible for fetching items from a source and posting them to a target inbox.
It supports both synchronous and asynchronous iteration over the source.

## Method

onProgress - Calls the progress callback with the current state details.

## Method

setOnProgress - Sets the progress callback function.

## Param

The parameters for the feeder.

## Param

The source of items to be processed.

## Param

The target inbox where items are posted.

## Param

Optional callback function to report progress.

## Method

_mainLoop - The main loop that fetches items from the source and posts them to the target.

## Method

stateDetail - Returns the current state details of the feeder.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of items being processed. |

## Constructors

### Constructor

```ts
new Feeder<T>(params: {
  onProgress?: (state: FeederStateDetail) => void;
  source: Iterable<T, any, any> | AsyncIterable<T, any, any>;
  target: Inbox<T>;
}): Feeder<T>;
```

Defined in: [src/bureau/Clerk.ts:384](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L384)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `onProgress?`: (`state`: `FeederStateDetail`) => `void`; `source`: `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\>; `target`: [`Inbox`](../../inbox/Inbox/README.md)\<`T`\>; \} |
| `params.onProgress?` | (`state`: `FeederStateDetail`) => `void` |
| `params.source` | `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\> |
| `params.target` | [`Inbox`](../../inbox/Inbox/README.md)\<`T`\> |

#### Returns

`Feeder`\<`T`\>

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_hasfinished"></a> `_hasFinished` | `boolean` | `false` | [src/bureau/Clerk.ts:366](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L366) |
| <a id="_hasstarted"></a> `_hasStarted` | `boolean` | `false` | [src/bureau/Clerk.ts:367](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L367) |
| <a id="_onprogress"></a> `_onProgress?` | (`state`: `FeederStateDetail`) => `void` | `undefined` | [src/bureau/Clerk.ts:372](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L372) |
| <a id="_source"></a> `_source` | `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\> | `undefined` | [src/bureau/Clerk.ts:370](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L370) |
| <a id="_target"></a> `_target` | [`Inbox`](../../inbox/Inbox/README.md)\<`T`\> | `undefined` | [src/bureau/Clerk.ts:371](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L371) |
| <a id="_totalfetched"></a> `_totalFetched` | `number` | `0` | [src/bureau/Clerk.ts:368](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L368) |
| <a id="_totalprocessed"></a> `_totalProcessed` | `number` | `0` | [src/bureau/Clerk.ts:369](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L369) |

## Accessors

### stateDetail

#### Get Signature

```ts
get stateDetail(): FeederStateDetail;
```

Defined in: [src/bureau/Clerk.ts:416](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L416)

##### Returns

`FeederStateDetail`

Returns the current state details of the feeder.

## Methods

### \_mainLoop()

```ts
_mainLoop(): Promise<void>;
```

Defined in: [src/bureau/Clerk.ts:395](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L395)

#### Returns

`Promise`\<`void`\>

***

### onProgress()

```ts
onProgress(): void;
```

Defined in: [src/bureau/Clerk.ts:373](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L373)

#### Returns

`void`

***

### setOnProgress()

```ts
setOnProgress(callback: (state: FeederStateDetail) => void): void;
```

Defined in: [src/bureau/Clerk.ts:380](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L380)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`state`: `FeederStateDetail`) => `void` |

#### Returns

`void`
