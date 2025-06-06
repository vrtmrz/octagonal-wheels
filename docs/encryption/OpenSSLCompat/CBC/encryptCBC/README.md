[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../modules.md) / [encryption](../../../README.md) / [OpenSSLCompat](../../README.md) / [CBC](../README.md) / encryptCBC

# Function: encryptCBC()

```ts
function encryptCBC(
   plaintext: Uint8Array, 
   passphrase: string, 
iterations: number): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: [src/encryption/openSSLCompat/CBC.ts:86](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/encryption/openSSLCompat/CBC.ts#L86)

Encrypts plaintext using a password and a specified number of iterations.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `plaintext` | `Uint8Array` | `undefined` | The plaintext to encrypt. |
| `passphrase` | `string` | `undefined` | The password to use for encryption. |
| `iterations` | `number` | `100_000` | The number of iterations for key derivation. |

## Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The encrypted ciphertext.
