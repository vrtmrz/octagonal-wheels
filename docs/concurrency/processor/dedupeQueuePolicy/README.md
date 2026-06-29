[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / dedupeQueuePolicy

# Function: dedupeQueuePolicy()

```ts
function dedupeQueuePolicy<T>(getKey: (item: T) => string, options: DedupeQueuePolicyOptions<T>): QueuePolicy<T>;
```

Defined in: [src/concurrency/processorPipeline.ts:35](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L35)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `getKey` | (`item`: `T`) => `string` |
| `options` | [`DedupeQueuePolicyOptions`](../DedupeQueuePolicyOptions/README.md)\<`T`\> |

## Returns

[`QueuePolicy`](../QueuePolicy/README.md)\<`T`\>
