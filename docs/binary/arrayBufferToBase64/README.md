[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [binary](../README.md) / arrayBufferToBase64

# Function: arrayBufferToBase64()

```ts
function arrayBufferToBase64(buffer: ArrayBuffer | Uint8Array<ArrayBuffer>): Promise<string[]>;
```

Defined in: [src/binary/base64.ts:88](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/binary/base64.ts#L88)

Converts an ArrayBuffer or Uint8Array to a base64 string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `ArrayBuffer` \| `Uint8Array`\<`ArrayBuffer`\> | The ArrayBuffer to convert. |

## Returns

`Promise`\<`string`[]\>

A Promise that resolves to an array of base64 strings.
