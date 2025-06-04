[**octagonal-wheels**](../../README.md)

***

[octagonal-wheels](../../modules.md) / [actor](../README.md) / LogActorBase

# Class: `abstract` LogActorBase

Defined in: [src/actor.ts:196](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L196)

Represents an abstract class for an actor.

## Extends

- [`Actor`](../Actor/README.md)\<[`ActorLogMessage`](../ActorLogMessage/README.md)\>

## Constructors

### Constructor

```ts
new LogActorBase(): LogActorBase;
```

Defined in: [src/actor.ts:197](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L197)

#### Returns

`LogActorBase`

#### Overrides

[`Actor`](../Actor/README.md).[`constructor`](../Actor/README.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="__process"></a> `__process` | `public` | `undefined` \| `Promise`\<`void`\> | `undefined` | - | [`Actor`](../Actor/README.md).[`__process`](../Actor/README.md#__process) | [src/actor.ts:135](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L135) |
| <a id="_busy"></a> `_busy` | `public` | `boolean` | `false` | - | [`Actor`](../Actor/README.md).[`_busy`](../Actor/README.md#_busy) | [src/actor.ts:120](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L120) |
| <a id="multiinstance"></a> `multiInstance` | `readonly` | `boolean` | `undefined` | Indicates whether the actor is a multi-instance. | [`Actor`](../Actor/README.md).[`multiInstance`](../Actor/README.md#multiinstance) | [src/actor.ts:102](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L102) |
| <a id="name"></a> `name` | `readonly` | `string` | `undefined` | The name of the actor. | [`Actor`](../Actor/README.md).[`name`](../Actor/README.md#name) | [src/actor.ts:98](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L98) |
| <a id="hub"></a> `hub` | `static` | `ActorHub`\<`any`\> | `undefined` | Represents the hub for actors. | [`Actor`](../Actor/README.md).[`hub`](../Actor/README.md#hub) | [src/actor.ts:107](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L107) |

## Methods

### \_enqueue()

```ts
_enqueue(message: ActorLogMessage): void;
```

Defined in: [src/actor.ts:138](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L138)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`ActorLogMessage`](../ActorLogMessage/README.md) |

#### Returns

`void`

#### Inherited from

[`Actor`](../Actor/README.md).[`_enqueue`](../Actor/README.md#_enqueue)

***

### \_process()

```ts
_process(message: ActorLogMessage): Promise<void>;
```

Defined in: [src/actor.ts:121](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L121)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`ActorLogMessage`](../ActorLogMessage/README.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Actor`](../Actor/README.md).[`_process`](../Actor/README.md#_process)

***

### destroy()

```ts
destroy(): void;
```

Defined in: [src/actor.ts:187](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L187)

Destroys the actor instance.

#### Returns

`void`

#### Inherited from

[`Actor`](../Actor/README.md).[`destroy`](../Actor/README.md#destroy)

***

### dispatch()

```ts
dispatch<U, V>(actor: {
(__namedParameters: {
  multiInstance?: boolean;
  name?: string;
}): Actor<V>;
  hub: ActorHub<any>;
  prototype: Actor<any>;
}, message: U): void;
```

Defined in: [src/actor.ts:180](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L180)

Dispatches a message to the specified actor.
Utility method to dispatch a message to the actor, which is the subsequent actor of the current actor.
Just for hiding the hub from the derived class.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `U` | The type of the message. |
| `V` | The type of the actor. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `actor` | \{ (`__namedParameters`: \{ `multiInstance?`: `boolean`; `name?`: `string`; \}): [`Actor`](../Actor/README.md)\<`V`\>; `hub`: `ActorHub`\<`any`\>; `prototype`: [`Actor`](../Actor/README.md)\<`any`\>; \} | The actor to dispatch the message to. |
| `actor.hub` | `ActorHub`\<`any`\> | Represents the hub for actors. |
| `actor.prototype` | [`Actor`](../Actor/README.md)\<`any`\> | - |
| `message` | `U` | The message to be dispatched. |

#### Returns

`void`

#### Inherited from

[`Actor`](../Actor/README.md).[`dispatch`](../Actor/README.md#dispatch)

***

### post()

```ts
post(message: ActorLogMessage): void;
```

Defined in: [src/actor.ts:158](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L158)

Dispatches a message to the actor.
Note: Even if we posted messages to the specific actor, the message will be processed by some actor instances if the actor is a multi-instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ActorLogMessage`](../ActorLogMessage/README.md) | The message to be dispatched. |

#### Returns

`void`

#### Inherited from

[`Actor`](../Actor/README.md).[`post`](../Actor/README.md#post)

***

### postToThisInstance()

```ts
postToThisInstance(message: ActorLogMessage): void;
```

Defined in: [src/actor.ts:167](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L167)

Posts a message to this actor instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ActorLogMessage`](../ActorLogMessage/README.md) | The message to be posted. |

#### Returns

`void`

#### Inherited from

[`Actor`](../Actor/README.md).[`postToThisInstance`](../Actor/README.md#posttothisinstance)

***

### process()

```ts
abstract process(message: ActorLogMessage): void | Promise<void>;
```

Defined in: [src/actor.ts:151](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L151)

Processes a message. This method should be overridden in the derived class. Automatically called when a message is dispatched to the actor.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ActorLogMessage`](../ActorLogMessage/README.md) | The message to be processed. |

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`Actor`](../Actor/README.md).[`process`](../Actor/README.md#process)
