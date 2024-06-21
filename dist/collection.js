function* arrayToChunkedArray(arr, chunkLength) {
    const source = [...arr];
    while (source.length) {
        const s = source.splice(0, chunkLength);
        yield s;
    }
}
function unique(arr) {
    return [...new Set(arr)];
}

export { arrayToChunkedArray, unique };
