[**octagonal-wheels**](../../../../../../README.md)

***

[octagonal-wheels](../../../../../../globals.md) / [concurrency](../../../README.md) / [processor](../README.md) / QueueProcessor

# Class: QueueProcessor\<T, U\>

Defined in: [src/concurrency/processor\_v2.ts:96](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L96)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Constructors

### Constructor

```ts
new QueueProcessor<T, U>(
   processor: Processor<T, U>, 
   params?: ProcessorParams<U>, 
   items?: T[], 
enqueueProcessor?: (queue: T[], newEntity: T) => T[]): QueueProcessor<T, U>;
```

Defined in: [src/concurrency/processor\_v2.ts:274](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L274)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | `Processor`\<`T`, `U`\> |
| `params?` | `ProcessorParams`\<`U`\> |
| `items?` | `T`[] |
| `enqueueProcessor?` | (`queue`: `T`[], `newEntity`: `T`) => `T`[] |

#### Returns

`QueueProcessor`\<`T`, `U`\>

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_clerks"></a> `_clerks` | [`ClerkGroup`](../../../../bureau/namespaces/clerk/classes/ClerkGroup.md)\<`T`[], [`Clerk`](../../../../bureau/namespaces/clerk/classes/Clerk.md)\<`T`[]\>\> | `undefined` | [src/concurrency/processor\_v2.ts:514](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L514) |
| <a id="_collected"></a> `_collected` | [`Inbox`](../../../../bureau/namespaces/inbox/classes/Inbox.md)\<`T`[]\> | `undefined` | [src/concurrency/processor\_v2.ts:513](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L513) |
| <a id="_delaytimer"></a> `_delayTimer?` | `Timeout` | `undefined` | [src/concurrency/processor\_v2.ts:270](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L270) |
| <a id="_enqueueprocessor"></a> `_enqueueProcessor` | (`queue`: `T`[], `newEntity`: `T`) => `T`[] | `undefined` | [src/concurrency/processor\_v2.ts:99](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L99) |
| <a id="_hub"></a> `_hub` | [`EventHub`](../../../../events/classes/EventHub.md)\<`ProcessorEvents`\> | `undefined` | [src/concurrency/processor\_v2.ts:138](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L138) |
| <a id="_intervalpacemaker"></a> `_intervalPaceMaker` | [`PaceMaker`](../../../../bureau/namespaces/pacemaker/classes/PaceMaker.md) | `undefined` | [src/concurrency/processor\_v2.ts:272](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L272) |
| <a id="_issuspended"></a> `_isSuspended` | `boolean` | `true` | [src/concurrency/processor\_v2.ts:100](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L100) |
| <a id="_keepresultuntildownstreamconnected"></a> `_keepResultUntilDownstreamConnected` | `boolean` | `false` | [src/concurrency/processor\_v2.ts:109](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L109) |
| <a id="_keptresult"></a> `_keptResult` | `U`[] | `undefined` | [src/concurrency/processor\_v2.ts:110](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L110) |
| <a id="_nextprocessneedsimmediate"></a> `_nextProcessNeedsImmediate` | `boolean` | `false` | [src/concurrency/processor\_v2.ts:101](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L101) |
| <a id="_pipeto"></a> `_pipeTo?` | `QueueProcessor`\<`U`, `any`\> | `undefined` | [src/concurrency/processor\_v2.ts:103](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L103) |
| <a id="_processcount"></a> `_processCount` | `number` | `0` | [src/concurrency/processor\_v2.ts:515](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L515) |
| <a id="_processing"></a> `_processing` | `boolean` | `false` | [src/concurrency/processor\_v2.ts:511](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L511) |
| <a id="_processingbatches"></a> `_processingBatches` | `Set`\<`number`\> | `undefined` | [src/concurrency/processor\_v2.ts:500](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L500) |
| <a id="_processingentitiesreactivesource"></a> `_processingEntitiesReactiveSource?` | [`ReactiveSource`](../../../../dataobject/namespaces/reactive/type-aliases/ReactiveSource.md)\<`number`\> | `undefined` | [src/concurrency/processor\_v2.ts:108](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L108) |
| <a id="_processor"></a> `_processor` | `Processor`\<`T`, `U`\> | `undefined` | [src/concurrency/processor\_v2.ts:98](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L98) |
| <a id="_queue"></a> `_queue` | `T`[] | `[]` | [src/concurrency/processor\_v2.ts:97](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L97) |
| <a id="_remainingreactivesource"></a> `_remainingReactiveSource?` | [`ReactiveSource`](../../../../dataobject/namespaces/reactive/type-aliases/ReactiveSource.md)\<`number`\> | `undefined` | [src/concurrency/processor\_v2.ts:106](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L106) |
| <a id="_root"></a> `_root?` | `QueueProcessor`\<`any`, `any`\> | `undefined` | [src/concurrency/processor\_v2.ts:105](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L105) |
| <a id="_runonupdatebatch"></a> `_runOnUpdateBatch` | () => `void` | `undefined` | [src/concurrency/processor\_v2.ts:112](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L112) |
| <a id="_totalremainingreactivesource"></a> `_totalRemainingReactiveSource?` | [`ReactiveSource`](../../../../dataobject/namespaces/reactive/type-aliases/ReactiveSource.md)\<`number`\> | `undefined` | [src/concurrency/processor\_v2.ts:107](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L107) |
| <a id="addprocessingbatch"></a> `addProcessingBatch` | (`value`: `number`) => `this` | `undefined` | [src/concurrency/processor\_v2.ts:501](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L501) |
| <a id="batchsize"></a> `batchSize` | `number` | `1` | [src/concurrency/processor\_v2.ts:120](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L120) |
| <a id="concurrentlimit"></a> `concurrentLimit` | `number` | `1` | [src/concurrency/processor\_v2.ts:117](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L117) |
| <a id="delay"></a> `delay` | `number` | `0` | [src/concurrency/processor\_v2.ts:127](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L127) |
| <a id="deleteprocessingbatch"></a> `deleteProcessingBatch` | (`value`: `number`) => `boolean` | `undefined` | [src/concurrency/processor\_v2.ts:506](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L506) |
| <a id="interval"></a> `interval` | `number` | `0` | [src/concurrency/processor\_v2.ts:129](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L129) |
| <a id="maintaindelay"></a> `maintainDelay` | `boolean` | `undefined` | [src/concurrency/processor\_v2.ts:128](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L128) |
| <a id="processingentities"></a> `processingEntities` | `number` | `0` | [src/concurrency/processor\_v2.ts:132](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L132) |
| <a id="waitingentries"></a> `waitingEntries` | `number` | `0` | [src/concurrency/processor\_v2.ts:135](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L135) |
| <a id="yieldthreshold"></a> `yieldThreshold` | `number` | `1` | [src/concurrency/processor\_v2.ts:123](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L123) |

