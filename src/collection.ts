
/**
 * Converts an array into a chunked array.
 * @param arr - The input array.
 * @param chunkLength - The length of each chunk.
 * @returns A generator that yields chunked arrays.
 */
export function* arrayToChunkedArray<T>(arr: T[], chunkLength: number) {
    const source = [...arr];
    while (source.length) {
        const s = source.splice(0, chunkLength);
        yield s;
    }
}

/**
 * Returns an array with unique elements from the input array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The input array.
 * @returns {T[]} - An array with unique elements.
 */
export function unique<T>(arr: T[]) {
    return [...new Set<T>(arr)]
}