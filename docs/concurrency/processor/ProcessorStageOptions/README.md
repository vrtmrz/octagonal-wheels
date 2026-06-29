[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / ProcessorStageOptions

# Type Alias: ProcessorStageOptions\<T\>

```ts
type ProcessorStageOptions<T> = {
  batchSize?: number;
  flushDelay?: number;
  queuePolicy?: QueuePolicy<T>;
};
```

Defined in: src/concurrency/processorPipeline.ts:13

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="batchsize"></a> `batchSize?` | `number` | src/concurrency/processorPipeline.ts:14 |
| <a id="flushdelay"></a> `flushDelay?` | `number` | src/concurrency/processorPipeline.ts:16 |
| <a id="queuepolicy"></a> `queuePolicy?` | [`QueuePolicy`](../QueuePolicy/README.md)\<`T`\> | src/concurrency/processorPipeline.ts:15 |
