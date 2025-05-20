[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [task](../README.md) / processAllTasksWithConcurrencyLimit

# Function: processAllTasksWithConcurrencyLimit()

```ts
function processAllTasksWithConcurrencyLimit<T>(limit: number, tasks: Task<T>[]): AsyncGenerator<TaskResultWithKey<T, Error>, void, unknown>;
```

Defined in: [src/concurrency/task.ts:95](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/task.ts#L95)

Perform all tasks within given concurrency.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `limit` | `number` | Concurrency limit |
| `tasks` | [`Task`](../type-aliases/Task.md)\<`T`\>[] | Tasks to perform all |

## Returns

`AsyncGenerator`\<[`TaskResultWithKey`](../type-aliases/TaskResultWithKey.md)\<`T`, `Error`\>, `void`, `unknown`\>
