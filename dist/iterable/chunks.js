import { GeneratorSource } from './source.js';

const FINISHED = Symbol("finished");
/**
 * async generator that yields chunks of items from the source.
 * @param source
 * @param {ChunkProcessOptions} options
 */
async function* asChunk(source, { unit, timeout, interval }) {
    const outputSource = new GeneratorSource();
    const pBuffer = [];
    let previousYielded = 0;
    let timeoutTimer = undefined;
    const scheduleTimeout = () => {
        if (timeout) {
            if (!timeoutTimer) {
                clearTimeout(timeoutTimer);
            }
            timeoutTimer = setTimeout(() => {
                flush(false);
                timeoutTimer = undefined;
            }, timeout);
        }
    };
    const enqueueItem = (item) => {
        pBuffer.push(item);
        if (pBuffer.length >= unit) {
            flush(false);
        }
    };
    const flush = (done) => {
        const flushTo = done ? 0 : unit;
        while (pBuffer.length >= flushTo) {
            const chunk = pBuffer.splice(0, unit);
            if (chunk.length === 0) {
                break;
            }
            outputSource.enqueue(chunk);
        }
        if (done) {
            outputSource.enqueue(FINISHED);
        }
    };
    void (async () => {
        for await (const item of source) {
            enqueueItem(item);
        }
        flush(true);
    })();
    for await (const chunk of outputSource) {
        if (chunk === FINISHED) {
            break;
        }
        scheduleTimeout();
        if (interval) {
            const now = Date.now();
            const elapsed = now - previousYielded;
            if (elapsed < interval) {
                await new Promise(resolve => setTimeout(resolve, interval - elapsed));
            }
        }
        yield chunk;
        previousYielded = Date.now();
    }
    // Cleanup
    if (timeoutTimer) {
        clearTimeout(timeoutTimer);
    }
    outputSource.dispose();
}
/**
 * Flattens nested async or sync iterables.
 * The counterpart to `asChunk`.
 * @param source
 */
async function* asFlat(source) {
    for await (const chunk of source) {
        for await (const item of chunk) {
            yield item;
        }
    }
}

export { asChunk, asFlat };
//# sourceMappingURL=chunks.js.map
