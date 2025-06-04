[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [promises](../README.md) / polyfillPromiseWithResolvers

# Function: polyfillPromiseWithResolvers()

```ts
function polyfillPromiseWithResolvers<T>(): PromiseWithResolvers<T>;
```

Defined in: [src/promises.ts:46](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L46)

Creates a promise and returns it along with the resolve and reject functions.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Returns

[`PromiseWithResolvers`](../PromiseWithResolvers/README.md)\<`T`\>

An object containing the promise, resolve, and reject functions.

## Typeparam

T The type of the promise value.
