[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / DedupeQueuePolicyOptions

# Type Alias: DedupeQueuePolicyOptions\<T\>

```ts
type DedupeQueuePolicyOptions<T> = {
  onEnqueue?: (newItem: T) => void;
  onReplace?: (queuedItem: T, newItem: T) => void;
};
```

Defined in: [src/concurrency/processorPipeline.ts:4](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L4)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="onenqueue"></a> `onEnqueue?` | (`newItem`: `T`) => `void` | [src/concurrency/processorPipeline.ts:6](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L6) |
| <a id="onreplace"></a> `onReplace?` | (`queuedItem`: `T`, `newItem`: `T`) => `void` | [src/concurrency/processorPipeline.ts:5](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L5) |
