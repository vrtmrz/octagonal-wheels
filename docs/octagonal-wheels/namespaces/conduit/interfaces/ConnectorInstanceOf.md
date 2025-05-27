[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [conduit](../README.md) / ConnectorInstanceOf

# Interface: ConnectorInstanceOf\<T\>

Defined in: [src/conduit/connector.ts:69](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L69)

ConnectorInstanceOf

## Description

Connect and get an instance via connector.
It is used to connect an instance to a name, and then retrieve that instance later.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | the type of the instance |

## Methods

### connect()

```ts
connect(obj: T, teardown?: () => void): void;
```

Defined in: [src/conduit/connector.ts:76](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L76)

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

Defined in: [src/conduit/connector.ts:82](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L82)

Get the connected instance

#### Returns

`Promise`\<`T`\>

a promise that resolves to the connected instance

#### Description

***

### disconnect()

```ts
disconnect(): void;
```

Defined in: [src/conduit/connector.ts:89](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L89)

Disconnect the connected instance

#### Returns

`void`

void

#### Description

This will remove the instance from the connector and clear the connection.
