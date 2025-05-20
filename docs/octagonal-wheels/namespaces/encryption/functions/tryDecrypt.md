[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [encryption](../README.md) / tryDecrypt

# Function: tryDecrypt()

```ts
function tryDecrypt(
   encryptedResult: string, 
   passphrase: string | false, 
autoCalculateIterations: boolean): Promise<string | false>;
```

Defined in: [src/encryption/encryption.ts:341](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/encryption/encryption.ts#L341)

Tries to decrypt the encrypted result using the provided passphrase.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `encryptedResult` | `string` | The encrypted result to decrypt. |
| `passphrase` | `string` \| `false` | The passphrase used for decryption. |
| `autoCalculateIterations` | `boolean` | A boolean indicating whether to automatically calculate the iterations. |

## Returns

`Promise`\<`string` \| `false`\>

A promise that resolves to the decrypted result if successful, or `false` if decryption fails.
