[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [dataobject](../../README.md) / [refiner](../README.md) / Refiner

# Class: Refiner\<T, U\>

Defined in: [src/dataobject/Refiner.ts:51](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L51)

Refiner class is a utility for evaluating and caching results based on a source value.
It can handle both synchronous and asynchronous evaluations.
To address the issue of performance, it uses no `#` properties. Do not call `_` prefixed methods directly.

## See

RefinerOptions

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the source value. |
| `U` | The type of the result value. |

## Constructors

### Constructor

```ts
new Refiner<T, U>(options: RefinerOptions<T, U>): Refiner<T, U>;
```

Defined in: [src/dataobject/Refiner.ts:110](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L110)

Constructor for the Refiner class.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`RefinerOptions`](../RefinerOptions/README.md)\<`T`, `U`\> | The options for the Refiner instance. |

#### Returns

`Refiner`\<`T`, `U`\>

## Properties

| Property | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="__evaluation"></a> `__evaluation` | (`source`: `T`, `previous?`: `U`) => `U` \| `Promise`\<`U`\> | `undefined` | An internal and swappable method used to evaluate the source and return a result. | [src/dataobject/Refiner.ts:68](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L68) |
| <a id="__shouldupdate"></a> `__shouldUpdate` | (`isDifferent`: `boolean`, `source`: `T`, `previous?`: `U`) => `boolean` | `undefined` | a function to determine if the result should be updated based on the source and previous result. | [src/dataobject/Refiner.ts:76](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L76) |
| <a id="_cachedby"></a> `_cachedBy?` | `T` | `undefined` | The cached source value used for comparison. | [src/dataobject/Refiner.ts:55](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L55) |
| <a id="_cachedresult"></a> `_cachedResult?` | `U` | `undefined` | The cached result of the evaluation. It can be undefined if the evaluation has not been performed yet. | [src/dataobject/Refiner.ts:60](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L60) |
| <a id="_evaluationpromise"></a> `_evaluationPromise` | [`PromiseWithResolvers`](../../../promises/PromiseWithResolvers/README.md)\<`U`\> | `undefined` | The promise with resolvers used to handle the evaluation result. | [src/dataobject/Refiner.ts:64](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L64) |
| <a id="_evaluations"></a> `_evaluations` | `Promise`\<`void`\> | `undefined` | An internal variable to track the latest evaluation. It is used to prevent outdated evaluations from being processed. | [src/dataobject/Refiner.ts:125](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L125) |
| <a id="_latest"></a> `_latest` | `number` | `0` | An internal variable to track the latest evaluation index. It is used to prevent outdated evaluations from being processed. | [src/dataobject/Refiner.ts:130](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L130) |

## Accessors

### value

#### Get Signature

```ts
get value(): Promise<U>;
```

Defined in: [src/dataobject/Refiner.ts:197](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L197)

##### Returns

`Promise`\<`U`\>

## Methods

### \_\_isDifferent()

```ts
__isDifferent(a: T, b: T): boolean;
```

Defined in: [src/dataobject/Refiner.ts:85](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L85)

An internal and swappable method function to determine if two sources are different.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `T` | source value. |
| `b` | `T` | compare value. |

#### Returns

`boolean`

a boolean indicating if the two sources are different.
It defaults to isObjectDifferent function.

***

### \_getValue()

```ts
_getValue(): Promise<U>;
```

Defined in: [src/dataobject/Refiner.ts:181](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L181)

#### Returns

`Promise`\<`U`\>

***

### \_refinePromise()

```ts
_refinePromise(): PromiseWithResolvers<U>;
```

Defined in: [src/dataobject/Refiner.ts:91](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L91)

An internal method to renew the promise with resolvers.
It is called when the evaluation is re-read.

#### Returns

[`PromiseWithResolvers`](../../../promises/PromiseWithResolvers/README.md)\<`U`\>

***

### \_startEvaluation()

```ts
_startEvaluation(source: T): void;
```

Defined in: [src/dataobject/Refiner.ts:138](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L138)

An internal method to start the evaluation process.
It creates a new promise with resolvers and starts the evaluation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `T` | The source value to evaluate. It starts the evaluation process and caches the result. |

#### Returns

`void`

***

### update()

```ts
update(source: T): Refiner<T, U>;
```

Defined in: [src/dataobject/Refiner.ts:170](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/Refiner.ts#L170)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `T` |

#### Returns

`Refiner`\<`T`, `U`\>
