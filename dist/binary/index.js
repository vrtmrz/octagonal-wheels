export { arrayBufferToBase64, arrayBufferToBase64Single, base64ToArrayBuffer, base64ToArrayBufferInternalBrowser, base64ToString, readString, writeString } from './base64.js';
import '../common/logger.js';

function concatUInt8Array(arrays) {
    const length = arrays.reduce((acc, cur) => acc + cur.length, 0);
    const result = new Uint8Array(length);
    let pos = 0;
    for (const array of arrays) {
        result.set(array, pos);
        pos += array.length;
    }
    return result;
}

export { concatUInt8Array };
