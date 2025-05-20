[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [bureau](../../../README.md) / [clerk](../README.md) / ClerkGroup

# Class: ClerkGroup\<T, U\>

Defined in: [src/bureau/Clerk.ts:178](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L178)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` *extends* [`ClerkBase`](ClerkBase.md)\<`T`\> |

## Constructors

### Constructor

```ts
new ClerkGroup<T, U>(params: ClerkGroupOption<T, U>): ClerkGroup<T, U>;
```

Defined in: [src/bureau/Clerk.ts:187](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L187)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ClerkGroupOption`](../type-aliases/ClerkGroupOption.md)\<`T`, `U`\> |

#### Returns

`ClerkGroup`\<`T`, `U`\>

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_assigned"></a> `_assigned` | [`Inbox`](../../inbox/classes/Inbox.md)\<`T`\> | `undefined` | [src/bureau/Clerk.ts:181](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L181) |
| <a id="_clerks"></a> `_clerks` | `U`[] | `undefined` | [src/bureau/Clerk.ts:179](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L179) |
| <a id="_hiredcount"></a> `_hiredCount` | `number` | `0` | [src/bureau/Clerk.ts:182](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L182) |
| <a id="_instantiate"></a> `_instantiate` | (`params`: [`ClerkOption`](../type-aliases/ClerkOption.md)\<`T`\>) => `U` | `undefined` | [src/bureau/Clerk.ts:184](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L184) |
| <a id="_job"></a> `_job` | (`item`: `T`) => `Promise`\<`any`\> | `undefined` | [src/bureau/Clerk.ts:183](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L183) |
| <a id="_namebase"></a> `_nameBase` | `string` | `undefined` | [src/bureau/Clerk.ts:180](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L180) |

## Accessors

### freeMembers

#### Get Signature

```ts
get freeMembers(): number;
```

Defined in: [src/bureau/Clerk.ts:241](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L241)

##### Returns

`number`

***

### stateDetail

#### Get Signature

```ts
get stateDetail(): ClerkStateDetail;
```

Defined in: [src/bureau/Clerk.ts:224](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L224)

##### Returns

`ClerkStateDetail`

## Methods

### adjustMemberCount()

```ts
adjustMemberCount(count: number): void;
```

Defined in: [src/bureau/Clerk.ts:212](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L212)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `count` | `number` |

#### Returns

`void`

***

### dispose()

```ts
dispose(): void;
```

Defined in: [src/bureau/Clerk.ts:246](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L246)

#### Returns

`void`

***

### fireMember()

```ts
fireMember(): void;
```

Defined in: [src/bureau/Clerk.ts:208](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L208)

#### Returns

`void`

***

### hireMember()

```ts
hireMember(params: ClerkOption<T>): void;
```

Defined in: [src/bureau/Clerk.ts:199](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/Clerk.ts#L199)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ClerkOption`](../type-aliases/ClerkOption.md)\<`T`\> |

#### Returns

`void`
