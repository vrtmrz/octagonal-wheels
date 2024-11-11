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

type EventTypeWithData<ET, K> = K extends keyof ET ? (ET[K] extends undefined ? never : K extends string ? K : never) : never
type EventTypeWithoutData<ET, K> = K extends keyof ET ? (ET[K] extends undefined ? K extends string ? K : never : never) : never
type EventType<K> = K extends string ? K : never

type EventDataType<ET extends Record<string, any>, K extends keyof ET> = ET[K] extends undefined ? undefined : ET[K]


/**
 * A class that provides an event hub for managing custom events.
 * 
 * @template Events - The type of events that the EventHub will handle. This type should be an object with event names as keys and event data types as values. This make all events strongly typed.
 */
export class EventHub<Events extends AnyHubEvents = LSEvents> {
    _emitter = new EventTarget();

    /**
     * Emits an event without data.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to emit.
     */
    emitEvent<ET extends Events, K extends keyof ET>(
        event: EventTypeWithoutData<ET, K>
    ): void;
    /**
     * Emits an event with data.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param data - data to include with the event.
     * @param event - The event to emit.
     */
    emitEvent<ET extends Events, K extends keyof ET>(
        event: EventTypeWithData<ET, K>,
        data: ET[K]
    ): void;
    emitEvent<ET extends Events, K extends keyof ET>(
        event: EventType<K>,
        data?: EventDataType<ET, K>
    ): void {
        this._emitter.dispatchEvent(new CustomEvent(`${event.toString()}`, { detail: data ?? undefined }));
    }

    /**
     * Registers an event listener for a specific event.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     * @returns A function to remove the event listener.
     */
    on<ET extends Events, K extends keyof ET>(
        event: EventTypeWithoutData<ET, K>,
        callback: (e: Event) => void | Promise<void>
    ): () => void;
    /**
     * Registers an event listener for a specific event.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     * @returns A function to remove the event listener.
     */
    on<ET extends Events, K extends keyof ET>(
        event: EventTypeWithData<ET, K>,
        callback: (e: Event, data: ET[K]) => void | Promise<void>
    ): () => void;
    on<ET extends Events, K extends keyof ET>(
        event: EventType<K>,
        callback: (e: Event, data?: ET[K]) => void | Promise<void>
    ): () => void {
        const onEvent = (e: Event) => void callback(e, e instanceof CustomEvent ? e?.detail as ET[K] : undefined);
        const key = event;
        this._emitter.addEventListener(key, onEvent);
        return () => this._emitter.removeEventListener(key, onEvent);
    }

    /**
     * Registers an event listener for a specific event, with a callback that only receives the event data.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     * @returns A function to remove the event listener.
     */
    onEvent<ET extends Events, K extends keyof ET>(
        event: EventTypeWithoutData<ET, K>,
        callback: () => any
    ): () => void;
    /**
     * Registers an event listener for a specific event, with a callback that only receives the event data.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     * @returns A function to remove the event listener.
     */
    onEvent<ET extends Events, K extends keyof ET>(
        event: EventTypeWithData<ET, K>,
        callback: (data: ET[K]) => any
    ): () => void;
    onEvent<ET extends Events, K extends keyof ET>(
        event: EventType<K>,
        callback: (data?: ET[K]) => any
    ): () => void {
        return this.on(event as any, (_: any, data: any) => {
            callback(data);
        });
    }

    /**
     * Registers a one-time event listener for a specific event.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     */
    once<ET extends Events, K extends keyof ET>(
        event: EventTypeWithoutData<ET, K>,
        callback: (e: Event) => void
    ): void;
    /**
     * Registers a one-time event listener for a specific event.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     */
    once<ET extends Events, K extends keyof ET>(
        event: EventTypeWithData<ET, K>,
        callback: (e: Event, data: ET[K]) => void
    ): void;
    once<ET extends Events, K extends keyof ET>(
        event: EventType<K>,
        callback: (e: Event, data?: ET[K]) => void
    ): void {
        const off = this.on<ET, K>(event as any, (e: Event, data: any) => {
            off();
            callback(e, data);
        });
    }

    /**
    * Registers a one-time event listener for a specific event, with a callback that only receives the event data.
    * 
    * @template ET - The type of events.
    * @template K - The key of the event.
    * @param event - The event to listen for.
    * @param callback - The callback to execute when the event is triggered.
    */
    onceEvent<ET extends Events, K extends keyof ET>(
        event: EventTypeWithoutData<ET, K>,
        callback: () => void
    ): void;
    /**
     * Registers a one-time event listener for a specific event, with a callback that only receives the event data.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to listen for.
     * @param callback - The callback to execute when the event is triggered.
     */
    onceEvent<ET extends Events, K extends keyof ET>(
        event: EventTypeWithData<ET, K>,
        callback: (data: ET[K]) => void
    ): void;
    onceEvent<ET extends Events, K extends keyof ET>(
        event: EventType<K>,
        callback: (data?: ET[K]) => void
    ): void {
        this.once<ET, K>(event as any, (_: any, data: any) => callback(data));
    }

    /**
     * Waits for a specific event to be emitted.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to wait for.
     * @returns A Promise that resolves with null.
     */
    waitFor<ET extends Events, K extends keyof ET>(
        event: EventTypeWithoutData<ET, K>,
    ): Promise<null>;
    /**
     * Waits for a specific event to be emitted and returns a promise that resolves with the event data.
     * 
     * @template ET - The type of events.
     * @template K - The key of the event.
     * @param event - The event to wait for.
     * @returns A promise that resolves with the event data.
     */
    waitFor<ET extends Events, K extends keyof ET>(
        event: EventTypeWithData<ET, K>,
    ): Promise<ET[K]>;
    waitFor<ET extends Events, K extends keyof ET>(
        event: EventType<K>,
    ): Promise<ET[K] extends undefined ? void : ET[K]> {
        return new Promise<ET[K] extends undefined ? void : ET[K]>(resolve => {
            this.onceEvent<ET, K>(event as any, (data?: any) => {
                resolve(data);
            });
        });
    }
}

