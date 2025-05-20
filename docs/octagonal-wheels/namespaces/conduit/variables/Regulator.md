[**octagonal-wheels**](../../../../README.md)

***

[octagonal-wheels](../../../../globals.md) / [conduit](../README.md) / Regulator

# Variable: Regulator

```ts
const Regulator: {
  of: <T, U>(name: string) => RegulatorOf<T, U>;
};
```

Defined in: [src/conduit/regulator.ts:148](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/conduit/regulator.ts#L148)

## Type declaration

### of()

```ts
of: <T, U>(name: string) => RegulatorOf<T, U>;
```

Get a regulator

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

[`RegulatorOf`](../interfaces/RegulatorOf.md)\<`T`, `U`\>

<RegulatorOf<T, U>>

## Description

Get a regulator that allows you to regulate the number of concurrent processes.

## Param

## Returns

<RegulatorOf<T, U>>
