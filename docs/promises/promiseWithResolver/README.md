[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [promises](../README.md) / promiseWithResolver

# ~~Variable: promiseWithResolver()~~

```ts
const promiseWithResolver: <T>() => {
  promise: any;
  reject: any;
  resolve: any;
} = polyfilledFunc;
```

Defined in: [src/promises.ts:85](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L85)

Creates a promise with custom resolvers. This is kept for compatibility with older code.

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

### ~~promise~~

```ts
promise: any;
```

### ~~reject~~

```ts
reject: any;
```

### ~~resolve~~

```ts
resolve: any;
```

## Deprecated

Use `promiseWithResolvers` instead. (Wrong name)
