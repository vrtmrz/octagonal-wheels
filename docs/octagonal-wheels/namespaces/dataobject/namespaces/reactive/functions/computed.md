[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [dataobject](../../../README.md) / [reactive](../README.md) / computed

# Function: computed()

```ts
function computed<T>(expression: ReactiveExpression<T>): () => T;
```

Defined in: [src/dataobject/reactive\_v2.ts:221](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/reactive_v2.ts#L221)

Creates a computed value based on a reactive expression.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expression` | [`ReactiveExpression`](../type-aliases/ReactiveExpression.md)\<`T`\> | The reactive expression to compute. |

## Returns

A function that returns the computed value.

```ts
(): T;
```

### Returns

`T`
