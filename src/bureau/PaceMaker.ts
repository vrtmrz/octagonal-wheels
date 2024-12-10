export class PaceMaker {
    public _interval: number;
    public _minimumNext: number | undefined;

    constructor(interval: number) {
        this._interval = interval;
    }

    /**
     * Change the interval of the pacing.
     * This will reset the minimum next pacing time.
     * @param interval 
     */
    changeInterval(interval: number) {
        if (interval !== this._interval) {
            this._interval = interval;
            this._minimumNext = undefined;
        }
    }

    /**
     * Mark the current time as the basis for the next pacing.
     * @param now 
     */
    mark(now: number = Date.now()) {
        if (this._minimumNext === undefined) {
            this._minimumNext = now + this._interval;
        } else {
            this._minimumNext = Math.max(this._minimumNext + this._interval, now + this._interval);
        }
    }

    /**
     * The promise for waiting paced
     */
    get paced() {
        const now = Date.now();
        const prevMinimum = this._minimumNext;
        this.mark(now);
        if (prevMinimum !== undefined) {
            const shouldWait = prevMinimum - now;
            if (shouldWait > 0) {
                return new Promise<void>(resolve => setTimeout(() => {
                    resolve();
                }, shouldWait));
            }
        }
        return Promise.resolve();
    }
}