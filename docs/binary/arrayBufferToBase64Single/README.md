[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [binary](../README.md) / arrayBufferToBase64Single

# Function: arrayBufferToBase64Single()

```ts
function arrayBufferToBase64Single(buffer: ArrayBuffer | Uint8Array<ArrayBufferLike>): Promise<string>;
```

Defined in: [src/binary/base64.ts:72](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/binary/base64.ts#L72)

Converts an ArrayBuffer or UInt8Array to a base64 string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `ArrayBuffer` \| `Uint8Array`\<`ArrayBufferLike`\> | The ArrayBuffer to convert. |

## Returns

`Promise`\<`string`\>

A Promise that resolves to the base64 string representation of the ArrayBuffer.
