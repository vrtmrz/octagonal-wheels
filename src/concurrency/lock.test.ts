import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { isLockAcquired, scheduleOnceIfDuplicated, serialized, shareRunningResult, skipIfDuplicated } from './lock';
import { delay } from '../promises';


class Runner {
    maxConcurrency = 0;
    currentConcurrency = 0;
    constructor() {
    }
    async run<T>(func: () => Promise<T | void>, delayTime = 100, suspendTime = 100) {
        try {
            this.currentConcurrency++;
            if (this.currentConcurrency > this.maxConcurrency) {
                this.maxConcurrency = this.currentConcurrency;
            }
            await delay(delayTime);
            const ret = await func();
            await delay(suspendTime);
            return ret;

        } finally {
            this.currentConcurrency--;
        }
    }
}

describe('serialized', () => {
    let runner: Runner;
    beforeEach(() => {
        runner = new Runner();
    })


    test('should return the result of the process', async () => {
        const key = 'group';
        const task = vi.fn(() => Promise.resolve('Task Result'));

        const result = await serialized(key, task);

        expect(task).toHaveBeenCalled();
        expect(result).toBe('Task Result');
    });

    test('should run tasks one by one in their group', async () => {
        const key = 'group';
        const tasks = [
            vi.fn(() => runner.run(() => Promise.resolve('Task 1'))),
            vi.fn(() => runner.run(() => Promise.resolve('Task 2'))),
            vi.fn(() => runner.run(() => Promise.resolve('Task 3')))
        ];

        const results = await Promise.all(tasks.map(task => serialized(key, task)));

        expect(tasks[0]).toHaveBeenCalled();
        expect(tasks[1]).toHaveBeenCalled();
        expect(tasks[2]).toHaveBeenCalled();
        expect(results).toEqual(['Task 1', 'Task 2', 'Task 3']);
        expect(runner.maxConcurrency).toBe(1);
    });


    test('should run tasks one by one in their group (concurrent)', async () => {
        const key = 'group';
        const key2 = 'group2';
        const tasks = [
            vi.fn(() => runner.run(() => Promise.resolve('Task 1'))),
            vi.fn(() => runner.run(() => Promise.resolve('Task 2'))),
            vi.fn(() => runner.run(() => Promise.resolve('Task 3')))
        ];
        const tasks2 = [
            vi.fn(() => runner.run(() => Promise.resolve('Task2 1'))),
            vi.fn(() => runner.run(() => Promise.resolve('Task2 2'))),
            vi.fn(() => runner.run(() => Promise.resolve('Task2 3')))
        ];
        const results = await Promise.all(
            [...tasks.map(task => serialized(key, task)),
            ...tasks2.map(task => serialized(key2, task))
            ]
        );

        expect(tasks[0]).toHaveBeenCalled();
        expect(tasks[1]).toHaveBeenCalled();
        expect(tasks[2]).toHaveBeenCalled();
        expect(tasks2[0]).toHaveBeenCalled();
        expect(tasks2[1]).toHaveBeenCalled();
        expect(tasks2[2]).toHaveBeenCalled();
        expect(results).toEqual(['Task 1', 'Task 2', 'Task 3', 'Task2 1', 'Task2 2', 'Task2 3']);
        expect(runner.maxConcurrency).toBe(2);
    });

});
describe('shareRunningResult', () => {
    let runner: Runner;
    beforeEach(() => {
        runner = new Runner();
    })
    test('should run the task if no process is running', async () => {
        const key = 'group';
        const task = vi.fn(() => Promise.resolve('Task Result'));

        const result = await shareRunningResult(key, task);

        expect(task).toHaveBeenCalled();
        expect(result).toBe('Task Result');
    });

    test('should share the result if a process is already running', async () => {
        const key = 'group';
        const task1 = vi.fn(() => Promise.resolve('Task Result 1'));
        const task2 = vi.fn(() => Promise.resolve('Task Result 2'));

        const result1P = shareRunningResult(key, () => runner.run(async () => await task1()));
        const result2P = shareRunningResult(key, () => runner.run(async () => await task2()));
        const result1 = await result1P;
        const result2 = await result2P;

        expect(task1).toHaveBeenCalled();
        expect(task2).not.toHaveBeenCalled();
        expect(result1).toBe('Task Result 1');
        expect(result2).toBe('Task Result 1');
    });

});
describe('skipIfDuplicated', () => {
    test('should skip the task if a process is already running', async () => {
        const key = 'group';
        const task = vi.fn(() => Promise.resolve('Task Result'));

        const result1P = skipIfDuplicated(key, task);
        const result2P = skipIfDuplicated(key, task);
        const result1 = await result1P;
        const result2 = await result2P;

        expect(task).toHaveBeenCalledTimes(1);
        expect(result1).toBe("Task Result");
        expect(result2).toBeNull();
    });

    test('should run the task if no process is running', async () => {
        const key = 'group';
        const task = vi.fn(() => Promise.resolve('Task Result'));

        const result = await skipIfDuplicated(key, task);

        expect(task).toHaveBeenCalled();
        expect(result).toBe('Task Result');
    });
});

