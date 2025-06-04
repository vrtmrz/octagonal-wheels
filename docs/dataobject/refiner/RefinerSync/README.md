[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [dataobject](../../README.md) / [refiner](../README.md) / RefinerSync

# Class: RefinerSync\<T, U\>

Defined in: [src/dataobject/Refiner.ts:209](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L209)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Constructors

### Constructor

```ts
new RefinerSync<T, U>(__namedParameters: RefinerSyncOptions<T, U>): RefinerSync<T, U>;
```

Defined in: [src/dataobject/Refiner.ts:216](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L216)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`RefinerSyncOptions`](../RefinerSyncOptions/README.md)\<`T`, `U`\> |

#### Returns

`RefinerSync`\<`T`, `U`\>

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="_buffedresult"></a> `_buffedResult?` | `Error` \| `U` | [src/dataobject/Refiner.ts:211](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L211) |
| <a id="_cachedby"></a> `_cachedBy?` | `T` | [src/dataobject/Refiner.ts:210](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L210) |
| <a id="_evaluation"></a> `_evaluation` | (`source`: `T`, `previous?`: `U`) => `U` | [src/dataobject/Refiner.ts:212](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L212) |
| <a id="_shouldupdate"></a> `_shouldUpdate` | (`isDifferent`: `boolean`, `source`: `T`, `previous?`: `U`) => `boolean` | [src/dataobject/Refiner.ts:213](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L213) |

## Accessors

### value

#### Get Signature

```ts
get value(): undefined | U;
```

Defined in: [src/dataobject/Refiner.ts:245](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L245)

##### Returns

`undefined` \| `U`

## Methods

### \_isDifferent()

```ts
_isDifferent(a: T, b: T): boolean;
```

Defined in: [src/dataobject/Refiner.ts:214](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L214)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `T` |
| `b` | `T` |

#### Returns

`boolean`

***

### \_startEvaluation()

```ts
_startEvaluation(source: T): void;
```

Defined in: [src/dataobject/Refiner.ts:224](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L224)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `T` |

#### Returns

`void`

***

### update()

```ts
update(source: T): RefinerSync<T, U>;
```

Defined in: [src/dataobject/Refiner.ts:236](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L236)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `T` |

#### Returns

`RefinerSync`\<`T`, `U`\>
