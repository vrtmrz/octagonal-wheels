[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [promises](../README.md) / promiseWithResolvers

# Variable: promiseWithResolvers()

```ts
const promiseWithResolvers: <T>() => {
  promise: any;
  reject: any;
  resolve: any;
} = polyfilledFunc;
```

Defined in: [src/promises.ts:79](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L79)

Creates a promise with custom resolvers.

Creates a native promise with resolvers. This function is used when the `Promise.withResolvers` function is available.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the promise value. |

## Returns

```ts
{
  promise: any;
  reject: any;
  resolve: any;
}
```

An object containing the promise, resolve function, and reject function.

### promise

```ts
promise: any;
```

### reject

```ts
reject: any;
```

### resolve

```ts
resolve: any;
```

## Param

The function that polyfills the promise with resolvers.

## Returns

- The promise with custom resolvers.
