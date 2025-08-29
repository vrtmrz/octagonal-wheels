/**
 * Converts a hexadecimal string to a Uint8Array.
 * Each pair of characters in the input string represents a byte in the output Uint8Array.
 *
 * @param src - The hexadecimal string to convert.
 * @returns The Uint8Array representation of the input string.
 */
export declare function hexStringToUint8Array(src: string): Uint8Array<ArrayBuffer>;
/**
 * Converts a Uint8Array to a hexadecimal string representation.
 *
 * @param src - The Uint8Array to convert.
 * @returns The hexadecimal string representation of the Uint8Array.
 */
export declare function uint8ArrayToHexString(src: Uint8Array): string;