## Accessors

### isSuspended

#### Get Signature

```ts
get isSuspended(): boolean;
```

Defined in: [src/concurrency/processor\_v2.ts:383](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L383)

##### Returns

`boolean`

***

### nowProcessing

#### Get Signature

```ts
get nowProcessing(): number;
```

Defined in: [src/concurrency/processor\_v2.ts:141](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L141)

##### Returns

`number`

***

### remaining

#### Get Signature

```ts
get remaining(): number;
```

Defined in: [src/concurrency/processor\_v2.ts:148](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L148)

##### Returns

`number`

***

### root

#### Get Signature

```ts
get root(): QueueProcessor<any, any>;
```

Defined in: [src/concurrency/processor\_v2.ts:181](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L181)

##### Returns

`QueueProcessor`\<`any`, `any`\>

***

### totalNowProcessing

#### Get Signature

```ts
get totalNowProcessing(): number;
```

Defined in: [src/concurrency/processor\_v2.ts:144](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L144)

##### Returns

`number`

***

### totalRemaining

#### Get Signature

```ts
get totalRemaining(): number;
```

Defined in: [src/concurrency/processor\_v2.ts:151](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L151)

##### Returns

`number`

## Methods

### \_\_notifyIfIdle()

```ts
__notifyIfIdle(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:231](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L231)

#### Returns

`void`

***

### \_canCollectBatch()

```ts
_canCollectBatch(): boolean;
```

Defined in: [src/concurrency/processor\_v2.ts:407](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L407)

#### Returns

`boolean`

***

### \_clearTickDelay()

```ts
_clearTickDelay(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:222](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L222)

