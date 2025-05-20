[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [dataobject](../../../README.md) / [reactive](../README.md) / reactiveSource

# Function: reactiveSource()

```ts
function reactiveSource<T>(initialValue: T): ReactiveSource<T>;
```

Defined in: [src/dataobject/reactive\_v2.ts:47](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/reactive_v2.ts#L47)

Creates a reactive instance with the given initial value.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the reactive instance. |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initialValue` | `T` | The initial value of the reactive instance. |

## Returns

[`ReactiveSource`](../type-aliases/ReactiveSource.md)\<`T`\>

A reactive instance with the given initial value.
