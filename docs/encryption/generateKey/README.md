[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [encryption](../README.md) / generateKey

# Function: generateKey()

```ts
function generateKey(passphrase: string): Promise<CryptoKey>;
```

Defined in: [src/encryption/encryptionv3.ts:46](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/encryption/encryptionv3.ts#L46)

Generates a key using the passphrase.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `passphrase` | `string` | The passphrase used for generating the key. |

## Returns

`Promise`\<`CryptoKey`\>

The derived key.
