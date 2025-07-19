[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [encryption](../../README.md) / [hkdf](../README.md) / encryptWithEphemeralSaltBinary

# Function: encryptWithEphemeralSaltBinary()

```ts
function encryptWithEphemeralSaltBinary(
   input: Uint8Array, 
   passphrase: string, 
refresh: boolean): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: [src/encryption/hkdf.ts:312](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/encryption/hkdf.ts#L312)

Encrypts the provided binary input using a passphrase and an ephemeral salt.

This function generates a new PBKDF2 salt for each encryption operation,
encrypts the input data with the given passphrase and generated salt,
and concatenates the encrypted result with the salt into a single
Uint8Array buffer.
Note that this function keeps the same PBKDF2 salt for the session unless `refresh` is set to true.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `input` | `Uint8Array` | `undefined` | The binary data to encrypt. |
| `passphrase` | `string` | `undefined` | The passphrase used for encryption. |
| `refresh` | `boolean` | `false` | - |

## Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A promise that resolves to a Uint8Array containing the encrypted data
         followed by the ephemeral salt.
