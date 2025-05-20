[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [conduit](../README.md) / Connector

# Variable: Connector

```ts
const Connector: {
  funcOf: ConnectorFuncOf<T, U>;
  instanceOf: ConnectorInstanceOf<T>;
};
```

Defined in: [src/conduit/connector.ts:159](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/connector.ts#L159)

Connector

## Type declaration

### funcOf()

```ts
funcOf<T, U>(name: string): ConnectorFuncOf<T, U>;
```

Get a function connector

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |
| `U` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` |  |

#### Returns

[`ConnectorFuncOf`](../interfaces/ConnectorFuncOf.md)\<`T`, `U`\>

<ConnectorFuncOf<T, U>>

#### Description

This method returns a function connector that allows you to connect a function to a name and then invoke that function later.

### instanceOf()

```ts
instanceOf<T>(name: string): ConnectorInstanceOf<T>;
```

Connect a instance to the name

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` |  |

#### Returns

[`ConnectorInstanceOf`](../interfaces/ConnectorInstanceOf.md)\<`T`\>

#### Description

This method returns a instance connector that allows you to connect a instance to a name and then retrieve that instance later.

## Description

Connector is a utility class that allows you to connect functions and instances.
It provides a way to connect a function or an instance to a name, and then invoke that function or instance later.
