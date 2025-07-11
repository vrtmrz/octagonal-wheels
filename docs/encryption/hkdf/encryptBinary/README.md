[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [encryption](../../README.md) / [hkdf](../README.md) / encryptBinary

# Function: encryptBinary()

```ts
function encryptBinary(
   input: string, 
   passphrase: string, 
pbkdf2Salt: Uint8Array): Promise<Uint8Array<ArrayBuffer>>;
```

Defined in: [src/encryption/hkdf.ts:167](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/encryption/hkdf.ts#L167)

Encrypts a string using AES-GCM and returns the result as binary data (Uint8Array).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The string to be encrypted. |
| `passphrase` | `string` | The passphrase. |
| `pbkdf2Salt` | `Uint8Array` | The salt for PBKDF2. |

## Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

The encrypted binary data.