#### Returns

`void`

***

### \_collectBatch()

```ts
_collectBatch(): T[];
```

Defined in: [src/concurrency/processor\_v2.ts:404](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L404)

#### Returns

`T`[]

***

### \_initClerks()

```ts
_initClerks(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:516](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L516)

#### Returns

`void`

***

### \_initEventHub()

```ts
_initEventHub(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:189](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L189)

#### Returns

`void`

***

### \_isIdle()

```ts
_isIdle(): boolean;
```

Defined in: [src/concurrency/processor\_v2.ts:359](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L359)

#### Returns

`boolean`

***

### \_notifyIfIdle()

```ts
_notifyIfIdle(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:228](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L228)

#### Returns

`void`

***

### \_onTick()

```ts
_onTick(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:240](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L240)

#### Returns

`void`

***

### \_process()

```ts
_process(): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:553](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L553)

#### Returns

`Promise`\<`void`\>

***

### \_run()

```ts
_run(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:580](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L580)

#### Returns

`void`

***

### \_runProcessor()

```ts
_runProcessor(items: T[]): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:472](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L472)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `T`[] |

#### Returns

`Promise`\<`void`\>

***

### \_triggerTickDelay()

```ts
_triggerTickDelay(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:212](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L212)

#### Returns

`void`

***

### \_updateBatchProcessStatus()

```ts
_updateBatchProcessStatus(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:399](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L399)

#### Returns

`void`

***

### \_updateReactiveSource()

```ts
_updateReactiveSource(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:387](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L387)

#### Returns

`void`

***

### \_waitFor()

```ts
_waitFor<T>(keys: T, timeout?: number): Promise<
  | typeof TIMED_OUT_SIGNAL
| T[number]>;
```

Defined in: [src/concurrency/processor\_v2.ts:194](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L194)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof `ProcessorEvents`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keys` | `T` |
| `timeout?` | `number` |

#### Returns

`Promise`\<
  \| *typeof* [`TIMED_OUT_SIGNAL`](../../../../promises/variables/TIMED_OUT_SIGNAL.md)
  \| `T`\[`number`\]\>

***

### \_waitForIdle()

```ts
_waitForIdle(): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:362](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L362)

#### Returns

`Promise`\<`void`\>

***

### \_waitForSuspended()

```ts
_waitForSuspended(): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:436](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L436)

#### Returns

`Promise`\<`void`\>

***

### clearQueue()

```ts
clearQueue(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:324](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L324)

Clear the queue

#### Returns

`void`

#### Remarks

I know that you have known this is very dangerous.

***

### enqueue()

```ts
enqueue(entity: T): this;
```

Defined in: [src/concurrency/processor\_v2.ts:412](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L412)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `T` |

#### Returns

`this`

***

### enqueueAll()

```ts
enqueueAll(entities: T[]): this;
```

