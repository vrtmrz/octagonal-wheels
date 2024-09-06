/**
 * Converts a base64 string or an array of base64 strings to an ArrayBuffer.
 * @param base64 - The base64 string or an array of base64 strings to convert.
 * @returns The converted ArrayBuffer.
 */
export declare function base64ToArrayBuffer(base64: string | string[]): ArrayBuffer;
/**
 * Converts a base64 string to an ArrayBuffer in a browser environment.
 *
 * @param base64 - The base64 string to convert.
 * @returns The converted ArrayBuffer.
 */
export declare function base64ToArrayBufferInternalBrowser(base64: string): ArrayBuffer;
/**
 * Converts an ArrayBuffer to a base64 string.
 *
 * @param buffer - The ArrayBuffer to convert.
 * @returns A Promise that resolves to the base64 string representation of the ArrayBuffer.
 */
export declare function arrayBufferToBase64Single(buffer: ArrayBuffer): Promise<string>;
/**
 * Converts an ArrayBuffer to a base64 string.
 *
 * @param buffer - The ArrayBuffer to convert.
 * @returns A Promise that resolves to an array of base64 strings.
 */
export declare function arrayBufferToBase64(buffer: ArrayBuffer): Promise<string[]>;
export declare function writeString(string: string): Uint8Array;
/**
 * Converts a Uint8Array buffer to a string.
 *
 * @param buffer - The Uint8Array buffer to convert.
 * @returns The converted string.
 */
export declare function readString(buffer: Uint8Array): string;
/**
 * Converts a base64 string or an array of base64 strings to a regular string.
 * @param base64 - The base64 string or an array of base64 strings to convert.
 * @returns The converted regular string.
 * @note This function is used to convert base64 strings to binary strings. And if failed, it returns the original string.
 */
export declare function base64ToString(base64: string | string[]): string;
/**
 * Tries to convert a base64 string to an ArrayBuffer.
 *
 * @param base64 - The base64 string to convert.
 * @returns The converted ArrayBuffer if successful, otherwise false.
 */
export declare function tryConvertBase64ToArrayBuffer(base64: string): ArrayBuffer | false;
