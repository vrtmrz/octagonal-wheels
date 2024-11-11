import { describe, it, expect, vi } from 'vitest';
import { EventHub } from './events';
import { promiseWithResolver } from './promises';


declare global {
    interface TestEvents {
        "hello_test": string;
        "world_test": undefined;
    }
}

function createEventHub() {
    const hub = new EventHub<TestEvents>();
    return hub;
}
describe('EventHub-high-level', () => {
    it('should emit and listen to events without data', () => {
        const hub = createEventHub();
        const callback = vi.fn();

        hub.onEvent('world_test', callback);
        hub.emitEvent('world_test');
        expect(callback).toHaveBeenCalled();
    });

    it('should emit and listen to events with data', () => {
        const hub = createEventHub();
        const callback = vi.fn();

        hub.onEvent('hello_test', (data) => {
            callback(data);
        });
        hub.emitEvent('hello_test', 'world_test');

        expect(callback).toHaveBeenCalledWith('world_test');
    });

    it('should remove event listener', () => {
        const hub = createEventHub();
        const callback = vi.fn();

        const off = hub.onEvent('hello_test', callback);
        off();
        hub.emitEvent('world_test');

        expect(callback).not.toHaveBeenCalled();
    });

    it('should listen to an event only once', () => {
        const hub = createEventHub();
        const callback = vi.fn();

        hub.once('world_test', callback);
        hub.emitEvent('world_test');
        hub.emitEvent('world_test');

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should wait for an event', async () => {
        const hub = createEventHub();

        setTimeout(() => {
            hub.emitEvent('world_test');
        }, 100);

        await expect(hub.waitFor('world_test')).resolves.toBe(null);
    });

    it('should wait for an event with data', async () => {
        const hub = createEventHub();

        setTimeout(() => {
            hub.emitEvent('hello_test', 'world_test');
        }, 100);

        await expect(hub.waitFor('hello_test')).resolves.toBe('world_test');
    });

});

describe('EventHub-low-level', () => {
    it('should emit and listen to events without data', () => {
        const hub = createEventHub();
        const p = promiseWithResolver<string>();

        hub.on('world_test', (e) => {
            p.resolve(e.type);
        });
        hub.emitEvent('world_test');
        expect(p.promise).resolves.toBe('world_test');
        // expect(callback).toHaveBeenCalled();
    });

    it('should emit and listen to events with data', () => {
        const hub = createEventHub();
        const p = promiseWithResolver<{
            type: string;
            data: string;
        }>();
        const p2 = promiseWithResolver<{
            type: string;
            data: string;
        }>();
        hub.on('hello_test', (e) => {
            p.resolve({
                type: e.type,
                data: (e as CustomEvent).detail
            });

        });
        hub.on('hello_test', (e) => {
            p2.resolve({
                type: e.type,
                data: (e as CustomEvent).detail
            });
        });
        hub.emitEvent('hello_test', 'world_test');

        expect(p.promise).resolves.toEqual({
            type: 'hello_test',
            data: 'world_test'
        });
        expect(p2.promise).resolves.toEqual({
            type: 'hello_test',
            data: 'world_test'
        });
    });

    it('should respond as all emitted events', () => {
        const hub = createEventHub();
        let totalCalled = 0;
        hub.on('world_test', (e) => {
            totalCalled++;
        });

        hub.emitEvent('world_test');
        hub.emitEvent('world_test');

        expect(totalCalled).toBe(2);
    });

    it('should listen to an event only once', () => {
        const hub = createEventHub();
        let totalCalled = 0;
        hub.once('world_test', (e) => {
            totalCalled++;
        });

        hub.emitEvent('world_test');
        hub.emitEvent('world_test');

        expect(totalCalled).toBe(1);
    });

    it('should listen to an event only once (By handlers stopImmediatePropagation)', () => {
        const hub = createEventHub();
        let totalCalled = 0;
        hub.on('world_test', (e) => {
            e.stopImmediatePropagation();
            totalCalled++;
        });
        hub.on('world_test', (e) => {
            e.stopImmediatePropagation();
            totalCalled++;
        });

        hub.emitEvent('world_test');

        expect(totalCalled).toBe(1);
    });

});