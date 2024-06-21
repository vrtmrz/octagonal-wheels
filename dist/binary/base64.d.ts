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
/**
 *  Super fast Text Encoder / Decoder alternative.
 * @param {string} string - The string to convert.
 * @returns {Uint8Array} The Uint8Array buffer representing the string.
 * @see https://gist.github.com/kawanet/a66a0e2657464c57bcff2249286d3a24
 * @see https://qiita.com/kawanet/items/52062b0c86597f7dee7d
 *
 * remark: This is a super fast TextEncoder alternative.
 * todo: When Capacitor or Electron is upgraded, check and reappraise this.
 */
export declare const writeString: (string: string) => Uint8Array;
/**
 * Converts a Uint8Array buffer to a string.
 *
 * @param buffer - The Uint8Array buffer to convert.
 * @returns The converted string.
 */
export declare const readString: (buffer: Uint8Array) => string;
/**
 * Converts a base64 string or an array of base64 strings to a regular string.
 * @param base64 - The base64 string or an array of base64 strings to convert.
 * @returns The converted regular string.
 * @note This function is used to convert base64 strings to binary strings. And if failed, it returns the original string.
 */
export declare function base64ToString(base64: string | string[]): string;
