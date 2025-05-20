[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [promises](../README.md) / extendableDelay

# Function: extendableDelay()

```ts
function extendableDelay<U>(timeout: number, cancel: U): ExtendableDelay<typeof TIMED_OUT_SIGNAL, U>;
```

Defined in: [src/promises.ts:197](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L197)

Creates an extendable delay that can be cancelled or extended.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `U` *extends* `string` \| `number` \| `symbol` | *typeof* [`TIMED_OUT_SIGNAL`](../variables/TIMED_OUT_SIGNAL.md) | The type of the cancel signal, |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout` | `number` | The initial timeout duration in milliseconds. |
| `cancel` | `U` | The signal to use when cancelling the delay. |

## Returns

`ExtendableDelay`\<*typeof* [`TIMED_OUT_SIGNAL`](../variables/TIMED_OUT_SIGNAL.md), `U`\>

An object containing the promise, cancel function, and extend function.

## Throws

If the delay has already been resolved.
