// OK.
import { arrayToChunkedArray, unique } from './collection';
import { describe, expect, test } from 'vitest'

describe('unique function', () => {
    test('should return array with unique elements', () => {
        const array = [1, 2, 2, 3, 4, 4, 5];
        const result = unique(array);
        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
    test('should return array with unique elements (With some types)', () => {
        const array = [1, "A", 2, 3, 4, 4, 5, "A"];
        const result = unique(array);
        expect(result).to.deep.equal([1, "A", 2, 3, 4, 5]);
    });
});

describe('arrayToChunkedArray function', () => {
    test('should return an empty array when input array is empty', () => {
        const array: number[] = [];
        const chunkLength = 3;
        const result = [...arrayToChunkedArray(array, chunkLength)];
        expect(result).to.deep.equal([]);
    });

    test('should return the input array as a single chunk when chunk length is greater than or equal to the array length', () => {
        const array = [1, 2, 3, 4, 5];
        const chunkLength = 5;
        const result = [...arrayToChunkedArray(array, chunkLength)];
        expect(result).to.deep.equal([[1, 2, 3, 4, 5]]);
    });

    test('should return the input array split into chunks of the specified length', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const chunkLength = 3;
        const result = [...arrayToChunkedArray(array, chunkLength)];
        expect(result).to.deep.equal([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
    });
});