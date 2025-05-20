[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [conduit](../README.md) / ConnectorFuncOf

# Interface: ConnectorFuncOf\<T, U\>

Defined in: [src/conduit/connector.ts:31](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L31)

ConnectorFuncOf

## Description

Connect and invoke a function via connector.
It is used to connect a function to a name, and then invoke that function later.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `any`[] | the type of the arguments |
| `U` | the type of the return value |

## Methods

### connect()

```ts
connect(func: ConnectorFunc<T, U>): void;
```

Defined in: [src/conduit/connector.ts:37](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L37)

Connect a function to the connector

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `func` | [`ConnectorFunc`](../type-aliases/ConnectorFunc.md)\<`T`, `U`\> | The function to connect |

#### Returns

`void`

#### Description

***

### disconnect()

```ts
disconnect(): void;
```

Defined in: [src/conduit/connector.ts:58](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L58)

Disconnect the connected function

#### Returns

`void`

void

#### Description

This will remove the function from the connector and clear the connection.

***

### invoke()

```ts
invoke(...args: T): Promise<Awaited<U>>;
```

Defined in: [src/conduit/connector.ts:44](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L44)

Invoke the connected function

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `T` | The arguments to pass to the function |

#### Returns

`Promise`\<`Awaited`\<`U`\>\>

result of the function

#### Description

If no function is connected yet, this will wait for the function to be connected and then invoke it.

***

### invokeSync()

```ts
invokeSync(...args: T): U;
```

Defined in: [src/conduit/connector.ts:51](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L51)

Invoke the connected function synchronously

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `T` | The arguments to pass to the function |

#### Returns

`U`

result of the function

#### Description

If no function is connected yet, this will throw an error.
