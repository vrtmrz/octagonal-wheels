declare global {
    interface LSEvents {
        "hello": string;
        "world": undefined;
    }
}
declare global {
    interface AnyHubEvents {
        [key: string]: any;
    }
}
type EventTypeWithData<ET, K> = K extends keyof ET ? (ET[K] extends undefined ? never : K extends string ? K : never) : never;
type EventTypeWithoutData<ET, K> = K extends keyof ET ? (ET[K] extends undefined ? K extends string ? K : never : never) : never;
/**
 * A class that provides an event hub for managing custom events.
 *
 * @template Events - The type of events that the EventHub will handle. This type should be an object with event names as keys and event data types as values. This make all events strongly typed.
 */
export declare class EventHub<Events extends AnyHubEvents = LSEvents> {
    _emitter: EventTarget;
    /**
     * Emits an event without data.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to emit.
     */
    emitEvent<ET extends Events, K extends keyof ET>(event: EventTypeWithoutData<ET, K>): void;
    /**
     * Emits an event with data.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param data - data to include with the event.
     * @param event - The event to emit.
     */
    emitEvent<ET extends Events, K extends keyof ET>(event: EventTypeWithData<ET, K>, data: ET[K]): void;
    /**
     * Registers an event listener for a specific event.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     * @returns A function to remove the event listener.
     */
    on<ET extends Events, K extends keyof ET>(event: EventTypeWithoutData<ET, K>, callback: (e: Event) => void | Promise<void>): () => void;
    /**
     * Registers an event listener for a specific event.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     * @returns A function to remove the event listener.
     */
    on<ET extends Events, K extends keyof ET>(event: EventTypeWithData<ET, K>, callback: (e: Event, data: ET[K]) => void | Promise<void>): () => void;
    /**
     * Registers an event listener for a specific event, with a callback that only receives the event data.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     * @returns A function to remove the event listener.
     */
    onEvent<ET extends Events, K extends keyof ET>(event: EventTypeWithoutData<ET, K>, callback: () => any): () => void;
    /**
     * Registers an event listener for a specific event, with a callback that only receives the event data.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     * @returns A function to remove the event listener.
     */
    onEvent<ET extends Events, K extends keyof ET>(event: EventTypeWithData<ET, K>, callback: (data: ET[K]) => any): () => void;
    /**
     * Registers a one-time event listener for a specific event.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     */
    once<ET extends Events, K extends keyof ET>(event: EventTypeWithoutData<ET, K>, callback: (e: Event) => void): void;
    /**
     * Registers a one-time event listener for a specific event.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     */
    once<ET extends Events, K extends keyof ET>(event: EventTypeWithData<ET, K>, callback: (e: Event, data: ET[K]) => void): void;
    /**
    * Registers a one-time event listener for a specific event, with a callback that only receives the event data.
    *
    * @template ET - The type of events.
    * @template K - The key of the event.
    * @param event - The event to listen for.
    * @param callback - The callback to execute when the event is triggered.
    */
    onceEvent<ET extends Events, K extends keyof ET>(event: EventTypeWithoutData<ET, K>, callback: () => void): void;
    /**
     * Registers a one-time event listener for a specific event, with a callback that only receives the event data.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     */
    onceEvent<ET extends Events, K extends keyof ET>(event: EventTypeWithData<ET, K>, callback: (data: ET[K]) => void): void;
    /**
     * Waits for a specific event to be emitted.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to wait for.
     * @returns A Promise that resolves with null.
     */
    waitFor<ET extends Events, K extends keyof ET>(event: EventTypeWithoutData<ET, K>): Promise<null>;
    /**
     * Waits for a specific event to be emitted and returns a promise that resolves with the event data.
     *
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to wait for.
     * @returns A promise that resolves with the event data.
     */
    waitFor<ET extends Events, K extends keyof ET>(event: EventTypeWithData<ET, K>): Promise<ET[K]>;
}
export {};
