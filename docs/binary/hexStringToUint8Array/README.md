[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [binary](../README.md) / hexStringToUint8Array

# Function: hexStringToUint8Array()

```ts
function hexStringToUint8Array(src: string): Uint8Array<ArrayBuffer>;
```

Defined in: [src/binary/hex.ts:15](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/binary/hex.ts#L15)

Converts a hexadecimal string to a Uint8Array.
Each pair of characters in the input string represents a byte in the output Uint8Array.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `src` | `string` | The hexadecimal string to convert. |

## Returns

`Uint8Array`\<`ArrayBuffer`\>

The Uint8Array representation of the input string.
