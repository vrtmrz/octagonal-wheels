[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [events](../README.md) / EventHub

# Class: EventHub\<Events\>

Defined in: [src/events.ts:26](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L26)

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

Defined in: [src/events.ts:37](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L37)

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
| <a id="_allassigned"></a> `_allAssigned` | `Map`\<`string`, `Set`\<`FallbackWeakRef`\<`AbortController`\>\>\> | [src/events.ts:42](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L42) |
| <a id="_assigned"></a> `_assigned` | `Map`\<`string`, `WeakMap`\<`CallableFunction`, `FallbackWeakRef`\<`AbortController`\>\>\> | [src/events.ts:41](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L41) |

## Methods

### \_issueSignal()

```ts
_issueSignal(key: string, callback: CallableFunction): AbortController;
```

Defined in: [src/events.ts:44](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L44)

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

Defined in: [src/events.ts:76](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L76)

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

Defined in: [src/events.ts:87](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L87)

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

Defined in: [src/events.ts:145](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L145)

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

Defined in: [src/events.ts:165](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L165)

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

Defined in: [src/events.ts:107](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L107)

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

Defined in: [src/events.ts:121](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L121)

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

Defined in: [src/events.ts:219](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L219)

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

Defined in: [src/events.ts:231](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L231)

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

Defined in: [src/events.ts:250](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L250)

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

Defined in: [src/events.ts:262](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L262)

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

Defined in: [src/events.ts:180](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L180)

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

Defined in: [src/events.ts:194](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L194)

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

Defined in: [src/events.ts:281](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L281)

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

Defined in: [src/events.ts:292](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L292)

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
