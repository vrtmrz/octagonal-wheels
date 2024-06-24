import { arrayBufferToBase64, arrayBufferToBase64Single, base64ToArrayBuffer, base64ToArrayBufferInternalBrowser, base64ToString, readString, writeString } from './binary/base64.js';

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

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    arrayBufferToBase64: arrayBufferToBase64,
    arrayBufferToBase64Single: arrayBufferToBase64Single,
    base64ToArrayBuffer: base64ToArrayBuffer,
    base64ToArrayBufferInternalBrowser: base64ToArrayBufferInternalBrowser,
    base64ToString: base64ToString,
    concatUInt8Array: concatUInt8Array,
    readString: readString,
    writeString: writeString
});

export { concatUInt8Array as c, index as i };
//# sourceMappingURL=index-DXAFmjl6.js.map
