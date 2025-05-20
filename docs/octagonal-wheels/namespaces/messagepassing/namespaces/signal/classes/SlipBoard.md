[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [messagepassing](../../../README.md) / [signal](../README.md) / SlipBoard

# Class: SlipBoard\<Events\>

Defined in: [src/bureau/SlipBoard.ts:46](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L46)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Events` *extends* `LSSlips` | `LSSlips` |

## Constructors

### Constructor

```ts
new SlipBoard<Events>(): SlipBoard<Events>;
```

#### Returns

`SlipBoard`\<`Events`\>

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="_clip"></a> `_clip` | `Map`\<`string` \| `number` \| `symbol`, [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`any`\>\> | [src/bureau/SlipBoard.ts:48](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L48) |

## Methods

### awaitNext()

Waits for the next event of the specified type and key, with an optional timeout.

#### Template

The type of the events.

#### Template

The key of the event type.

#### Param

The type of the event to wait for.

#### Param

The key associated with the event.

#### Param

The optional timeout in milliseconds.

#### Call Signature

```ts
awaitNext<ET, K>(
   type: K, 
   key: string, 
opt?: AwaitOptionWithoutTimeout): Promise<ResultType<ET, K>>;
```

Defined in: [src/bureau/SlipBoard.ts:106](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L106)

##### Type Parameters

| Type Parameter |
| ------ |
| `ET` *extends* `LSSlips` |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `K` |
| `key` | `string` |
| `opt?` | [`AwaitOptionWithoutTimeout`](../type-aliases/AwaitOptionWithoutTimeout.md) |

##### Returns

`Promise`\<`ResultType`\<`ET`, `K`\>\>

#### Call Signature

```ts
awaitNext<ET, K>(
   type: K, 
   key: string, 
   opt?: AwaitOptionWithTimeout): Promise<
  | typeof TIMED_OUT_SIGNAL
| ResultType<ET, K>>;
```

Defined in: [src/bureau/SlipBoard.ts:107](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L107)

##### Type Parameters

| Type Parameter |
| ------ |
| `ET` *extends* `LSSlips` |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `K` |
| `key` | `string` |
| `opt?` | [`AwaitOptionWithTimeout`](../type-aliases/AwaitOptionWithTimeout.md) |

##### Returns

`Promise`\<
  \| *typeof* [`TIMED_OUT_SIGNAL`](../../../../promises/variables/TIMED_OUT_SIGNAL.md)
  \| `ResultType`\<`ET`, `K`\>\>

***

### isAwaiting()

```ts
isAwaiting<ET, K>(type: SlipType<ET, K>, key: string): boolean;
```

Defined in: [src/bureau/SlipBoard.ts:59](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L59)

Checks if a specific key is awaiting.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `LSSlips` | The type of the events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event in the events type. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `SlipType`\<`ET`, `K`\> | The key representing the event type. |
| `key` | `string` | The key representing the specific sub-event. |

#### Returns

`boolean`

- Returns `true` if the event and sub-event combination is awaiting, otherwise `false`.

***

### issueAndProceed()

```ts
issueAndProceed<T>(
   type: string, 
   key?: string, 
opt?: SlipProcessOptions<T>): Promise<T>;
```

Defined in: [src/bureau/SlipBoard.ts:82](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L82)

Issues a slip of process and proceeds with the provided options.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the result expected from the process. |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `type` | `string` | `undefined` | The type of the process to be issued. |
| `key?` | `string` | `""` | An optional key to identify the process. |
| `opt?` | [`SlipProcessOptions`](../type-aliases/SlipProcessOptions.md)\<`T`\> | `undefined` | The options for the process, including the callback to be executed. |

#### Returns

`Promise`\<`T`\>

- A promise that resolves with the result of the process.

#### Remarks

- If the process is not already awaiting, it will be issued and the callback will be executed.
- If the callback succeeds, the result will be submitted.
- If the callback fails, the error handling depends on the options provided:
  - If `submitAsSuccess` is true, the error (or transformed error) will be submitted as a success.
  - If `dropSlipWithRisks` is true, the process will be deleted from the clip.
  - Otherwise, the error will be rejected.
- The method returns a promise that resolves with the next result of the process.

***

### reject()

```ts
reject<ET, K>(
   type: SlipType<ET, K>, 
   key?: string, 
   reason?: any): void;
```

Defined in: [src/bureau/SlipBoard.ts:207](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L207)

Rejects a task promise associated with a specific event type and key.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `LSSlips` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The keys of the events. |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `type` | `SlipType`\<`ET`, `K`\> | `undefined` | The type of the event. |
| `key?` | `string` | `""` | The key associated with the event. Defaults to an empty string. |
| `reason?` | `any` | `undefined` | The reason for rejecting the promise. |

#### Returns

`void`

***

### submit()

Submits an event of a specified type with optional data.

#### Template

The type of events.

#### Template

The key of the event type in ET.

#### Param

The type of the event to submit.

#### Param

An optional key associated with the event.

#### Param

Optional data to be passed with the event.

#### Call Signature

```ts
submit<ET, K>(type: SlipWithoutData<ET, K>, key: string): void;
```

Defined in: [src/bureau/SlipBoard.ts:141](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L141)

##### Type Parameters

| Type Parameter |
| ------ |
| `ET` *extends* `LSSlips` |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SlipWithoutData`\<`ET`, `K`\> |
| `key` | `string` |

##### Returns

`void`

#### Call Signature

```ts
submit<ET, K>(
   type: SlipWithData<ET, K>, 
   key: string, 
   data: ET[K]): void;
```

Defined in: [src/bureau/SlipBoard.ts:144](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L144)

##### Type Parameters

| Type Parameter |
| ------ |
| `ET` *extends* `LSSlips` |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SlipWithData`\<`ET`, `K`\> |
| `key` | `string` |
| `data` | `ET`\[`K`\] |

##### Returns

`void`

***

### submitToAll()

Submits an event of a specified type to all listeners.

#### Template

The type of events.

#### Template

The key of the event type in ET.

#### Param

The type of the event to submit.

#### Param

The prefix to match the keys of the listeners.

#### Param

Optional data to be passed with the event.

#### Call Signature

```ts
submitToAll<ET, K>(type: SlipWithoutData<ET, K>, prefix: string): void;
```

Defined in: [src/bureau/SlipBoard.ts:168](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L168)

##### Type Parameters

| Type Parameter |
| ------ |
| `ET` *extends* `LSSlips` |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SlipWithoutData`\<`ET`, `K`\> |
| `prefix` | `string` |

##### Returns

`void`

#### Call Signature

```ts
submitToAll<ET, K>(
   type: SlipWithData<ET, K>, 
   prefix: string, 
   data: ET[K]): void;
```

Defined in: [src/bureau/SlipBoard.ts:172](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L172)

##### Type Parameters

| Type Parameter |
| ------ |
| `ET` *extends* `LSSlips` |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SlipWithData`\<`ET`, `K`\> |
| `prefix` | `string` |
| `data` | `ET`\[`K`\] |

##### Returns

`void`
