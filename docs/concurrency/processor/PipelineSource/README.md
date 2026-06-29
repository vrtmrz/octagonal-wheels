[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / PipelineSource

# Class: PipelineSource\<T\>

Defined in: src/concurrency/processorPipeline.ts:55

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new PipelineSource<T>(options: PipelineSourceOptions): PipelineSource<T>;
```

Defined in: src/concurrency/processorPipeline.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PipelineSourceOptions`](../PipelineSourceOptions/README.md) |

#### Returns

`PipelineSource`\<`T`\>

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="readable"></a> `readable` | `readonly` | `ReadableStream`\<`T`\> | src/concurrency/processorPipeline.ts:56 |

## Methods

### close()

```ts
close(): Promise<void>;
```

Defined in: src/concurrency/processorPipeline.ts:78

#### Returns

`Promise`\<`void`\>

***

### enqueue()

```ts
enqueue(item: T): Promise<void>;
```

Defined in: src/concurrency/processorPipeline.ts:67

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

#### Returns

`Promise`\<`void`\>

***

### enqueueAll()

```ts
enqueueAll(items: Iterable<T>): Promise<void>;
```

Defined in: src/concurrency/processorPipeline.ts:72

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `Iterable`\<`T`\> |

#### Returns

`Promise`\<`void`\>

***

### pipeThrough()

```ts
pipeThrough<U>(stage: ProcessorStage<T, U>): ReadableStream<U>;
```

Defined in: src/concurrency/processorPipeline.ts:82

#### Type Parameters

| Type Parameter |
| ------ |
| `U` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stage` | [`ProcessorStage`](../ProcessorStage/README.md)\<`T`, `U`\> |

#### Returns

`ReadableStream`\<`U`\>

***

### pipeTo()

```ts
pipeTo(endpoint: PipelineEndpoint<T>): Promise<void>;
```

Defined in: src/concurrency/processorPipeline.ts:86

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `endpoint` | [`PipelineEndpoint`](../PipelineEndpoint/README.md)\<`T`\> |

#### Returns

`Promise`\<`void`\>
