[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [events](../README.md) / LinkedEventTarget

# Class: LinkedEventTarget

Defined in: [src/events/CustomEventTargets.ts:42](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/CustomEventTargets.ts#L42)

LinkedEventTarget is an EventTarget that can link to upstream and downstream EventTargets.
It will first try to dispatch the event upstream, and if that fails, it will dispatch it to itself.
If the event is not handled by itself or upstream, it will then dispatch it downstream.
If the event is not handled by any of the targets, it will return false.
Note: events should be cancelable for this to work properly.
If the event is not cancelable, it will always return true.

## Extends

- [`InterceptiveEventTarget`](../InterceptiveEventTarget/README.md)

## Constructors

### Constructor

```ts
new LinkedEventTarget(upstream?: EventTarget, downstream?: EventTarget): LinkedEventTarget;
```

Defined in: [src/events/CustomEventTargets.ts:43](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/CustomEventTargets.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `upstream?` | `EventTarget` |
| `downstream?` | `EventTarget` |

#### Returns

`LinkedEventTarget`

#### Overrides

[`InterceptiveEventTarget`](../InterceptiveEventTarget/README.md).[`constructor`](../InterceptiveEventTarget/README.md#constructor)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_onafterdispatch"></a> `_onAfterDispatch?` | (`event`: `Event`) => `boolean` | [`InterceptiveEventTarget`](../InterceptiveEventTarget/README.md).[`_onAfterDispatch`](../InterceptiveEventTarget/README.md#_onafterdispatch) | [src/events/CustomEventTargets.ts:11](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/CustomEventTargets.ts#L11) |
| <a id="_onbeforedispatch"></a> `_onBeforeDispatch?` | (`event`: `Event`) => `boolean` | [`InterceptiveEventTarget`](../InterceptiveEventTarget/README.md).[`_onBeforeDispatch`](../InterceptiveEventTarget/README.md#_onbeforedispatch) | [src/events/CustomEventTargets.ts:10](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/CustomEventTargets.ts#L10) |

## Methods

### addEventListener()

```ts
addEventListener(
   type: string, 
   callback: null | EventListenerOrEventListenerObject, 
   options?: boolean | AddEventListenerOptions): void;
```

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8713

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `callback` | `null` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

[`InterceptiveEventTarget`](../InterceptiveEventTarget/README.md).[`addEventListener`](../InterceptiveEventTarget/README.md#addeventlistener)

***

### dispatchEvent()

```ts
dispatchEvent(event: Event): boolean;
```

Defined in: [src/events/CustomEventTargets.ts:19](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/events/CustomEventTargets.ts#L19)

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

[`InterceptiveEventTarget`](../InterceptiveEventTarget/README.md).[`dispatchEvent`](../InterceptiveEventTarget/README.md#dispatchevent)

***

### removeEventListener()

```ts
removeEventListener(
   type: string, 
   callback: null | EventListenerOrEventListenerObject, 
   options?: boolean | EventListenerOptions): void;
```

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8725

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `callback` | `null` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

[`InterceptiveEventTarget`](../InterceptiveEventTarget/README.md).[`removeEventListener`](../InterceptiveEventTarget/README.md#removeeventlistener)
