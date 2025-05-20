[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [conduit](../README.md) / ConnectorInstanceOf

# Interface: ConnectorInstanceOf\<T\>

Defined in: [src/conduit/connector.ts:68](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L68)

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
connect(obj: T): void;
```

Defined in: [src/conduit/connector.ts:74](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L74)

Connect an instance to the connector

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The instance to connect |

#### Returns

`void`

#### Description

***

### connected()

```ts
connected(): Promise<T>;
```

Defined in: [src/conduit/connector.ts:80](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L80)

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

Defined in: [src/conduit/connector.ts:87](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L87)

Disconnect the connected instance

#### Returns

`void`

void

#### Description

This will remove the instance from the connector and clear the connection.
