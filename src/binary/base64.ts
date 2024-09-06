import { Logger, LOG_LEVEL_VERBOSE } from "../common/logger";
/**
 * Converts a base64 string or an array of base64 strings to an ArrayBuffer.
 * @param base64 - The base64 string or an array of base64 strings to convert.
 * @returns The converted ArrayBuffer.
 */
export function base64ToArrayBuffer(base64: string | string[]): ArrayBuffer {
    if (typeof (base64) == "string") return base64ToArrayBufferInternalBrowser(base64);
    const bufItems = base64.map(e => base64ToArrayBufferInternalBrowser(e));
    const len = bufItems.reduce((p, c) => p + c.byteLength, 0);
    const joinedArray = new Uint8Array(len);
    let offset = 0;
    bufItems.forEach(e => {
        joinedArray.set(new Uint8Array(e), offset);
        offset += e.byteLength;
    });
    return joinedArray.buffer;
}


/**
 * Converts a base64 string to an ArrayBuffer in a browser environment.
 * 
 * @param base64 - The base64 string to convert.
 * @returns The converted ArrayBuffer.
 */
export function base64ToArrayBufferInternalBrowser(base64: string): ArrayBuffer {
    try {
        const binary_string = globalThis.atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    } catch (ex) {
        Logger("Base64 Decode error", LOG_LEVEL_VERBOSE);
        Logger(ex, LOG_LEVEL_VERBOSE);
        return new ArrayBuffer(0);
    }
}

// Base64 Encoding

const encodeChunkSize = 3 * 50000000;


/**
 * Converts an ArrayBuffer or Uint8Array to a base64-encoded string in a browser environment.
 * @param buffer The input buffer to be converted.
 * @returns A Promise that resolves to the base64-encoded string.
 */
function arrayBufferToBase64internalBrowser(buffer: DataView | Uint8Array): Promise<string> {
    return new Promise((res, rej) => {
        const blob = new Blob([buffer], { type: "application/octet-binary" });
        const reader = new FileReader();
        reader.onload = function (evt) {
            const dataURI = evt.target?.result?.toString() || "";
            if (buffer.byteLength != 0 && (dataURI == "" || dataURI == "data:")) return rej(new TypeError("Could not parse the encoded string"));
            const result = dataURI.substring(dataURI.indexOf(",") + 1);
            res(result);
        };
        reader.readAsDataURL(blob);
    });
}

/**
 * Converts an ArrayBuffer to a base64 string.
 * 
 * @param buffer - The ArrayBuffer to convert.
 * @returns A Promise that resolves to the base64 string representation of the ArrayBuffer.
 */
export async function arrayBufferToBase64Single(buffer: ArrayBuffer): Promise<string> {
    const buf = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    if (buf.byteLength < QUANTUM) return btoa(String.fromCharCode.apply(null, [...buf]));
    return await arrayBufferToBase64internalBrowser(buf);
}
/**
 * Converts an ArrayBuffer to a base64 string.
 * 
 * @param buffer - The ArrayBuffer to convert.
 * @returns A Promise that resolves to an array of base64 strings.
 */
export async function arrayBufferToBase64(buffer: ArrayBuffer): Promise<string[]> {
    const buf = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    if (buf.byteLength < QUANTUM) return [btoa(String.fromCharCode.apply(null, [...buf]))];
    const bufLen = buf.byteLength;
    const pieces = [] as string[];
    let idx = 0;
    do {
        const offset = idx * encodeChunkSize;
        const pBuf = new DataView(buf.buffer, offset, Math.min(encodeChunkSize, buf.byteLength - offset));
        pieces.push(await arrayBufferToBase64internalBrowser(pBuf));
        idx++;
    } while (idx * encodeChunkSize < bufLen);
    return pieces;
}


//
// Safari's JavaScriptCOre hardcoded the argument limit to 65536
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
const QUANTUM = 32768;

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

const te = new TextEncoder();
const td = new TextDecoder();

