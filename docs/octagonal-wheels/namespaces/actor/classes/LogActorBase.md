[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [actor](../README.md) / LogActorBase

# Class: `abstract` LogActorBase

Defined in: [src/actor.ts:198](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L198)

Represents an abstract class for an actor.

## Extends

- [`Actor`](Actor.md)\<[`ActorLogMessage`](../type-aliases/ActorLogMessage.md)\>

## Constructors

### Constructor

```ts
new LogActorBase(): LogActorBase;
```

Defined in: [src/actor.ts:199](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L199)

#### Returns

`LogActorBase`

#### Overrides

[`Actor`](Actor.md).[`constructor`](Actor.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="__process"></a> `__process` | `public` | `undefined` \| `Promise`\<`void`\> | `undefined` | - | [`Actor`](Actor.md).[`__process`](Actor.md#__process) | [src/actor.ts:133](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L133) |
| <a id="_busy"></a> `_busy` | `public` | `boolean` | `false` | - | [`Actor`](Actor.md).[`_busy`](Actor.md#_busy) | [src/actor.ts:118](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L118) |
| <a id="multiinstance"></a> `multiInstance` | `readonly` | `boolean` | `undefined` | Indicates whether the actor is a multi-instance. | [`Actor`](Actor.md).[`multiInstance`](Actor.md#multiinstance) | [src/actor.ts:98](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L98) |
| <a id="name"></a> `name` | `readonly` | `string` | `undefined` | The name of the actor. | [`Actor`](Actor.md).[`name`](Actor.md#name) | [src/actor.ts:94](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L94) |
| <a id="hub"></a> `hub` | `static` | `ActorHub`\<`any`\> | `undefined` | Represents the hub for actors. | [`Actor`](Actor.md).[`hub`](Actor.md#hub) | [src/actor.ts:103](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L103) |

## Methods

### \_enqueue()

```ts
_enqueue(message: ActorLogMessage): void;
```

Defined in: [src/actor.ts:136](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L136)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`ActorLogMessage`](../type-aliases/ActorLogMessage.md) |

#### Returns

`void`

#### Inherited from

[`Actor`](Actor.md).[`_enqueue`](Actor.md#_enqueue)

***

### \_process()

```ts
_process(message: ActorLogMessage): Promise<void>;
```

Defined in: [src/actor.ts:119](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L119)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`ActorLogMessage`](../type-aliases/ActorLogMessage.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Actor`](Actor.md).[`_process`](Actor.md#_process)

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

[`Actor`](Actor.md).[`destroy`](Actor.md#destroy)

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

Defined in: [src/actor.ts:179](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L179)

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
| `actor` | \{ (`__namedParameters`: \{ `multiInstance?`: `boolean`; `name?`: `string`; \}): [`Actor`](Actor.md)\<`V`\>; `hub`: `ActorHub`\<`any`\>; `prototype`: [`Actor`](Actor.md)\<`any`\>; \} | The actor to dispatch the message to. |
| `actor.hub` | `ActorHub`\<`any`\> | Represents the hub for actors. |
| `actor.prototype` | [`Actor`](Actor.md)\<`any`\> | - |
| `message` | `U` | The message to be dispatched. |

#### Returns

`void`

#### Inherited from

[`Actor`](Actor.md).[`dispatch`](Actor.md#dispatch)

***

### post()

```ts
post(message: ActorLogMessage): void;
```

Defined in: [src/actor.ts:156](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L156)

Dispatches a message to the actor.
Note: Even if we posted messages to the specific actor, the message will be processed by some actor instances if the actor is a multi-instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ActorLogMessage`](../type-aliases/ActorLogMessage.md) | The message to be dispatched. |

#### Returns

`void`

#### Inherited from

[`Actor`](Actor.md).[`post`](Actor.md#post)

***

### postToThisInstance()

```ts
postToThisInstance(message: ActorLogMessage): void;
```

Defined in: [src/actor.ts:166](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L166)

Posts a message to this actor instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ActorLogMessage`](../type-aliases/ActorLogMessage.md) | The message to be posted. |

#### Returns

`void`

#### Inherited from

[`Actor`](Actor.md).[`postToThisInstance`](Actor.md#posttothisinstance)

***

### process()

```ts
abstract process(message: ActorLogMessage): void | Promise<void>;
```

Defined in: [src/actor.ts:149](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L149)

Processes a message. This method should be overridden in the derived class. Automatically called when a message is dispatched to the actor.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ActorLogMessage`](../type-aliases/ActorLogMessage.md) | The message to be processed. |

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`Actor`](Actor.md).[`process`](Actor.md#process)
