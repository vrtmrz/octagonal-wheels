[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [task](../README.md) / sharedTask

# Function: ~~sharedTask()~~

```ts
function sharedTask<T>(key: string, proc: () => Promise<T>): Promise<T>;
```

Defined in: [src/concurrency/task.ts:211](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/task.ts#L211)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` |  |
| `proc` | () => `Promise`\<`T`\> |  |

## Returns

`Promise`\<`T`\>

## Deprecated

Use shareRunningResult instead.
