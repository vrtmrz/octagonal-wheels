[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [promises](../README.md) / isResolved

# Function: isResolved()

```ts
function isResolved(promise: Promise<unknown>): Promise<boolean>;
```

Defined in: [src/promises.ts:23](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L23)

Checking whether a promise has been resolved.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `promise` | `Promise`\<`unknown`\> | a checking promise |

## Returns

`Promise`\<`boolean`\>

true if resolved, false if not.
