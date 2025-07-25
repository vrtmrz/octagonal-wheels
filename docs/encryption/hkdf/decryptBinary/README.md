[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [encryption](../../README.md) / [hkdf](../README.md) / decryptBinary

# Function: decryptBinary()

```ts
function decryptBinary(
   binary: Uint8Array, 
   passphrase: string, 
pbkdf2Salt: Uint8Array): Promise<Uint8Array<ArrayBuffer>>;
```

Defined in: [src/encryption/hkdf.ts:232](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/encryption/hkdf.ts#L232)

Decrypts binary encrypted data (Uint8Array) and returns the original string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `binary` | `Uint8Array` | The encrypted binary data. |
| `passphrase` | `string` | The passphrase. |
| `pbkdf2Salt` | `Uint8Array` | The salt for PBKDF2. |

## Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

The decrypted string.

## Throws

An exception is thrown if the input data is invalid or decryption fails.
