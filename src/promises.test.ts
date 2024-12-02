import { delay, fireAndForget, isResolved, noop, promiseWithResolver, yieldAnimationFrame, yieldMicrotask, yieldNextAnimationFrame, yieldNextMicrotask, yieldRequestIdleCallback } from './promises';
import { describe, expect, it } from 'vitest';

describe('delay function', () => {
    it('should resolve with the provided result after the specified delay', async () => {
        const ms = 1000;
        const result = 'test';
        const startTime = Date.now();
        const actualResult = await delay(ms, result);
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        expect(actualResult).to.equal(result);
        expect(elapsedTime).to.be.at.least(ms);
    });

    it('should resolve with undefined if no result is provided', async () => {
        const ms = 500;
        const startTime = Date.now();
        const actualResult = await delay(ms);
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        expect(actualResult).to.be.undefined;
        expect(elapsedTime).to.be.at.least(ms);
    });
}); describe('promiseWithResolver function', () => {
    it('should resolve with the provided value', async () => {
        const { promise, resolve } = promiseWithResolver<number>();
        const result = 42;
        resolve(result);
        const actualResult = await promise;
        expect(actualResult).to.equal(result);
    });

    it('should reject with the provided error', async () => {
        const { promise, reject } = promiseWithResolver<string>();
        const error = new Error('Test error');
        reject(error);
        try {
            await promise;
            // The promise should have been rejected, so this line should not be reached
            expect.fail('Promise should have been rejected');
        } catch (err) {
            expect(err).to.equal(error);
        }
    });
});
describe('noop function', () => {
    it('should do nothing', () => {
        // Call the noop function
        noop();

        // No assertions needed, as the function does nothing
    });
});
describe('fireAndForget function', () => {
    it('should execute the provided promise and do nothing', async () => {
        let executed = false;
        const promise = new Promise<void>((resolve) => {
            setTimeout(() => {
                executed = true;
                resolve();
            }, 1000);
        });

        fireAndForget(promise);

        // Wait for the promise to be executed
        await delay(1500);

        expect(executed).to.be.true;
    });

    it('should execute the provided function that returns a promise and do nothing', async () => {
        let executed = false;
        const promiseFn = () => {
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    executed = true;
                    resolve();
                }, 1000);
            });
        };

        fireAndForget(promiseFn);

        // Wait for the promise to be executed
        await delay(1500);

        expect(executed).to.be.true;
    });

    it('should handle errors and do nothing', async () => {
        const error = new Error('Test error');
        const promise = new Promise<void>((_, reject) => {
            setTimeout(() => {
                reject(error);
            }, 1000);
        });

        fireAndForget(promise);

        // Wait for the promise to be executed
        await delay(1500);

        // No assertions needed, as the function should handle the error and do nothing
    });

    it('should handle errors thrown by the function and do nothing', async () => {
        const error = new Error('Test error');
        const promiseFn = async () => {
            throw error;
        };

        fireAndForget(promiseFn);

        // Wait for the promise to be executed
        await delay(1500);

        // No assertions needed, as the function should handle the error and do nothing
    });
});

describe('microtasks', () => {
    it('microtasks order test', async () => {
        const order: string[] = [];
        const promise = Promise.resolve();
        // for (let i = 0; <10; i++) {
        const processes = [
            yieldNextMicrotask().then(() => order.push('yieldNextMicrotask')),
            yieldMicrotask().then(() => order.push('yieldMicrotask')),
            yieldNextMicrotask().then(() => order.push('yieldNextMicrotask')),
            promise.then(() => order.push('promise')),
            yieldRequestIdleCallback().then(() => order.push('yieldRequestIdleCallback')),
            yieldNextAnimationFrame().then(() => order.push('yieldNextAnimationFrame')),
            promise.then(() => order.push('promise')),
            yieldRequestIdleCallback().then(() => order.push('yieldRequestIdleCallback')),
            yieldAnimationFrame().then(() => order.push('yieldAnimationFrame')),
            yieldNextAnimationFrame().then(() => order.push('yieldNextAnimationFrame')),

        ];
        await Promise.all(processes);

        expect(order).to.deep.equal(['promise', 'promise', 'yieldMicrotask', 'yieldNextMicrotask', 'yieldNextMicrotask', 'yieldNextAnimationFrame', 'yieldNextAnimationFrame', 'yieldAnimationFrame', 'yieldRequestIdleCallback', 'yieldRequestIdleCallback']);
    });


});
describe('isResolved function', () => {
    it('should return true for a resolved promise', async () => {
        const resolvedPromise = Promise.resolve('resolved');
        const result = await isResolved(resolvedPromise);
        expect(result).to.be.true;
    });

    it('should return false for a pending promise', async () => {
        const pendingPromise = new Promise(() => { });
        const result = await isResolved(pendingPromise);
        expect(result).to.be.false;
    });

});