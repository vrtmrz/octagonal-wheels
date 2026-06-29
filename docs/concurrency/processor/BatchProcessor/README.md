[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / BatchProcessor

# Type Alias: BatchProcessor()\<T, U\>

```ts
type BatchProcessor<T, U> = (items: T[]) => ProcessorResult<U>;
```

Defined in: [src/concurrency/processorPipeline.ts:2](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L2)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `T`[] |

## Returns

[`ProcessorResult`](../ProcessorResult/README.md)\<`U`\>
