[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [task](../README.md) / processAllGeneratorTasksWithConcurrencyLimit

# Function: processAllGeneratorTasksWithConcurrencyLimit()

```ts
function processAllGeneratorTasksWithConcurrencyLimit<T>(limit: number, tasks: AsyncGenerator<Task<T>, undefined, unknown>): AsyncGenerator<TaskResultWithKey<T, Error>, void, unknown>;
```

Defined in: [src/concurrency/task.ts:46](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/task.ts#L46)

Perform all tasks within given concurrency.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `limit` | `number` | Concurrency limit |
| `tasks` | `AsyncGenerator`\<[`Task`](../type-aliases/Task.md)\<`T`\>, `undefined`, `unknown`\> | Tasks to perform all |

## Returns

`AsyncGenerator`\<[`TaskResultWithKey`](../type-aliases/TaskResultWithKey.md)\<`T`, `Error`\>, `void`, `unknown`\>
