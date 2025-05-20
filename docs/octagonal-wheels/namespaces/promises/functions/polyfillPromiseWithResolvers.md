[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [promises](../README.md) / polyfillPromiseWithResolvers

# Function: polyfillPromiseWithResolvers()

```ts
function polyfillPromiseWithResolvers<T>(): PromiseWithResolvers<T>;
```

Defined in: [src/promises.ts:47](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L47)

Creates a promise and returns it along with the resolve and reject functions.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Returns

[`PromiseWithResolvers`](../type-aliases/PromiseWithResolvers.md)\<`T`\>

An object containing the promise, resolve, and reject functions.

## Typeparam

T The type of the promise value.
