[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [actor](../README.md) / Actor

# Class: `abstract` Actor\<T\>

Defined in: [src/actor.ts:90](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L90)

Represents an abstract class for an actor.

## Extended by

- [`LogActorBase`](LogActorBase.md)

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the message that the actor can process. |

## Constructors

### Constructor

```ts
new Actor<T>(__namedParameters: {
  multiInstance?: boolean;
  name?: string;
}): Actor<T>;
```

Defined in: [src/actor.ts:110](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L110)

Initializes a new instance of the Actor class.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `multiInstance?`: `boolean`; `name?`: `string`; \} |
| `__namedParameters.multiInstance?` | `boolean` |
| `__namedParameters.name?` | `string` |

#### Returns

`Actor`\<`T`\>

## Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="__process"></a> `__process` | `public` | `undefined` \| `Promise`\<`void`\> | `undefined` | - | [src/actor.ts:133](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L133) |
| <a id="_busy"></a> `_busy` | `public` | `boolean` | `false` | - | [src/actor.ts:118](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L118) |
| <a id="multiinstance"></a> `multiInstance` | `readonly` | `boolean` | `undefined` | Indicates whether the actor is a multi-instance. | [src/actor.ts:98](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L98) |
| <a id="name"></a> `name` | `readonly` | `string` | `undefined` | The name of the actor. | [src/actor.ts:94](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L94) |
| <a id="hub"></a> `hub` | `static` | `ActorHub`\<`any`\> | `undefined` | Represents the hub for actors. | [src/actor.ts:103](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L103) |

## Methods

### \_enqueue()

```ts
_enqueue(message: T): void;
```

Defined in: [src/actor.ts:136](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L136)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `T` |

#### Returns

`void`

***

### \_process()

```ts
_process(message: T): Promise<void>;
```

Defined in: [src/actor.ts:119](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L119)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `T` |

#### Returns

`Promise`\<`void`\>

***

### destroy()

```ts
destroy(): void;
```

Defined in: [src/actor.ts:187](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L187)

Destroys the actor instance.

#### Returns

`void`

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
| `actor` | \{ (`__namedParameters`: \{ `multiInstance?`: `boolean`; `name?`: `string`; \}): `Actor`\<`V`\>; `hub`: `ActorHub`\<`any`\>; `prototype`: `Actor`\<`any`\>; \} | The actor to dispatch the message to. |
| `actor.hub` | `ActorHub`\<`any`\> | Represents the hub for actors. |
| `actor.prototype` | `Actor`\<`any`\> | - |
| `message` | `U` | The message to be dispatched. |

#### Returns

`void`

***

### post()

```ts
post(message: T): void;
```

Defined in: [src/actor.ts:156](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L156)

Dispatches a message to the actor.
Note: Even if we posted messages to the specific actor, the message will be processed by some actor instances if the actor is a multi-instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `T` | The message to be dispatched. |

#### Returns

`void`

***

### postToThisInstance()

```ts
postToThisInstance(message: T): void;
```

Defined in: [src/actor.ts:166](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L166)

Posts a message to this actor instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `T` | The message to be posted. |

#### Returns

`void`

***

### process()

```ts
abstract process(message: T): void | Promise<void>;
```

Defined in: [src/actor.ts:149](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/actor.ts#L149)

Processes a message. This method should be overridden in the derived class. Automatically called when a message is dispatched to the actor.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `T` | The message to be processed. |

#### Returns

`void` \| `Promise`\<`void`\>
