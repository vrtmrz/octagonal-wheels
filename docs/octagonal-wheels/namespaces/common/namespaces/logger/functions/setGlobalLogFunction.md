[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [common](../../../README.md) / [logger](../README.md) / setGlobalLogFunction

# Function: setGlobalLogFunction()

```ts
function setGlobalLogFunction(logger: (message: any, level: number, key?: string) => void): void;
```

Defined in: [src/common/logger.ts:64](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/common/logger.ts#L64)

Sets the global log function.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `logger` | (`message`: `any`, `level`: `number`, `key?`: `string`) => `void` | The logger function to set as the global log function. |

## Returns

`void`
