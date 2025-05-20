[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [iterable](../../../README.md) / [source](../README.md) / GeneratorSource

# Class: GeneratorSource\<T\>

Defined in: [src/iterable/source.ts:73](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L73)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new GeneratorSource<T>(onSizeUpdated?: (size: number) => void): GeneratorSource<T>;
```

Defined in: [src/iterable/source.ts:88](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L88)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `onSizeUpdated?` | (`size`: `number`) => `void` |

#### Returns

`GeneratorSource`\<`T`\>

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="_current"></a> `_current` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<*typeof* `GENERATOR_CLOSED` \| `T`\> | [src/iterable/source.ts:75](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L75) |
| <a id="_next"></a> `_next` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<*typeof* `GENERATOR_CLOSED` \| `T`\>[] | [src/iterable/source.ts:74](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L74) |
| <a id="_onsizeupdated"></a> `_onSizeUpdated?` | (`size`: `number`) => `void` | [src/iterable/source.ts:76](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L76) |
| <a id="closed"></a> `closed` | `boolean` | [src/iterable/source.ts:86](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L86) |
| <a id="finished"></a> `finished` | `boolean` | [src/iterable/source.ts:87](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L87) |

## Accessors

### size

#### Get Signature

```ts
get size(): number;
```

Defined in: [src/iterable/source.ts:83](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L83)

##### Returns

`number`

## Methods

### \_updateSize()

```ts
_updateSize(): void;
```

Defined in: [src/iterable/source.ts:77](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L77)

#### Returns

`void`

***

### \[asyncIterator\]()

```ts
asyncIterator: AsyncGenerator<Awaited<T>, void, unknown>;
```

Defined in: [src/iterable/source.ts:115](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L115)

#### Returns

`AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

***

### \[dispose\]()

```ts
dispose: void;
```

Defined in: [src/iterable/source.ts:118](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L118)

#### Returns

`void`

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/iterable/source.ts:106](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L106)

#### Returns

`void`

***

### enqueue()

```ts
enqueue(item: T): void;
```

Defined in: [src/iterable/source.ts:95](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L95)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

#### Returns

`void`

***

### finish()

```ts
finish(): void;
```

Defined in: [src/iterable/source.ts:111](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L111)

#### Returns

`void`

***

### values()

```ts
values(): AsyncGenerator<Awaited<T>, void, unknown>;
```

Defined in: [src/iterable/source.ts:122](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/source.ts#L122)

#### Returns

`AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>
