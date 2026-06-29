[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / createProcessorStage

# Function: createProcessorStage()

```ts
function createProcessorStage<T, U>(processor: BatchProcessor<T, U>, options?: ProcessorStageOptions<T>): ProcessorStage<T, U>;
```

Defined in: [src/concurrency/processorPipeline.ts:149](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L149)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | [`BatchProcessor`](../BatchProcessor/README.md)\<`T`, `U`\> |
| `options?` | [`ProcessorStageOptions`](../ProcessorStageOptions/README.md)\<`T`\> |

## Returns

[`ProcessorStage`](../ProcessorStage/README.md)\<`T`, `U`\>
