[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [binary](../README.md) / arrayBufferToBase64Single

# Function: arrayBufferToBase64Single()

```ts
function arrayBufferToBase64Single(buffer: ArrayBuffer | Uint8Array<ArrayBuffer>): Promise<string>;
```

Defined in: [src/binary/base64.ts:77](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/binary/base64.ts#L77)

Converts an ArrayBuffer or Uint8Array to a base64 string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `ArrayBuffer` \| `Uint8Array`\<`ArrayBuffer`\> | The ArrayBuffer to convert. |

## Returns

`Promise`\<`string`\>

A Promise that resolves to the base64 string representation of the ArrayBuffer.
