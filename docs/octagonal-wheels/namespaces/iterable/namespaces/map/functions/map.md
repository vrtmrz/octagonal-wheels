[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [iterable](../../../README.md) / [map](../README.md) / map

# Function: map()

```ts
function map<T, U>(iterable: Iterable<T, any, any> | AsyncIterable<T, any, any>, callback: (t: T) => U | Promise<U>): AsyncIterable<U>;
```

Defined in: [src/iterable/map.ts:57](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/iterable/map.ts#L57)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `iterable` | `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\> |
| `callback` | (`t`: `T`) => `U` \| `Promise`\<`U`\> |

## Returns

`AsyncIterable`\<`U`\>
