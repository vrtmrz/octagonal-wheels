declare const LIB_VERSION: string | undefined;
/**
 * Returns the version of the library.
 * If the version is not available, it returns "dev".
 * 
 * @returns The version of the library.
 */
export function libVersion(): string {
    return LIB_VERSION || "dev"
}

export * as binary from "./binary";
export * as common from "./common";
export * as concurrency from "./concurrency";
export * as dataobject from "./dataobject";
export * as databases from "./databases";
export * as hash from "./hash";
export * as memory from "./memory";
export * as messagepassing from "./messagepassing";
export * as collection from "./collection";
export * as function from "./function";
export * as object from "./object";
export * as promises from "./promises";
export * as string from "./string";
export * as number from "./number";
export * as encryption from "./encryption";
export * as context from "./context";
export * as actor from "./actor";
export * as events from "./events";
export * as iterable from "./iterable";