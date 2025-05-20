[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [task](../README.md) / pipeArrayToGenerator

# Function: pipeArrayToGenerator()

```ts
function pipeArrayToGenerator<T, U>(array: T[], callback: (obj: T) => Promise<U>): AsyncGenerator<TaskWaiting<U>>;
```

Defined in: [src/concurrency/task.ts:82](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/task.ts#L82)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | `T`[] |
| `callback` | (`obj`: `T`) => `Promise`\<`U`\> |

## Returns

`AsyncGenerator`\<[`TaskWaiting`](../type-aliases/TaskWaiting.md)\<`U`\>\>
