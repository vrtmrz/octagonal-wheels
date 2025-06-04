[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [events](../README.md) / EventHub

# Class: EventHub\<Events\>

Defined in: [src/events/EventHub.ts:25](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L25)

A class that provides an event hub for managing custom events.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Events` *extends* `AnyHubEvents` | `LSEvents` | The type of events that the EventHub will handle. This type should be an object with event names as keys and event data types as values. This make all events strongly typed. |

## Constructors

### Constructor

```ts
new EventHub<Events>(emitter?: EventTarget): EventHub<Events>;
```

Defined in: [src/events/EventHub.ts:36](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L36)

Creates an instance of the EventHub.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `emitter?` | `EventTarget` | An optional EventTarget to use as the event emitter. If not provided, a dedicated new EventTarget will be created. i.e., it can share the same emitter with other EventHubs (e.g., for a global event bus, or separately built apps via window object). |

#### Returns

`EventHub`\<`Events`\>

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="_allassigned"></a> `_allAssigned` | `Map`\<`string`, `Set`\<`FallbackWeakRef`\<`AbortController`\>\>\> | [src/events/EventHub.ts:41](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L41) |
| <a id="_assigned"></a> `_assigned` | `Map`\<`string`, `WeakMap`\<`CallableFunction`, `FallbackWeakRef`\<`AbortController`\>\>\> | [src/events/EventHub.ts:40](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L40) |

## Methods

### \_issueSignal()

```ts
_issueSignal(key: string, callback: CallableFunction): AbortController;
```

Defined in: [src/events/EventHub.ts:43](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `callback` | `CallableFunction` |

#### Returns

`AbortController`

***

### emitEvent()

#### Call Signature

```ts
emitEvent<ET, K>(event: EventTypeWithoutData<ET, K>): void;
```

Defined in: [src/events/EventHub.ts:78](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L78)

Emits an event without data.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithoutData`\<`ET`, `K`\> | The event to emit. |

##### Returns

`void`

#### Call Signature

```ts
emitEvent<ET, K>(event: EventTypeWithData<ET, K>, data: ET[K]): void;
```

Defined in: [src/events/EventHub.ts:87](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L87)

Emits an event with data.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithData`\<`ET`, `K`\> | The event to emit. |
| `data` | `ET`\[`K`\] | data to include with the event. |

##### Returns

`void`

***

### off()

```ts
off<ET, K>(event: EventType<K>, callback?: CallableFunction): void;
```

Defined in: [src/events/EventHub.ts:137](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L137)

Removes an event listener for a specific event.

#### Type Parameters

| Type Parameter |
| ------ |
| `ET` *extends* `AnyHubEvents` |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventType`\<`K`\> |  |
| `callback?` | `CallableFunction` |  |

#### Returns

`void`

***

### offAll()

```ts
offAll(): void;
```

Defined in: [src/events/EventHub.ts:154](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L154)

Removes all event listeners.

#### Returns

`void`

***

### on()

#### Call Signature

```ts
on<ET, K>(
   event: EventTypeWithoutData<ET, K>, 
   callback: (e: Event) => void | Promise<void>, 
   options?: AddEventListenerOptions): () => void;
```

Defined in: [src/events/EventHub.ts:101](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L101)

Registers an event listener for a specific event.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithoutData`\<`ET`, `K`\> | The event to listen for. |
| `callback` | (`e`: `Event`) => `void` \| `Promise`\<`void`\> | The callback to execute when the event is triggered. |
| `options?` | `AddEventListenerOptions` | - |

##### Returns

A function to remove the event listener.

```ts
(): void;
```

###### Returns

`void`

#### Call Signature

```ts
on<ET, K>(
   event: EventTypeWithData<ET, K>, 
   callback: (e: Event, data: ET[K]) => void | Promise<void>, 
   options?: AddEventListenerOptions): () => void;
```

Defined in: [src/events/EventHub.ts:115](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L115)

Registers an event listener for a specific event.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithData`\<`ET`, `K`\> | The event to listen for. |
| `callback` | (`e`: `Event`, `data`: `ET`\[`K`\]) => `void` \| `Promise`\<`void`\> | The callback to execute when the event is triggered. |
| `options?` | `AddEventListenerOptions` | - |

##### Returns

A function to remove the event listener.

```ts
(): void;
```

###### Returns

`void`

***

### once()

#### Call Signature

```ts
once<ET, K>(event: EventTypeWithoutData<ET, K>, callback: (e: Event) => void): () => void;
```

Defined in: [src/events/EventHub.ts:208](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L208)

Registers a one-time event listener for a specific event.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithoutData`\<`ET`, `K`\> | The event to listen for. |
| `callback` | (`e`: `Event`) => `void` | The callback to execute when the event is triggered. |

##### Returns

```ts
(): void;
```

###### Returns

`void`

#### Call Signature

```ts
once<ET, K>(event: EventTypeWithData<ET, K>, callback: (e: Event, data: ET[K]) => void): () => void;
```

Defined in: [src/events/EventHub.ts:220](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L220)

Registers a one-time event listener for a specific event.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithData`\<`ET`, `K`\> | The event to listen for. |
| `callback` | (`e`: `Event`, `data`: `ET`\[`K`\]) => `void` | The callback to execute when the event is triggered. |

##### Returns

```ts
(): void;
```

###### Returns

`void`

***

### onceEvent()

#### Call Signature

```ts
onceEvent<ET, K>(event: EventTypeWithoutData<ET, K>, callback: () => void): () => void;
```

Defined in: [src/events/EventHub.ts:239](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L239)

Registers a one-time event listener for a specific event, with a callback that only receives the event data.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithoutData`\<`ET`, `K`\> | The event to listen for. |
| `callback` | () => `void` | The callback to execute when the event is triggered. |

##### Returns

```ts
(): void;
```

###### Returns

`void`

#### Call Signature

```ts
onceEvent<ET, K>(event: EventTypeWithData<ET, K>, callback: (data: ET[K]) => void): () => void;
```

Defined in: [src/events/EventHub.ts:251](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L251)

Registers a one-time event listener for a specific event, with a callback that only receives the event data.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithData`\<`ET`, `K`\> | The event to listen for. |
| `callback` | (`data`: `ET`\[`K`\]) => `void` | The callback to execute when the event is triggered. |

##### Returns

```ts
(): void;
```

###### Returns

`void`

***

### onEvent()

#### Call Signature

```ts
onEvent<ET, K>(
   event: EventTypeWithoutData<ET, K>, 
   callback: () => any, 
   options?: AddEventListenerOptions): () => void;
```

Defined in: [src/events/EventHub.ts:169](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L169)

Registers an event listener for a specific event, with a callback that only receives the event data.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithoutData`\<`ET`, `K`\> | The event to listen for. |
| `callback` | () => `any` | The callback to execute when the event is triggered. |
| `options?` | `AddEventListenerOptions` | - |

##### Returns

A function to remove the event listener.

```ts
(): void;
```

###### Returns

`void`

#### Call Signature

```ts
onEvent<ET, K>(
   event: EventTypeWithData<ET, K>, 
   callback: (data: ET[K]) => any, 
   options?: AddEventListenerOptions): () => void;
```

Defined in: [src/events/EventHub.ts:183](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L183)

Registers an event listener for a specific event, with a callback that only receives the event data.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithData`\<`ET`, `K`\> | The event to listen for. |
| `callback` | (`data`: `ET`\[`K`\]) => `any` | The callback to execute when the event is triggered. |
| `options?` | `AddEventListenerOptions` | - |

##### Returns

A function to remove the event listener.

```ts
(): void;
```

###### Returns

`void`

***

### waitFor()

#### Call Signature

```ts
waitFor<ET, K>(event: EventTypeWithoutData<ET, K>): Promise<null>;
```

Defined in: [src/events/EventHub.ts:270](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L270)

Waits for a specific event to be emitted.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithoutData`\<`ET`, `K`\> | The event to wait for. |

##### Returns

`Promise`\<`null`\>

A Promise that resolves with null.

#### Call Signature

```ts
waitFor<ET, K>(event: EventTypeWithData<ET, K>): Promise<ET[K]>;
```

Defined in: [src/events/EventHub.ts:279](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/EventHub.ts#L279)

Waits for a specific event to be emitted and returns a promise that resolves with the event data.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `ET` *extends* `AnyHubEvents` | The type of events. |
| `K` *extends* `string` \| `number` \| `symbol` | The key of the event. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `EventTypeWithData`\<`ET`, `K`\> | The event to wait for. |

##### Returns

`Promise`\<`ET`\[`K`\]\>

A promise that resolves with the event data.
