[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [binary](../README.md) / arrayBufferToBase64

# Function: arrayBufferToBase64()

```ts
function arrayBufferToBase64(buffer: ArrayBuffer | Uint8Array<ArrayBufferLike>): Promise<string[]>;
```

Defined in: [src/binary/base64.ts:83](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/binary/base64.ts#L83)

Converts an ArrayBuffer or UInt8Array to a base64 string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `ArrayBuffer` \| `Uint8Array`\<`ArrayBufferLike`\> | The ArrayBuffer to convert. |

## Returns

`Promise`\<`string`[]\>

A Promise that resolves to an array of base64 strings.
