[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [events](../README.md) / createEventHub

# Function: createEventHub()

```ts
function createEventHub<Events>(emitter?: EventTarget): EventHub<Events>;
```

Defined in: [src/events/EventHub.ts:293](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L293)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Events` *extends* `AnyHubEvents` | `LSEvents` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `emitter?` | `EventTarget` |

## Returns

[`EventHub`](../EventHub/README.md)\<`Events`\>