describe('scheduleOnceIfDuplicated', () => {
    let runner: Runner;
    beforeEach(() => {
        runner = new Runner();
        vi.useFakeTimers();
    })

    afterEach(() => {
        vi.clearAllTimers();
        vi.useRealTimers();
    });


    test('should run the task if the lock is not acquired', async () => {
        const key = 'group';
        const task = vi.fn(() => Promise.resolve('Task Result'));

        await scheduleOnceIfDuplicated(key, task);

        expect(task).toHaveBeenCalled();
    });

    test('should schedule the task if the lock is acquired', async () => {
        const key = 'group';
        const task1 = vi.fn(() => Promise.resolve());
        const task2 = vi.fn(() => Promise.resolve());
        const task3 = vi.fn(() => Promise.resolve());

        const p1 = scheduleOnceIfDuplicated(key, () => runner.run(async () => await task1()));
        const p2 = scheduleOnceIfDuplicated(key, () => runner.run(async () => await task2()));
        const p3 = scheduleOnceIfDuplicated(key, () => runner.run(async () => await task3()));
        await vi.advanceTimersByTimeAsync(1000);
        await Promise.all([p1, p2, p3]);
        // await vi.advanceTimersByTimeAsync(500);

        expect(task1).toHaveBeenCalled();
        expect(task2).not.toHaveBeenCalled();
        expect(task3).toHaveBeenCalled();
    });

    test('should run the scheduled task after the lock is released', async () => {
        const key = 'group';
        const task1 = vi.fn(() => Promise.resolve());
        const task2 = vi.fn(() => Promise.resolve());
        const task3 = vi.fn(() => Promise.resolve());
        const task4 = vi.fn(() => Promise.resolve());

        const p1 = scheduleOnceIfDuplicated(key, () => runner.run(async () => await task1()));
        const p2 = scheduleOnceIfDuplicated(key, () => runner.run(async () => await task2()));
        const p3 = scheduleOnceIfDuplicated(key, () => runner.run(async () => await task3()));
        await vi.advanceTimersByTimeAsync(500);
        await Promise.all([p1, p2, p3]);

        expect(task1).toHaveBeenCalled();
        expect(task2).not.toHaveBeenCalled();
        expect(task3).toHaveBeenCalled();

        await vi.advanceTimersByTimeAsync(500);

        const p4 = scheduleOnceIfDuplicated(key, () => runner.run(async () => await task4()));
        await vi.advanceTimersByTimeAsync(500);
        await p4;

        expect(task4).toHaveBeenCalled();
    });
});
describe('isLockAcquired', () => {
    test('should return false when the lock is not acquired', () => {
        const key = 'group';
        const result = isLockAcquired(key);
        expect(result).toBe(false);
    });

    test('should return true when the lock is acquired', async () => {
        const key = 'group';
        await serialized(key, () => {
            const result = isLockAcquired(key);
            expect(result).toBe(true);
            Promise.resolve()
        });
        const result = isLockAcquired(key);
        expect(result).toBe(false);
    });
});