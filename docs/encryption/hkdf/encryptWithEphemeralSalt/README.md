[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [encryption](../../README.md) / [hkdf](../README.md) / encryptWithEphemeralSalt

# Function: encryptWithEphemeralSalt()

```ts
function encryptWithEphemeralSalt(input: string, passphrase: string): Promise<string>;
```

Defined in: [src/encryption/hkdf.ts:316](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/encryption/hkdf.ts#L316)

Encrypts a string using a passphrase and an ephemeral salt.
The function internally converts the input string to binary, encrypts it,
and returns the result as a base64-encoded string prefixed with a constant.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The plaintext string to encrypt. |
| `passphrase` | `string` | The passphrase used for encryption. |

## Returns

`Promise`\<`string`\>

A promise that resolves to the encrypted string in base64 format with a prefix.
