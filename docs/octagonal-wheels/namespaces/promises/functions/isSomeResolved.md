[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [promises](../README.md) / isSomeResolved

# Function: isSomeResolved()

```ts
function isSomeResolved(promises: Promise<unknown>[]): Promise<boolean>;
```

Defined in: [src/promises.ts:31](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/promises.ts#L31)

Checking whether some promises have been resolved.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `promises` | `Promise`\<`unknown`\>[] | checking promises |

## Returns

`Promise`\<`boolean`\>

true if some promises have been resolved, false if not.
