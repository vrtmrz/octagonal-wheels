[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / ProcessorStage

# Class: ProcessorStage\<T, U\>

Defined in: [src/concurrency/processorPipeline.ts:91](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L91)

## Extends

- `TransformStream`\<`T`, `U`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Constructors

### Constructor

```ts
new ProcessorStage<T, U>(processor: BatchProcessor<T, U>, options: ProcessorStageOptions<T>): ProcessorStage<T, U>;
```

Defined in: [src/concurrency/processorPipeline.ts:92](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L92)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | [`BatchProcessor`](../BatchProcessor/README.md)\<`T`, `U`\> |
| `options` | [`ProcessorStageOptions`](../ProcessorStageOptions/README.md)\<`T`\> |

#### Returns

`ProcessorStage`\<`T`, `U`\>

#### Overrides

```ts
TransformStream<T, U>.constructor
```

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="readable"></a> `readable` | `readonly` | `ReadableStream`\<`U`\> | The **`readable`** read-only property of the TransformStream interface returns the ReadableStream instance controlled by this `TransformStream`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/readable) | `TransformStream.readable` | node\_modules/typescript/lib/lib.dom.d.ts:32435 |
| <a id="writable"></a> `writable` | `readonly` | `WritableStream`\<`T`\> | The **`writable`** read-only property of the TransformStream interface returns the WritableStream instance controlled by this `TransformStream`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/writable) | `TransformStream.writable` | node\_modules/typescript/lib/lib.dom.d.ts:32441 |
