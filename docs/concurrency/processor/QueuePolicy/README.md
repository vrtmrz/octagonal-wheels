[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / QueuePolicy

# Type Alias: QueuePolicy()\<T\>

```ts
type QueuePolicy<T> = (queue: T[], newItem: T) => T[];
```

Defined in: [src/concurrency/processorPipeline.ts:3](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L3)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `queue` | `T`[] |
| `newItem` | `T` |

## Returns

`T`[]
