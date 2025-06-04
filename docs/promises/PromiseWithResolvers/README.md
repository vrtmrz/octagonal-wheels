[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [promises](../README.md) / PromiseWithResolvers

# Type Alias: PromiseWithResolvers\<T\>

```ts
type PromiseWithResolvers<T> = {
  promise: Promise<T>;
  reject: (reason?: any) => void;
  resolve: (value: T | PromiseLike<T>) => void;
};
```

Defined in: [src/promises.ts:35](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L35)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="promise"></a> `promise` | `Promise`\<`T`\> | [src/promises.ts:36](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L36) |
| <a id="reject"></a> `reject` | (`reason?`: `any`) => `void` | [src/promises.ts:38](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L38) |
| <a id="resolve"></a> `resolve` | (`value`: `T` \| `PromiseLike`\<`T`\>) => `void` | [src/promises.ts:37](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L37) |
