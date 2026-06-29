[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [concurrency](../../README.md) / [processor](../README.md) / QueueProcessor

# ~~Class: QueueProcessor\<T, U\>~~

Defined in: [src/concurrency/processor\_v2.ts:118](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L118)

## Deprecated

Use QueueProcessorShim for low-friction migration, or PipelineSource and ProcessorStage for new code.

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

Defined in: [src/concurrency/processor\_v2.ts:293](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L293)

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
| <a id="_clerks"></a> ~~`_clerks`~~ | [`ClerkGroup`](../../../bureau/clerk/ClerkGroup/README.md)\<`T`[], [`Clerk`](../../../bureau/clerk/Clerk/README.md)\<`T`[]\>\> | `undefined` | [src/concurrency/processor\_v2.ts:540](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L540) |
| <a id="_collected"></a> ~~`_collected`~~ | [`Inbox`](../../../bureau/inbox/Inbox/README.md)\<`T`[]\> | `undefined` | [src/concurrency/processor\_v2.ts:539](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L539) |
| <a id="_delaytimer"></a> ~~`_delayTimer?`~~ | `Timeout` | `undefined` | [src/concurrency/processor\_v2.ts:289](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L289) |
| <a id="_enqueueprocessor"></a> ~~`_enqueueProcessor`~~ | (`queue`: `T`[], `newEntity`: `T`) => `T`[] | `undefined` | [src/concurrency/processor\_v2.ts:121](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L121) |
| <a id="_hub"></a> ~~`_hub`~~ | [`EventHub`](../../../events/EventHub/README.md)\<`ProcessorEvents`\> | `undefined` | [src/concurrency/processor\_v2.ts:160](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L160) |
| <a id="_intervalpacemaker"></a> ~~`_intervalPaceMaker`~~ | [`PaceMaker`](../../../bureau/pacemaker/PaceMaker/README.md) | `undefined` | [src/concurrency/processor\_v2.ts:291](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L291) |
| <a id="_issuspended"></a> ~~`_isSuspended`~~ | `boolean` | `true` | [src/concurrency/processor\_v2.ts:122](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L122) |
| <a id="_keepresultuntildownstreamconnected"></a> ~~`_keepResultUntilDownstreamConnected`~~ | `boolean` | `false` | [src/concurrency/processor\_v2.ts:131](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L131) |
| <a id="_keptresult"></a> ~~`_keptResult`~~ | `U`[] | `undefined` | [src/concurrency/processor\_v2.ts:132](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L132) |
| <a id="_nextprocessneedsimmediate"></a> ~~`_nextProcessNeedsImmediate`~~ | `boolean` | `false` | [src/concurrency/processor\_v2.ts:123](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L123) |
| <a id="_pipeto"></a> ~~`_pipeTo?`~~ | `QueueProcessor`\<`U`, `any`\> | `undefined` | [src/concurrency/processor\_v2.ts:125](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L125) |
| <a id="_processcount"></a> ~~`_processCount`~~ | `number` | `0` | [src/concurrency/processor\_v2.ts:541](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L541) |
| <a id="_processing"></a> ~~`_processing`~~ | `boolean` | `false` | [src/concurrency/processor\_v2.ts:537](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L537) |
| <a id="_processingbatches"></a> ~~`_processingBatches`~~ | `Set`\<`number`\> | `undefined` | [src/concurrency/processor\_v2.ts:526](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L526) |
| <a id="_processingentitiesreactivesource"></a> ~~`_processingEntitiesReactiveSource?`~~ | [`ReactiveSource`](../../../dataobject/reactive/ReactiveSource/README.md)\<`number`\> | `undefined` | [src/concurrency/processor\_v2.ts:130](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L130) |
| <a id="_processor"></a> ~~`_processor`~~ | `Processor`\<`T`, `U`\> | `undefined` | [src/concurrency/processor\_v2.ts:120](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L120) |
| <a id="_queue"></a> ~~`_queue`~~ | `T`[] | `[]` | [src/concurrency/processor\_v2.ts:119](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L119) |
| <a id="_remainingreactivesource"></a> ~~`_remainingReactiveSource?`~~ | [`ReactiveSource`](../../../dataobject/reactive/ReactiveSource/README.md)\<`number`\> | `undefined` | [src/concurrency/processor\_v2.ts:128](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L128) |
| <a id="_root"></a> ~~`_root?`~~ | `QueueProcessor`\<`any`, `any`\> | `undefined` | [src/concurrency/processor\_v2.ts:127](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L127) |
| <a id="_runonupdatebatch"></a> ~~`_runOnUpdateBatch`~~ | () => `void` | `undefined` | [src/concurrency/processor\_v2.ts:134](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L134) |
| <a id="_totalremainingreactivesource"></a> ~~`_totalRemainingReactiveSource?`~~ | [`ReactiveSource`](../../../dataobject/reactive/ReactiveSource/README.md)\<`number`\> | `undefined` | [src/concurrency/processor\_v2.ts:129](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L129) |
| <a id="addprocessingbatch"></a> ~~`addProcessingBatch`~~ | (`value`: `number`) => `this` | `undefined` | [src/concurrency/processor\_v2.ts:527](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L527) |
| <a id="batchsize"></a> ~~`batchSize`~~ | `number` | `1` | [src/concurrency/processor\_v2.ts:142](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L142) |
| <a id="concurrentlimit"></a> ~~`concurrentLimit`~~ | `number` | `1` | [src/concurrency/processor\_v2.ts:139](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L139) |
| <a id="delay"></a> ~~`delay`~~ | `number` | `0` | [src/concurrency/processor\_v2.ts:149](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L149) |
| <a id="deleteprocessingbatch"></a> ~~`deleteProcessingBatch`~~ | (`value`: `number`) => `boolean` | `undefined` | [src/concurrency/processor\_v2.ts:532](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L532) |
| <a id="interval"></a> ~~`interval`~~ | `number` | `0` | [src/concurrency/processor\_v2.ts:151](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L151) |
| <a id="maintaindelay"></a> ~~`maintainDelay`~~ | `boolean` | `undefined` | [src/concurrency/processor\_v2.ts:150](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L150) |
| <a id="processingentities"></a> ~~`processingEntities`~~ | `number` | `0` | [src/concurrency/processor\_v2.ts:154](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L154) |
| <a id="waitingentries"></a> ~~`waitingEntries`~~ | `number` | `0` | [src/concurrency/processor\_v2.ts:157](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L157) |
| <a id="yieldthreshold"></a> ~~`yieldThreshold`~~ | `number` | `1` | [src/concurrency/processor\_v2.ts:145](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L145) |

## Accessors

### ~~isSuspended~~

#### Get Signature

```ts
get isSuspended(): boolean;
```

Defined in: [src/concurrency/processor\_v2.ts:410](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L410)

##### Returns

`boolean`

***

### ~~nowProcessing~~

#### Get Signature

```ts
get nowProcessing(): number;
```

Defined in: [src/concurrency/processor\_v2.ts:162](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L162)

##### Returns

`number`

***

### ~~remaining~~

#### Get Signature

```ts
get remaining(): number;
```

Defined in: [src/concurrency/processor\_v2.ts:169](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L169)

##### Returns

`number`

***

### ~~root~~

#### Get Signature

```ts
get root(): QueueProcessor<any, any>;
```

Defined in: [src/concurrency/processor\_v2.ts:201](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L201)

##### Returns

`QueueProcessor`\<`any`, `any`\>

***

### ~~totalNowProcessing~~

#### Get Signature

```ts
get totalNowProcessing(): number;
```

Defined in: [src/concurrency/processor\_v2.ts:165](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L165)

##### Returns

`number`

***

### ~~totalRemaining~~

#### Get Signature

```ts
get totalRemaining(): number;
```

Defined in: [src/concurrency/processor\_v2.ts:172](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L172)

##### Returns

`number`

## Methods

### ~~\_\_notifyIfIdle()~~

```ts
__notifyIfIdle(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:250](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L250)

#### Returns

`void`

***

### ~~\_canCollectBatch()~~

```ts
_canCollectBatch(): boolean;
```

Defined in: [src/concurrency/processor\_v2.ts:433](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L433)

#### Returns

`boolean`

***

### ~~\_clearTickDelay()~~

```ts
_clearTickDelay(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:241](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L241)

#### Returns

`void`

***

### ~~\_collectBatch()~~

```ts
_collectBatch(): T[];
```

Defined in: [src/concurrency/processor\_v2.ts:430](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L430)

#### Returns

`T`[]

***

### ~~\_initClerks()~~

```ts
_initClerks(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:542](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L542)

#### Returns

`void`

***

### ~~\_initEventHub()~~

```ts
_initEventHub(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:208](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L208)

#### Returns

`void`

***

### ~~\_isIdle()~~

```ts
_isIdle(): boolean;
```

Defined in: [src/concurrency/processor\_v2.ts:386](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L386)

#### Returns

`boolean`

***

### ~~\_notifyIfIdle()~~

```ts
_notifyIfIdle(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:247](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L247)

#### Returns

`void`

***

### ~~\_onTick()~~

```ts
_onTick(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:259](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L259)

#### Returns

`void`

***

### ~~\_process()~~

```ts
_process(): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:577](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L577)

#### Returns

`Promise`\<`void`\>

***

### ~~\_run()~~

```ts
_run(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:604](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L604)

#### Returns

`void`

***

### ~~\_runProcessor()~~

```ts
_runProcessor(items: T[]): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:495](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L495)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `T`[] |

#### Returns

`Promise`\<`void`\>

***

### ~~\_triggerTickDelay()~~

```ts
_triggerTickDelay(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:233](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L233)

#### Returns

`void`

***

### ~~\_updateBatchProcessStatus()~~

```ts
_updateBatchProcessStatus(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:425](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L425)

#### Returns

`void`

***

### ~~\_updateReactiveSource()~~

```ts
_updateReactiveSource(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:414](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L414)

#### Returns

`void`

***

### ~~\_waitFor()~~

```ts
_waitFor<T>(keys: T, timeout?: number): Promise<
  | typeof TIMED_OUT_SIGNAL
| T[number]>;
```

Defined in: [src/concurrency/processor\_v2.ts:212](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L212)

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
  \| *typeof* [`TIMED_OUT_SIGNAL`](../../../promises/TIMED_OUT_SIGNAL-1/README.md)
  \| `T`\[`number`\]\>

***

### ~~\_waitForIdle()~~

```ts
_waitForIdle(): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:389](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L389)

#### Returns

`Promise`\<`void`\>

***

### ~~\_waitForSuspended()~~

```ts
_waitForSuspended(): Promise<void>;
```

Defined in: [src/concurrency/processor\_v2.ts:461](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L461)

#### Returns

`Promise`\<`void`\>

***

### ~~clearQueue()~~

```ts
clearQueue(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:351](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L351)

Clear the queue

#### Returns

`void`

#### Remarks

I know that you have known this is very dangerous.

***

### ~~enqueue()~~

```ts
enqueue(entity: T): this;
```

Defined in: [src/concurrency/processor\_v2.ts:437](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L437)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `T` |

#### Returns

`this`

***

### ~~enqueueAll()~~

```ts
enqueueAll(entities: T[]): this;
```

Defined in: [src/concurrency/processor\_v2.ts:443](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L443)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entities` | `T`[] |

#### Returns

`this`

***

### ~~flush()~~

```ts
flush(): Promise<boolean>;
```

Defined in: [src/concurrency/processor\_v2.ts:463](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L463)

#### Returns

`Promise`\<`boolean`\>

***

### ~~idleDetectors()~~

```ts
idleDetectors(): Promise<void>[];
```

Defined in: [src/concurrency/processor\_v2.ts:402](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L402)

#### Returns

`Promise`\<`void`\>[]

***

### ~~isIdle()~~

```ts
isIdle(): boolean;
```

Defined in: [src/concurrency/processor\_v2.ts:383](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L383)

#### Returns

`boolean`

***

### ~~modifyQueue()~~

```ts
modifyQueue(processor: (queue: T[]) => T[]): void;
```

Defined in: [src/concurrency/processor\_v2.ts:342](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L342)

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

### ~~onUpdateProgress()~~

```ts
onUpdateProgress(proc: () => void): this;
```

Defined in: [src/concurrency/processor\_v2.ts:361](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L361)

Set the handler for when the queue has been modified

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `proc` | () => `void` |  |

#### Returns

`this`

***

### ~~pipeTo()~~

```ts
pipeTo<V>(pipeTo: QueueProcessor<U, V>): QueueProcessor<U, V>;
```

Defined in: [src/concurrency/processor\_v2.ts:371](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L371)

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

### ~~pump()~~

```ts
pump(): AsyncGenerator<T[], void, unknown>;
```

Defined in: [src/concurrency/processor\_v2.ts:507](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L507)

#### Returns

`AsyncGenerator`\<`T`[], `void`, `unknown`\>

***

### ~~replaceEnqueueProcessor()~~

```ts
replaceEnqueueProcessor(processor: (queue: T[], newItem: T) => T[]): this;
```

Defined in: [src/concurrency/processor\_v2.ts:332](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L332)

replace enqueue logic.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `processor` | (`queue`: `T`[], `newItem`: `T`) => `T`[] | enqueue logic. this should return new queue. |

#### Returns

`this`

***

### ~~requestNextFlush()~~

```ts
requestNextFlush(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:454](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L454)

#### Returns

`void`

***

### ~~resume()~~

```ts
resume(): this;
```

Defined in: [src/concurrency/processor\_v2.ts:186](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L186)

#### Returns

`this`

***

### ~~resumePipeLine()~~

```ts
resumePipeLine(): this;
```

Defined in: [src/concurrency/processor\_v2.ts:191](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L191)

#### Returns

`this`

***

### ~~startPipeline()~~

```ts
startPipeline(): this;
```

Defined in: [src/concurrency/processor\_v2.ts:196](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L196)

#### Returns

`this`

***

### ~~suspend()~~

```ts
suspend(): QueueProcessor<T, U>;
```

Defined in: [src/concurrency/processor\_v2.ts:180](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L180)

#### Returns

`QueueProcessor`\<`T`, `U`\>

***

### ~~terminate()~~

```ts
terminate(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:612](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L612)

#### Returns

`void`

***

### ~~terminateAll()~~

```ts
terminateAll(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:609](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L609)

#### Returns

`void`

***

### ~~updateReactiveSource()~~

```ts
updateReactiveSource(): void;
```

Defined in: [src/concurrency/processor\_v2.ts:417](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L417)

#### Returns

`void`

***

### ~~updateStatus()~~

```ts
updateStatus(setFunc: () => void): void;
```

Defined in: [src/concurrency/processor\_v2.ts:175](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L175)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `setFunc` | () => `void` |

#### Returns

`void`

***

### ~~waitForAllDoneAndTerminate()~~

```ts
waitForAllDoneAndTerminate(timeout?: number): Promise<boolean>;
```

Defined in: [src/concurrency/processor\_v2.ts:488](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L488)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>

***

### ~~waitForAllDownstream()~~

```ts
waitForAllDownstream(timeout?: number): Promise<boolean>;
```

Defined in: [src/concurrency/processor\_v2.ts:469](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L469)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>

***

### ~~waitForAllProcessed()~~

```ts
waitForAllProcessed(timeout?: number): Promise<boolean>;
```

Defined in: [src/concurrency/processor\_v2.ts:484](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/concurrency/processor_v2.ts#L484)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>
