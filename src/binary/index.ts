
export function concatUInt8Array(arrays: Uint8Array[]): Uint8Array {
    const length = arrays.reduce((acc, cur) => acc + cur.length, 0);
    const result = new Uint8Array(length);
    let pos = 0;
    for (const array of arrays) {
        result.set(array, pos);
        pos += array.length;
    }
    return result;
}

const isIndexDBCmpExist = typeof window?.indexedDB?.cmp !== "undefined";



export * from "./base64"