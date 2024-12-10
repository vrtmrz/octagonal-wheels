import { describe, it, expect, beforeEach } from 'vitest';
import { Inbox, NOT_AVAILABLE } from './Inbox';
import { isResolved, promiseWithResolver } from '../promises';

describe('Inbox', () => {
    let inbox: Inbox<number>;

    beforeEach(() => {
        inbox = new Inbox<number>(3);
    });

    it('should initialize with the correct capacity', () => {
        expect(inbox._capacity).toBe(3);
        expect(inbox.size).toBe(0);
        expect(inbox.free).toBe(3);
    });

    it('should post and pick items correctly', async () => {
        await inbox.post(1);
        await inbox.post(2);
        await inbox.post(3);

        expect(inbox.size).toBe(3);
        expect(inbox.free).toBe(0);

        const item1 = await inbox.pick();
        const item2 = await inbox.pick();
        const item3 = await inbox.pick();

        expect(item1).toBe(1);
        expect(item2).toBe(2);
        expect(item3).toBe(3);
        expect(inbox.size).toBe(0);
        expect(inbox.free).toBe(3);
    });

    it('should handle tryPost and tryPick correctly', async () => {
        await inbox.tryPost(1);
        await inbox.tryPost(2);
        await inbox.tryPost(3);

        expect(inbox.size).toBe(3);
        expect(inbox.free).toBe(0);

        const tryPostResult = await inbox.tryPost(4);
        expect(tryPostResult).toBe(false);

        const item1 = await inbox.tryPick();
        const item2 = await inbox.tryPick();
        const item3 = await inbox.tryPick();
        const item4 = await inbox.tryPick();

        expect(item1).toBe(1);
        expect(item2).toBe(2);
        expect(item3).toBe(3);
        expect(item4).toBe(NOT_AVAILABLE);
        expect(inbox.size).toBe(0);
        expect(inbox.free).toBe(3);
    });

    it('should throw an error if capacity is less than or equal to 0', () => {
        expect(() => new Inbox<number>(0)).toThrow('Capacity must be greater than 0');
    });

    it('should wait for free space when posting in blocking mode', async () => {
        await inbox.post(1);
        await inbox.post(2);
        await inbox.post(3);

        const postPromise = inbox.post(4);
        await inbox.pick();
        const postResult = await postPromise;

        expect(postResult).toBe(true);
        expect(inbox.size).toBe(3);
        expect(inbox.free).toBe(0);
    });

    it('should wait for items when picking in blocking mode', async () => {
        const pickPromise = inbox.pick();
        await inbox.post(1);
        const pickResult = await pickPromise;

        expect(pickResult).toBe(1);
        expect(inbox.size).toBe(0);
        expect(inbox.free).toBe(3);
    });

    it("should safe on 2^n capacity", async () => {
        const postBox = new Inbox<number>(4);
        expect(postBox._wrapAroundCount).toBe(255);
        for (let i = 0; i < 4; i++) {
            postBox.post(i);
        }
        expect(postBox.size).toBe(4);
        expect(postBox.free).toBe(0);
        expect(postBox.isFull).toBe(true);
        expect(postBox.isRunningOut).toBe(false);
        const tryPostResult = await postBox.tryPost(5);
        expect(tryPostResult).toBe(false);
        for (let i = 0; i < 4; i++) {
            const item = await postBox.pick();
            expect(item).toBe(i);
        }
        expect(postBox.size).toBe(0);
        expect(postBox.free).toBe(4);

        const postBox2 = new Inbox<number>(256);
        expect(postBox2._wrapAroundCount).toBe(511);

    });

    it('should dispose correctly while posting', async () => {
        await inbox.post(1);
        await inbox.post(2);
        await inbox.post(3);
        const postPromise = inbox.post(4);

        expect(await isResolved(postPromise)).toBe(false);
        inbox.dispose();

        expect(inbox.size).toBe(0);
        expect(inbox.free).toBe(0);
        expect(inbox.isDisposed).toBe(true);
        expect(postPromise).rejects.toThrowError();

        expect(() => inbox.post(4)).rejects.toThrowError();
        expect(() => inbox.pick()).rejects.toThrowError();

    });

    it('should dispose correctly while picking', async () => {
        await inbox.post(1);
        await inbox.post(2);
        await inbox.post(3);
        expect(await inbox.pick()).toBe(1);
        expect(await inbox.pick()).toBe(2);
        expect(await inbox.pick()).toBe(3);
        const pickPromise = inbox.pick();

        expect(await isResolved(pickPromise)).toBe(false);
        inbox.dispose();

        expect(inbox.size).toBe(0);
        expect(inbox.free).toBe(0);
        expect(inbox.isDisposed).toBe(true);
        expect(pickPromise).rejects.toThrowError();

        expect(() => inbox.post(4)).rejects.toThrowError();
        expect(() => inbox.pick()).rejects.toThrowError();

    });

    it("should timeout correctly", async () => {
        await inbox.post(1);
        await inbox.post(2);
        await inbox.post(3);
        const postPromise = inbox.post(4, 100);
        expect(await isResolved(postPromise)).toBe(false);
        await new Promise(r => setTimeout(r, 200));
        expect(await postPromise).toBe(false);
        expect(await inbox.pick()).toBe(1);
        expect(await inbox.pick()).toBe(2);
        expect(await inbox.pick()).toBe(3);
        const pickPromise = inbox.pick(100);
        expect(await isResolved(pickPromise)).toBe(false);
        await new Promise(r => setTimeout(r, 200));
        expect(await pickPromise).toBe(NOT_AVAILABLE);
    });

    it("should cancelled by other promises correctly", async () => {
        await inbox.post(1);
        //cancelled by other promise, so it will not be posted
        await inbox.post(2, undefined, [Promise.resolve()]);
        const p = promiseWithResolver<void>();
        // p.promise has not been resolved, so 3 will be posted
        await inbox.post(3, undefined, [p.promise]);
        await inbox.post(4);
        expect(await inbox.pick()).toBe(1);
        //cancelled by other promise, so it will not be picked `3` up
        expect(await inbox.pick(undefined, [Promise.resolve()])).toBe(NOT_AVAILABLE);
        expect(await inbox.pick()).toBe(3);
        //p.promise has not been resolved, so 4 will be picked up
        expect(await inbox.pick(undefined, [p.promise])).toBe(4);

    });
});