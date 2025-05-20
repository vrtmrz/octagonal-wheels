[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [task](../README.md) / ResolverWithKey

# Type Alias: ResolverWithKey\<T\>

```ts
type ResolverWithKey<T> = {
  key: string;
  resolver: PromiseWithResolvers<T>;
};
```

Defined in: [src/concurrency/task.ts:202](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/task.ts#L202)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="key"></a> `key` | `string` | [src/concurrency/task.ts:202](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/task.ts#L202) |
| <a id="resolver"></a> `resolver` | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`T`\> | [src/concurrency/task.ts:202](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/task.ts#L202) |
