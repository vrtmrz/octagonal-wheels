[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [hash](../../../README.md) / [purejs](../README.md) / sha1Hash

# Function: sha1Hash()

```ts
function sha1Hash(str: string): Promise<string>;
```

Defined in: [src/hash/purejs.ts:110](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/hash/purejs.ts#L110)

Calculates the hex encoded SHA-1 hash of the given string.
Note: Very slow, use only when necessary. Prefer fallbackMixedHashEach for faster hashing.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

## Returns

`Promise`\<`string`\>

A promise that resolves to the SHA-1 hash as a hex-encoded string.
