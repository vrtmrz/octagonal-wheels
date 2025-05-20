[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [lock](../README.md) / isLockAcquired

# Function: isLockAcquired()

```ts
function isLockAcquired(key: string | symbol): boolean;
```

Defined in: [src/concurrency/lock\_v2.ts:151](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/lock_v2.ts#L151)

Checks if a serialised-processing-lock is acquired for the given key.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` \| `symbol` | The key to check for lock acquisition. |

## Returns

`boolean`

`true` if the lock is acquired, `false` otherwise.
