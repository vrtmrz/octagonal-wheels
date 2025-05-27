[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [conduit](../README.md) / ConnectorInstanceOf

# Interface: ConnectorInstanceOf\<T\>

Defined in: [src/conduit/connector.ts:71](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L71)

ConnectorInstanceOf

## Description

Connect and get an instance via connector.
It is used to connect an instance to a name, and then retrieve that instance later.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | the type of the instance |

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="isconnected"></a> `isConnected` | `readonly` | `boolean` | [src/conduit/connector.ts:99](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L99) |

## Methods

### connect()

```ts
connect(obj: T, teardown?: () => void): void;
```

Defined in: [src/conduit/connector.ts:78](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L78)

Connect an instance to the connector

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The instance to connect |
| `teardown?` | () => `void` | Optional callback to be called when the instance is disconnected |

#### Returns

`void`

#### Description

***

### connected()

```ts
connected(): Promise<T>;
```

Defined in: [src/conduit/connector.ts:84](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L84)

Get the connected instance

#### Returns

`Promise`\<`T`\>

a promise that resolves to the connected instance

#### Description

***

### connectedSync()

```ts
connectedSync(): T;
```

Defined in: [src/conduit/connector.ts:91](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L91)

Get the connected instance synchronously

#### Returns

`T`

the connected instance

#### Description

#### Throws

Error if no instance is connected yet

***

### disconnect()

```ts
disconnect(): void;
```

Defined in: [src/conduit/connector.ts:98](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L98)

Disconnect the connected instance

#### Returns

`void`

void

#### Description

This will remove the instance from the connector and clear the connection.
