/**
 * A class that provides an event hub for managing custom events.
 *
 * @template Events - The type of events that the EventHub will handle. This type should be an object with event names as keys and event data types as values. This make all events strongly typed.
 */
class EventHub {
    constructor() {
        Object.defineProperty(this, "_emitter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new EventTarget()
        });
    }
    emitEvent(event, data) {
        this._emitter.dispatchEvent(new CustomEvent(`${event.toString()}`, { detail: data ?? undefined }));
    }
    on(event, callback) {
        const onEvent = (e) => void callback(e, e instanceof CustomEvent ? e?.detail : undefined);
        const key = event;
        this._emitter.addEventListener(key, onEvent);
        return () => this._emitter.removeEventListener(key, onEvent);
    }
    onEvent(event, callback) {
        return this.on(event, (_, data) => {
            callback(data);
        });
    }
    once(event, callback) {
        const off = this.on(event, (e, data) => {
            off();
            callback(e, data);
        });
    }
    onceEvent(event, callback) {
        this.once(event, (_, data) => callback(data));
    }
    waitFor(event) {
        return new Promise(resolve => {
            this.onceEvent(event, (data) => {
                resolve(data);
            });
        });
    }
}

export { EventHub };
//# sourceMappingURL=events.js.map
