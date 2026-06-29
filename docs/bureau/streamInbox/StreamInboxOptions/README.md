[**octagonal-wheels**](../../../README.md)

***

[octagonal-wheels](../../../modules.md) / [bureau](../../README.md) / [streamInbox](../README.md) / StreamInboxOptions

# Type Alias: StreamInboxOptions

```ts
type StreamInboxOptions = {
  capacity?: number;
  overflowPolicy?: StreamInboxOverflowPolicy;
};
```

Defined in: [src/bureau/StreamInbox.ts:3](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L3)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="capacity"></a> `capacity?` | `number` | Maximum number of items retained by this bridge, including items already handed to the ReadableStream internal queue. | [src/bureau/StreamInbox.ts:8](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L8) |
| <a id="overflowpolicy"></a> `overflowPolicy?` | [`StreamInboxOverflowPolicy`](../StreamInboxOverflowPolicy/README.md) | - | [src/bureau/StreamInbox.ts:9](https://github.com/vrtmrz/octagonal-wheels/blob/main/src/bureau/StreamInbox.ts#L9) |