Defined in: [src/concurrency/processor\_v2.ts:418](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L418)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entities` | `T`[] |

#### Returns

`this`

***

### flush()

```ts
flush(): Promise<boolean>;
```

Defined in: [src/concurrency/processor\_v2.ts:440](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L440)

#### Returns

`Promise`\<`boolean`\>

***

### idleDetectors()

```ts
idleDetectors(): Promise<void>[];
```

Defined in: [src/concurrency/processor\_v2.ts:375](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L375)

#### Returns

`Promise`\<`void`\>[]

***

### isIdle()

```ts
isIdle(): boolean;
```

Defined in: [src/concurrency/processor\_v2.ts:356](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L356)

#### Returns

`boolean`

***

### modifyQueue()

```ts
modifyQueue(processor: (queue: T[]) => T[]): void;
```

Defined in: [src/concurrency/processor\_v2.ts:315](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L315)

Modify the queue by force.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `processor` | (`queue`: `T`[]) => `T`[] |  |

#### Returns

`void`

#### Remarks

I know that you have known this is very dangerous.

***

### onUpdateProgress()

```ts
onUpdateProgress(proc: () => void): this;
```

Defined in: [src/concurrency/processor\_v2.ts:334](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L334)

Set the handler for when the queue has been modified

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `proc` | () => `void` |  |

#### Returns

`this`

***

### pipeTo()

```ts
pipeTo<V>(pipeTo: QueueProcessor<U, V>): QueueProcessor<U, V>;
```

Defined in: [src/concurrency/processor\_v2.ts:344](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L344)

Join another processor

#### Type Parameters

| Type Parameter |
| ------ |
| `V` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pipeTo` | `QueueProcessor`\<`U`, `V`\> |  |

#### Returns

`QueueProcessor`\<`U`, `V`\>

***

### pump()

```ts
pump(): AsyncGenerator<T[], void, unknown>;
```

Defined in: [src/concurrency/processor\_v2.ts:484](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L484)

#### Returns

`AsyncGenerator`\<`T`[], `void`, `unknown`\>

***

### replaceEnqueueProcessor()

```ts
replaceEnqueueProcessor(processor: (queue: T[], newItem: T) => T[]): this;
```

Defined in: [src/concurrency/processor\_v2.ts:305](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L305)

replace enqueue logic.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `processor` | (`queue`: `T`[], `newItem`: `T`) => `T`[] | enqueue logic. this should return new queue. |

#### Returns

`this`

***

### requestNextFlush()

```ts
requestNextFlush(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:429](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L429)

#### Returns

`void`

***

### resume()

```ts
resume(): this;
```

Defined in: [src/concurrency/processor\_v2.ts:166](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L166)

#### Returns

`this`

***

### resumePipeLine()

```ts
resumePipeLine(): this;
```

Defined in: [src/concurrency/processor\_v2.ts:171](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L171)

#### Returns

`this`

***

### startPipeline()

```ts
startPipeline(): this;
```

Defined in: [src/concurrency/processor\_v2.ts:176](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L176)

#### Returns

`this`

***

### suspend()

```ts
suspend(): QueueProcessor<T, U>;
```

Defined in: [src/concurrency/processor\_v2.ts:160](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L160)

#### Returns

`QueueProcessor`\<`T`, `U`\>

***

### terminate()

```ts
terminate(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:588](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L588)

#### Returns

`void`

***

### terminateAll()

```ts
terminateAll(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:585](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L585)

#### Returns

`void`

***

### updateReactiveSource()

```ts
updateReactiveSource(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:390](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L390)

#### Returns

`void`

***

### updateStatus()

```ts
updateStatus(setFunc: () => void): void;
```

Defined in: [src/concurrency/processor\_v2.ts:154](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L154)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `setFunc` | () => `void` |

#### Returns

`void`

***

### waitForAllDoneAndTerminate()

```ts
waitForAllDoneAndTerminate(timeout?: number): Promise<boolean>;
```

Defined in: [src/concurrency/processor\_v2.ts:465](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L465)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>

***

### waitForAllDownstream()

```ts
waitForAllDownstream(timeout?: number): Promise<boolean>;
```

Defined in: [src/concurrency/processor\_v2.ts:446](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L446)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>

***

### waitForAllProcessed()

```ts
waitForAllProcessed(timeout?: number): Promise<boolean>;
```

Defined in: [src/concurrency/processor\_v2.ts:461](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L461)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>
