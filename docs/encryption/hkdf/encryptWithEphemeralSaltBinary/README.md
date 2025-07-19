[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [encryption](../../README.md) / [hkdf](../README.md) / encryptWithEphemeralSaltBinary

# Function: encryptWithEphemeralSaltBinary()

```ts
function encryptWithEphemeralSaltBinary(input: Uint8Array, passphrase: string): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: [src/encryption/hkdf.ts:299](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/encryption/hkdf.ts#L299)

Encrypts the provided binary input using a passphrase and an ephemeral salt.

This function generates a new PBKDF2 salt for each encryption operation,
encrypts the input data with the given passphrase and generated salt,
and concatenates the encrypted result with the salt into a single
Uint8Array buffer.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `Uint8Array` | The binary data to encrypt. |
| `passphrase` | `string` | The passphrase used for encryption. |

## Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A promise that resolves to a Uint8Array containing the encrypted data
         followed by the ephemeral salt.
