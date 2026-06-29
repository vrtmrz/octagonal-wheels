[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [messagepassing](../../README.md) / [signal](../README.md) / createSignalHub

# Function: createSignalHub()

```ts
function createSignalHub(board: SlipBoard): {
  board: SlipBoard<LSSlips>;
  sendSignal: void;
  sendValue: void;
  waitForSignal: Promise<boolean>;
  waitForValue: Promise<WithTimeout<T>>;
};
```

Defined in: [src/bureau/SlipBoard.ts:247](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/SlipBoard.ts#L247)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `board` | [`SlipBoard`](../SlipBoard/README.md) |

## Returns

```ts
{
  board: SlipBoard<LSSlips>;
  sendSignal: void;
  sendValue: void;
  waitForSignal: Promise<boolean>;
  waitForValue: Promise<WithTimeout<T>>;
}
```

### board

```ts
board: SlipBoard<LSSlips>;
```

### sendSignal()

```ts
sendSignal(id: string): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`void`

### sendValue()

```ts
sendValue<T>(id: string, result: T): void;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `result` | `T` |

#### Returns

`void`

### waitForSignal()

```ts
waitForSignal(id: string, timeout?: number): Promise<boolean>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>

### waitForValue()

```ts
waitForValue<T>(id: string, timeout?: number): Promise<WithTimeout<T>>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `timeout?` | `number` |

#### Returns

`Promise`\<[`WithTimeout`](../WithTimeout/README.md)\<`T`\>\>
