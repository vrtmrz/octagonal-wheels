import { default as xxhashOld } from "xxhash-wasm";
import { default as xxhashNew } from "../patched_xxhash_wasm/xxhash-wasm.js";
export { xxhashOld, xxhashNew };
/**
 * Calculates the SHA-1 hash of the given string.
 *
 * @param src - The string to calculate the hash for.
 * @returns A promise that resolves to the SHA-1 hash as a base64-encoded string.
 */
export declare function sha1(src: string): Promise<string>;
/**
 * Calculates the digest hash of an array of strings using xxhash.
 *
 * @param src - The array of strings to calculate the hash for.
 * @returns The digest hash of the input array.
 */
export declare function digestHash(src: string[]): string;
