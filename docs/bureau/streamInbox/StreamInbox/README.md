[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [bureau](../../README.md) / [streamInbox](../README.md) / StreamInbox

# Class: StreamInbox\<T\>

Defined in: [src/bureau/StreamInbox.ts:20](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L20)

A small bridge from callback/event-emitter style producers to ReadableStream consumers.

Unlike a WritableStream writer, post() is intentionally synchronous. Some producers
such as EventEmitter and PouchDB replication callbacks cannot observe backpressure,
so this class reports overflow immediately instead of building an unbounded chain of
pending write promises.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new StreamInbox<T>(options: StreamInboxOptions): StreamInbox<T>;
```

Defined in: [src/bureau/StreamInbox.ts:29](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L29)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`StreamInboxOptions`](../StreamInboxOptions/README.md) |

#### Returns

`StreamInbox`\<`T`\>

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="readable"></a> `readable` | `readonly` | `ReadableStream`\<`T`\> | [src/bureau/StreamInbox.ts:21](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L21) |

## Accessors

### free

#### Get Signature

```ts
get free(): number;
```

Defined in: [src/bureau/StreamInbox.ts:60](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L60)

##### Returns

`number`

***

### isClosed

#### Get Signature

```ts
get isClosed(): boolean;
```

Defined in: [src/bureau/StreamInbox.ts:68](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L68)

##### Returns

`boolean`

***

### isFull

#### Get Signature

```ts
get isFull(): boolean;
```

Defined in: [src/bureau/StreamInbox.ts:64](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L64)

##### Returns

`boolean`

***

### size

#### Get Signature

```ts
get size(): number;
```

Defined in: [src/bureau/StreamInbox.ts:53](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L53)

##### Returns

`number`

## Methods

### close()

```ts
close(): void;
```

Defined in: [src/bureau/StreamInbox.ts:85](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L85)

#### Returns

`void`

***

### error()

```ts
error(reason?: unknown): void;
```

Defined in: [src/bureau/StreamInbox.ts:94](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L94)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `unknown` |

#### Returns

`void`

***

### post()

```ts
post(item: T): boolean;
```

Defined in: [src/bureau/StreamInbox.ts:72](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L72)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

#### Returns

`boolean`
