[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [binary](../README.md) / base64ToString

# Function: base64ToString()

```ts
function base64ToString(base64: string | string[]): string;
```

Defined in: [src/binary/base64.ts:203](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/binary/base64.ts#L203)

Converts a base64 string or an array of base64 strings to a regular string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `base64` | `string` \| `string`[] | The base64 string or an array of base64 strings to convert. |

## Returns

`string`

The converted regular string.

## Note

This function is used to convert base64 strings to binary strings. And if failed, it returns the original string.
