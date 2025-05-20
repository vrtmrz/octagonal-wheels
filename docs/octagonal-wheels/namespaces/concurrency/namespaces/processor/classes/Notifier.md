[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [processor](../README.md) / Notifier

# Class: ~~Notifier~~

Defined in: [src/concurrency/processor\_v2.ts:13](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L13)

## Deprecated

Use EventHub and waitFor instead.

## Constructors

### Constructor

```ts
new Notifier(): Notifier;
```

#### Returns

`Notifier`

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_p"></a> ~~`_p`~~ | [`PromiseWithResolvers`](../../../../promises/type-aliases/PromiseWithResolvers.md)\<`void`\> | `undefined` | [src/concurrency/processor\_v2.ts:15](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L15) |
| <a id="isused"></a> ~~`isUsed`~~ | `boolean` | `false` | [src/concurrency/processor\_v2.ts:16](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L16) |

## Accessors

### ~~nextNotify~~

#### Get Signature

```ts
get nextNotify(): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:26](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L26)

##### Returns

`Promise`\<`void`\>

## Methods

### ~~notify()~~

```ts
notify(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:17](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L17)

#### Returns

`void`
