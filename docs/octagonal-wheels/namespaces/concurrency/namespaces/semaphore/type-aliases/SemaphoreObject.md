[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [semaphore](../README.md) / SemaphoreObject

# Type Alias: SemaphoreObject

```ts
type SemaphoreObject = {
  waiting: number;
  acquire: Promise<SemaphoreReleaser>;
  tryAcquire: Promise<false | SemaphoreReleaser>;
};
```

Defined in: [src/concurrency/semaphore\_v2.ts:3](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/semaphore_v2.ts#L3)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="waiting"></a> `waiting` | `number` | [src/concurrency/semaphore\_v2.ts:7](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/semaphore_v2.ts#L7) |

## Methods

### acquire()

```ts
acquire(quantity?: number): Promise<SemaphoreReleaser>;
```

Defined in: [src/concurrency/semaphore\_v2.ts:4](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/semaphore_v2.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `quantity?` | `number` |

#### Returns

`Promise`\<[`SemaphoreReleaser`](SemaphoreReleaser.md)\>

***

### tryAcquire()

```ts
tryAcquire(quantity?: number, timeout?: number): Promise<false | SemaphoreReleaser>;
```

Defined in: [src/concurrency/semaphore\_v2.ts:5](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/semaphore_v2.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `quantity?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`\<`false` \| [`SemaphoreReleaser`](SemaphoreReleaser.md)\>
