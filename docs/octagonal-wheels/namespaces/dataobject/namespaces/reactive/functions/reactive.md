[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [dataobject](../../../README.md) / [reactive](../README.md) / reactive

# Function: reactive()

```ts
function reactive<T>(expression: (prev?: T) => T, initialValue?: T): ReactiveValue<T>;
```

Defined in: [src/dataobject/reactive\_v2.ts:58](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/dataobject/reactive_v2.ts#L58)

Creates a reactive value that tracks changes to a given expression.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the reactive value. |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expression` | (`prev?`: `T`) => `T` | The expression to track changes for. |
| `initialValue?` | `T` | The initial value of the reactive value. |

## Returns

[`ReactiveValue`](../type-aliases/ReactiveValue.md)\<`T`\>

- The reactive value.
