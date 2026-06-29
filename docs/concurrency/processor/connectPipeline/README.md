[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / connectPipeline

# Function: connectPipeline()

```ts
function connectPipeline<T, U>(source: ReadableStream<T>, stage: ProcessorStage<T, U>): ReadableStream<U>;
```

Defined in: [src/concurrency/processorPipeline.ts:175](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L175)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `ReadableStream`\<`T`\> |
| `stage` | [`ProcessorStage`](../ProcessorStage/README.md)\<`T`, `U`\> |

## Returns

`ReadableStream`\<`U`\>
