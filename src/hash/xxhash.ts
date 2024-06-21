import { default as xxhashOld, type Exports } from "xxhash-wasm";
//@ts-ignore
import { default as xxhashNew } from "../patched_xxhash_wasm/xxhash-wasm.js";
import type { XXHashAPI } from "xxhash-wasm-102";
import { Logger, LOG_LEVEL_VERBOSE } from "../common/logger.js";
import { writeString, arrayBufferToBase64Single } from "../binary";

export { xxhashOld, xxhashNew }

let hashFunc: (input: string, seed?: number) => string;

async function initHashFunc() {
    try {
        const { h32ToString } = await (xxhashNew as unknown as () => Promise<XXHashAPI>)();
        hashFunc = h32ToString;
        Logger(`xxhash for plugin initialised`, LOG_LEVEL_VERBOSE);
    } catch (ex) {
        Logger(`Could not initialise xxhash. fallback...`, LOG_LEVEL_VERBOSE);
        Logger(ex);
        try {
            const { h32 } = (await xxhashOld()) as unknown as Exports;
            hashFunc = (str) => h32(str);
        } catch (ex) {
            Logger(`Could not initialise old xxhash for plugin: use sha1`, LOG_LEVEL_VERBOSE);
            Logger(ex);
            hashFunc = (str) => str;
        }
    }
    return hashFunc;
}
initHashFunc();
/**
 * Calculates the SHA-1 hash of the given string.
 * 
 * @param src - The string to calculate the hash for.
 * @returns A promise that resolves to the SHA-1 hash as a base64-encoded string.
 */
export async function sha1(src: string) {
    const bytes = writeString(src);
    const digest = await globalThis.crypto.subtle.digest({ name: "SHA-1" }, bytes);
    return await arrayBufferToBase64Single(digest);
}

/**
 * Calculates the digest hash of an array of strings using xxhash.
 * 
 * @param src - The array of strings to calculate the hash for.
 * @returns The digest hash of the input array.
 */
export function digestHash(src: string[]) {
    let hash = "";
    for (const v of src) {
        hash = hashFunc(hash + v);
    }
    if (hash == "") {
        return hashFunc("**");
    }
    return hash;
}