export function writeString(string: string): Uint8Array {
    // Prepare enough buffer.
    if (string.length > 128) return te.encode(string);
    const buffer = new Uint8Array(string.length * 4);
    const length = string.length;
    let index = 0;
    let chr = 0;
    let idx = 0;
    while (idx < length) {
        chr = string.charCodeAt(idx++);
        if (chr < 128) {
            buffer[index++] = chr;
        } else if (chr < 0x800) {
            // 2 bytes
            buffer[index++] = 0xC0 | (chr >>> 6);
            buffer[index++] = 0x80 | (chr & 0x3F);
        } else if (chr < 0xD800 || chr > 0xDFFF) {
            // 3 bytes
            buffer[index++] = 0xE0 | (chr >>> 12);
            buffer[index++] = 0x80 | ((chr >>> 6) & 0x3F);
            buffer[index++] = 0x80 | (chr & 0x3F);
        } else {
            // 4 bytes - surrogate pair
            chr = (((chr - 0xD800) << 10) | (string.charCodeAt(idx++) - 0xDC00)) + 0x10000;
            buffer[index++] = 0xF0 | (chr >>> 18);
            buffer[index++] = 0x80 | ((chr >>> 12) & 0x3F);
            buffer[index++] = 0x80 | ((chr >>> 6) & 0x3F);
            buffer[index++] = 0x80 | (chr & 0x3F);
        }
    }
    return buffer.slice(0, index);
}

/**
 * Converts a Uint8Array buffer to a string.
 * 
 * @param buffer - The Uint8Array buffer to convert.
 * @returns The converted string.
 */
export function readString(buffer: Uint8Array): string {
    const length = buffer.length;
    if (length > 128) return td.decode(buffer);
    let index = 0;
    const end = length;
    let string = "";
    while (index < end) {
        const chunk = [];
        const cEnd = Math.min(index + QUANTUM, end);
        while (index < cEnd) {
            const chr = buffer[index++];
            if (chr < 128) { // 1 byte
                chunk.push(chr);
            } else if ((chr & 0xE0) === 0xC0) { // 2 bytes
                chunk.push((chr & 0x1F) << 6 |
                    (buffer[index++] & 0x3F));
            } else if ((chr & 0xF0) === 0xE0) { // 3 bytes
                chunk.push((chr & 0x0F) << 12 |
                    (buffer[index++] & 0x3F) << 6 |
                    (buffer[index++] & 0x3F));
            } else if ((chr & 0xF8) === 0xF0) { // 4 bytes
                let code = (chr & 0x07) << 18 |
                    (buffer[index++] & 0x3F) << 12 |
                    (buffer[index++] & 0x3F) << 6 |
                    (buffer[index++] & 0x3F);
                if (code < 0x010000) {
                    chunk.push(code);
                } else { // surrogate pair
                    code -= 0x010000;
                    chunk.push((code >>> 10) + 0xD800, (code & 0x3FF) + 0xDC00);
                }
            }
        }
        string += String.fromCharCode(...chunk);
    }
    return string;
}


/**
 * Converts a base64 string or an array of base64 strings to a regular string.
 * @param base64 - The base64 string or an array of base64 strings to convert.
 * @returns The converted regular string.
 * @note This function is used to convert base64 strings to binary strings. And if failed, it returns the original string.
 */
export function base64ToString(base64: string | string[]): string {
    try {
        if (typeof base64 != "string") return base64.map(e => base64ToString(e)).join("");
        const binary_string = atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return readString(bytes);
    } catch (ex) {
        Logger("Base64 To String error", LOG_LEVEL_VERBOSE);
        Logger(ex, LOG_LEVEL_VERBOSE);
        if (typeof base64 != "string") return base64.join("");
        return base64
    }
}

const regexpBase64 = /^[A-Za-z0-9+/]+=*$/;

/**
 * Tries to convert a base64 string to an ArrayBuffer.
 * 
 * @param base64 - The base64 string to convert.
 * @returns The converted ArrayBuffer if successful, otherwise false.
 */
export function tryConvertBase64ToArrayBuffer(base64: string): ArrayBuffer | false {
    try {
        const b64F = base64.replace(/\r|\n/g, "");
        if (!regexpBase64.test(b64F)) {
            return false;
        }

        const binary_string = globalThis.atob(b64F);
        if (globalThis.btoa(binary_string) !== b64F) {
            return false;
        }
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    } catch (ex) {
        return false;
    }
}