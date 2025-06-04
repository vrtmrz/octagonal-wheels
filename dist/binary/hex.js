const revMap = {};
const numMap = {};
for (let i = 0; i < 256; i++) {
    revMap[`00${i.toString(16)}`.slice(-2)] = i;
    numMap[i] = `00${i.toString(16)}`.slice(-2);
}
/**
 * Converts a hexadecimal string to a Uint8Array.
 * Each pair of characters in the input string represents a byte in the output Uint8Array.
 *
 * @param src - The hexadecimal string to convert.
 * @returns The Uint8Array representation of the input string.
 */
function hexStringToUint8Array(src) {
    const len = src.length / 2;
    const ret = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = revMap[src[i * 2] + src[i * 2 + 1]];
    }
    return ret;
}
/**
 * Converts a Uint8Array to a hexadecimal string representation.
 *
 * @param src - The Uint8Array to convert.
 * @returns The hexadecimal string representation of the Uint8Array.
 */
function uint8ArrayToHexString(src) {
    return [...src].map((e) => numMap[e]).join("");
}

export { hexStringToUint8Array, uint8ArrayToHexString };
//# sourceMappingURL=hex.js.map
