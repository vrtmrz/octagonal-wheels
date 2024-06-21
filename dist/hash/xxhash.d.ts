/// <reference types="xxhash-wasm-102" />
import { default as xxhashOld } from "xxhash-wasm";
import { default as xxhashNew } from "../patched_xxhash_wasm/xxhash-wasm.js";
export { xxhashOld, xxhashNew };
export declare function sha1(src: string): Promise<string>;
export declare function digestHash(src: string[]): string;
