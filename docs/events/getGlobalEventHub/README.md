[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [events](../README.md) / getGlobalEventHub

# Function: getGlobalEventHub()

```ts
function getGlobalEventHub<Events>(emitter?: EventTarget): EventHub<Events>;
```

Defined in: [src/events/EventHub.ts:300](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L300)

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
