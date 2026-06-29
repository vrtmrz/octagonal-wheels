[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / createSink

# Function: createSink()

```ts
function createSink<T>(processor: (items: T[]) => void | Promise<void>, batchSize: number): WritableStream<T>;
```

Defined in: [src/concurrency/processorPipeline.ts:156](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L156)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `processor` | (`items`: `T`[]) => `void` \| `Promise`\<`void`\> | `undefined` |
| `batchSize` | `number` | `1` |

## Returns

`WritableStream`\<`T`\>
