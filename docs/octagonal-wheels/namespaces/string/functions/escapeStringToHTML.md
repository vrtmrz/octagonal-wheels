[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [string](../README.md) / escapeStringToHTML

# Function: escapeStringToHTML()

```ts
function escapeStringToHTML(str: string): string;
```

Defined in: [src/string.ts:44](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/string.ts#L44)

Escapes a string to HTML by replacing special characters with their corresponding HTML entities.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to escape. |

## Returns

`string`

The escaped string.

## Remarks

This function escapes the following characters: `<`, `>`, `&`, `"`, `'`, and `` ` ``. Not all special characters are escaped.
