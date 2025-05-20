[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [task](../README.md) / scheduleTask

# Function: scheduleTask()

```ts
function scheduleTask(
   key: string, 
   timeout: number, 
   proc: () => void | Promise<any>, 
   skipIfTaskExist?: boolean): void;
```

Defined in: [src/concurrency/task.ts:135](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/task.ts#L135)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `timeout` | `number` |
| `proc` | () => `void` \| `Promise`\<`any`\> |
| `skipIfTaskExist?` | `boolean` |

## Returns

`void`
