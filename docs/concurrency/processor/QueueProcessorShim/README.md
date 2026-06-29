[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / QueueProcessorShim

# Class: QueueProcessorShim\<T, U\>

Defined in: src/concurrency/processorPipeline.ts:179

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Constructors

### Constructor

```ts
new QueueProcessorShim<T, U>(
   processor: BatchProcessor<T, U>, 
   options: QueueProcessorShimOptions<T, U>, 
   items?: T[], 
queuePolicy?: QueuePolicy<T>): QueueProcessorShim<T, U>;
```

Defined in: src/concurrency/processorPipeline.ts:193

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | [`BatchProcessor`](../BatchProcessor/README.md)\<`T`, `U`\> |
| `options` | [`QueueProcessorShimOptions`](../QueueProcessorShimOptions/README.md)\<`T`, `U`\> |
| `items?` | `T`[] |
| `queuePolicy?` | [`QueuePolicy`](../QueuePolicy/README.md)\<`T`\> |

#### Returns

`QueueProcessorShim`\<`T`, `U`\>

## Accessors

### isSuspended

#### Get Signature

```ts
get isSuspended(): boolean;
```

Defined in: src/concurrency/processorPipeline.ts:225

##### Returns

`boolean`

***

### root

#### Get Signature

```ts
get root(): QueueProcessorShim<any, any>;
```

Defined in: src/concurrency/processorPipeline.ts:213

##### Returns

`QueueProcessorShim`\<`any`, `any`\>

***

### writable

#### Get Signature

```ts
get writable(): WritableStream<T>;
```

Defined in: src/concurrency/processorPipeline.ts:217

##### Returns

`WritableStream`\<`T`\>

## Methods

### enqueue()

```ts
enqueue(item: T): this;
```

Defined in: src/concurrency/processorPipeline.ts:229

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

#### Returns

`this`

***

### enqueueAll()

```ts
enqueueAll(items: Iterable<T>): this;
```

Defined in: src/concurrency/processorPipeline.ts:235

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `Iterable`\<`T`\> |

#### Returns

`this`

***

### pipeTo()

```ts
pipeTo<V>(downstream: QueueProcessorShim<U, V>): QueueProcessorShim<U, V>;
```

Defined in: src/concurrency/processorPipeline.ts:247

#### Type Parameters

| Type Parameter |
| ------ |
| `V` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `downstream` | `QueueProcessorShim`\<`U`, `V`\> |

#### Returns

`QueueProcessorShim`\<`U`, `V`\>

***

### replaceEnqueueProcessor()

```ts
replaceEnqueueProcessor(queuePolicy: QueuePolicy<T>): this;
```

Defined in: src/concurrency/processorPipeline.ts:242

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `queuePolicy` | [`QueuePolicy`](../QueuePolicy/README.md)\<`T`\> |

#### Returns

`this`

***

### resume()

```ts
resume(): this;
```

Defined in: src/concurrency/processorPipeline.ts:253

#### Returns

`this`

***

### resumePipeLine()

```ts
resumePipeLine(): this;
```

Defined in: src/concurrency/processorPipeline.ts:259

#### Returns

`this`

***

### startPipeline()

```ts
startPipeline(): this;
```

Defined in: src/concurrency/processorPipeline.ts:264

#### Returns

`this`

***

### terminate()

```ts
terminate(): void;
```

Defined in: src/concurrency/processorPipeline.ts:291

#### Returns

`void`

***

### waitForAllDoneAndTerminate()

```ts
waitForAllDoneAndTerminate(timeout?: number): Promise<boolean>;
```

Defined in: src/concurrency/processorPipeline.ts:285

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>

***

### waitForAllProcessed()

```ts
waitForAllProcessed(timeout?: number): Promise<boolean>;
```

Defined in: src/concurrency/processorPipeline.ts:269

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>
