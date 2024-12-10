import { describe, it, expect } from 'vitest';
import { SlipBoard, globalSlipBoard } from './SlipBoard';
import { delay, TIMED_OUT_SIGNAL } from '../promises';

describe('TrackingBoard', () => {
    it('should dispatch and listen to events without data', async () => {
        const board = new SlipBoard();
        const event = 'world';

        const promise = board.awaitNext(event, "0");
        board.submit(event, "0");
        const promise2 = board.awaitNext(event, "1");
        board.submit(event, "1");

        await expect(promise).resolves.toBeUndefined();
        await expect(promise2).resolves.toBeUndefined();
    });

    it('should dispatch and listen to events with data', async () => {
        const board = new SlipBoard();
        const event = 'hello';
        const data = 'world';
        const data2 = 'world2';

        const promise = board.awaitNext(event, "0");
        board.submit(event, "0", data);
        const promise2 = board.awaitNext(event, "1");
        board.submit(event, "1", data2);
        await expect(promise).resolves.toBe(data);
        await expect(promise2).resolves.toBe(data2);
    });

    it('should timeout if event is not dispatched in time', async () => {
        const board = new SlipBoard();
        const event = 'hello';
        const timeout = 100;

        const promise = board.awaitNext(event, "0", timeout);

        await expect(promise).resolves.toBe(TIMED_OUT_SIGNAL);
    });

    it('should cancel timeout if event is dispatched in time', async () => {
        const board = new SlipBoard();
        const event = 'hello';
        const data = 'world';
        const timeout = 100;

        const promise = board.awaitNext(event, "0", timeout);
        board.submit(event, "0", data);

        await expect(promise).resolves.toBe(data);
    });

    it('should dispatch and listen to events with data', async () => {
        const board = new SlipBoard();
        const event = 'hello';
        const data = 'world';
        const data2 = 'world2';
        const timeout = 100;
        const promise = board.awaitNext(event, "0");
        board.submit(event, "0", data);
        const promise2 = board.awaitNext(event, "1", timeout);
        // board.submit(event, "1", data2);
        await expect(promise).resolves.toBe(data);
        await expect(promise2).resolves.toBe(TIMED_OUT_SIGNAL);
    });

    it('should use globalTrackingBoard', async () => {
        const event = 'hello';
        const data = 'world';

        const promise = globalSlipBoard.awaitNext(event);
        globalSlipBoard.submit(event, "", data);

        await expect(promise).resolves.toBe(data);
    });

    it('should use globalTrackingBoard with and issueAndProceed', async () => {

        let i = 0;
        const incD = async () => {
            await delay(250);
            return ++i;
        };
        const promises: Promise<number>[] = [];
        for (let j = 0; j <= 10; j++) {
            const p1 = globalSlipBoard.issueAndProceed("test", "0", {
                callback: () => incD()
            });
            promises.push(p1);
        };
        await expect(Promise.all(promises)).resolves.toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    });
    it('should use globalTrackingBoard with and issueAndProceed', async () => {

        let i = 0;
        const incD = async (j: number) => {
            if (j % 2 == 0) {
                throw new Error("error");
            }
            await delay(250);
            return ++i;

        };
        const promises: Promise<number>[] = [];
        for (let j = 0; j <= 10; j++) {
            const p1 = globalSlipBoard.issueAndProceed("test", `${j % 2}`, {
                callback: () => incD(j),
                submitAsSuccess: true,
                transformError: (ex) => `Failed`
            });
            promises.push(p1);

        };
        await expect(Promise.all(promises)).resolves.toEqual(["Failed", 1, "Failed", 1, "Failed", 1, "Failed", 1, "Failed", 1, "Failed"]);
    });
});
