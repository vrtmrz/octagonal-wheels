[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / QueueProcessorShimOptions

# Type Alias: QueueProcessorShimOptions\<T, U\>

```ts
type QueueProcessorShimOptions<T, U> = ProcessorStageOptions<T> & {
  concurrentLimit?: number;
  delay?: number;
  pipeTo?: QueueProcessorShim<U, any>;
  suspended?: boolean;
};
```

Defined in: [src/concurrency/processorPipeline.ts:19](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processorPipeline.ts#L19)

## Type Declaration

### concurrentLimit?

```ts
optional concurrentLimit: number;
```

### delay?

```ts
optional delay: number;
```

### pipeTo?

```ts
optional pipeTo: QueueProcessorShim<U, any>;
```

### suspended?

```ts
optional suspended: boolean;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |
