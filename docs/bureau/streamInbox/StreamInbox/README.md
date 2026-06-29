[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [bureau](../../README.md) / [streamInbox](../README.md) / StreamInbox

# Class: StreamInbox\<T\>

Defined in: src/bureau/StreamInbox.ts:8

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new StreamInbox<T>(options: StreamInboxOptions): StreamInbox<T>;
```

Defined in: src/bureau/StreamInbox.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`StreamInboxOptions`](../StreamInboxOptions/README.md) |

#### Returns

`StreamInbox`\<`T`\>

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="readable"></a> `readable` | `readonly` | `ReadableStream`\<`T`\> | src/bureau/StreamInbox.ts:9 |

## Accessors

### free

#### Get Signature

```ts
get free(): number;
```

Defined in: src/bureau/StreamInbox.ts:46

##### Returns

`number`

***

### isClosed

#### Get Signature

```ts
get isClosed(): boolean;
```

Defined in: src/bureau/StreamInbox.ts:54

##### Returns

`boolean`

***

### isFull

#### Get Signature

```ts
get isFull(): boolean;
```

Defined in: src/bureau/StreamInbox.ts:50

##### Returns

`boolean`

***

### size

#### Get Signature

```ts
get size(): number;
```

Defined in: src/bureau/StreamInbox.ts:40

##### Returns

`number`

## Methods

### close()

```ts
close(): void;
```

Defined in: src/bureau/StreamInbox.ts:69

#### Returns

`void`

***

### error()

```ts
error(reason?: unknown): void;
```

Defined in: src/bureau/StreamInbox.ts:78

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

Defined in: src/bureau/StreamInbox.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

#### Returns

`boolean`
