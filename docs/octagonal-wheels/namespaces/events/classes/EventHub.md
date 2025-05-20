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
new EventHub<Events>(): EventHub<Events>;
```

#### Returns

`EventHub`\<`Events`\>

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="_allassigned"></a> `_allAssigned` | `Map`\<`string`, `Set`\<`FallbackWeakRef`\<`AbortController`\>\>\> | [src/events.ts:30](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L30) |
| <a id="_assigned"></a> `_assigned` | `Map`\<`string`, `WeakMap`\<`CallableFunction`, `FallbackWeakRef`\<`AbortController`\>\>\> | [src/events.ts:29](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L29) |
| <a id="_emitter"></a> `_emitter` | `EventTarget` | [src/events.ts:27](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L27) |

## Methods

### \_issueSignal()

```ts
_issueSignal(key: string, callback: CallableFunction): AbortController;
```

Defined in: [src/events.ts:32](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L32)

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

Defined in: [src/events.ts:64](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L64)

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

Defined in: [src/events.ts:75](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L75)

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

Defined in: [src/events.ts:133](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L133)

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

Defined in: [src/events.ts:153](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L153)

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

Defined in: [src/events.ts:95](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L95)

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

Defined in: [src/events.ts:109](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L109)

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

Defined in: [src/events.ts:207](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L207)

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

Defined in: [src/events.ts:238](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L238)

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

Defined in: [src/events.ts:168](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L168)

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

Defined in: [src/events.ts:182](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L182)

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

Defined in: [src/events.ts:269](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L269)

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

Defined in: [src/events.ts:280](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events.ts#L280)

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
