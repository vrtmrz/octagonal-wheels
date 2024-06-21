import { describe, it, expect } from 'vitest';
import { replaceAll, replaceAllPairs } from './string';

describe('replaceAll', () => {
    it('should replace all occurrences of a substring with another substring', () => {
        const str = 'Hello, World!';
        const search = 'o';
        const replace = 'x';
        const result = replaceAll(str, search, replace);
        expect(result).to.equal('Hellx, Wxrld!');
    });

    it('should replace all occurrences of a substring with another substring (case-sensitive)', () => {
        const str = 'Hello, World!';
        const search = 'o';
        const replace = 'x';
        const result = replaceAll(str, search, replace);
        expect(result).to.equal('Hellx, Wxrld!');
    });

    it('should replace all occurrences of a substring with another substring (multiple replacements)', () => {
        const str = 'Hello, World!';
        const search = 'o';
        const replace = 'x';
        const result = replaceAll(str, search, replace);
        expect(result).to.equal('Hellx, Wxrld!');
    });
});

describe('replaceAllPairs', () => {
    it('should replace all occurrences of multiple substrings with their corresponding replacements', () => {
        const str = 'Hello, World!';
        const replacements = [
            ['o', 'x'],
            ['l', 'y'],
            ['d', 'z']
        ] as [from: string, to: string][];
        const result = replaceAllPairs(str, ...replacements);
        expect(result).to.equal('Heyyx, Wxryz!');
    });

    it('should replace all occurrences of multiple substrings with their corresponding replacements (case-sensitive)', () => {
        const str = 'Hello, World!';
        const replacements = [
            ['o', 'x'],
            ['L', 'Y'],
            ['D', 'Z']
        ] as [from: string, to: string][];
        const result = replaceAllPairs(str, ...replacements);
        expect(result).to.equal('Hellx, Wxrld!');
    });

    it('should replace all occurrences of multiple substrings with their corresponding replacements (multiple replacements)', () => {
        const str = 'Hello, World!';
        const replacements = [
            ['o', 'x'],
            ['l', 'y'],
            ['x', 'l']
        ] as [from: string, to: string][];
        const result = replaceAllPairs(str, ...replacements);
        expect(result).to.equal('Heyyl, Wlryd!');
    });
});