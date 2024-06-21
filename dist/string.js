/**
 * Replaces all occurrences of a substring in a string with a new substring.
 * If the `replaceAll` method is available, it uses that method. Otherwise, it splits the string and joins it with the new substring.
 *
 * @param {string} str - The original string.
 * @param {string} search - The substring to be replaced.
 * @param {string} replace - The new substring to replace the occurrences of `search`.
 * @returns {string} The modified string with all occurrences of `search` replaced by `replace`.
 */
function replaceAll(str, search, replace) {
    if ("replaceAll" in String.prototype) {
        //@ts-ignore
        return str.replaceAll(search, replace);
    }
    return str.split(search).join(replace);
}
/**
 * Replaces all occurrences of multiple pairs of substrings in a string.
 *
 * @param str - The input string.
 * @param fromTo - An array of tuples representing the pairs of substrings to be replaced.
 * Each tuple should contain two elements: the substring to be replaced and the replacement substring.
 * @returns The modified string with all occurrences of the specified substrings replaced.
 */
function replaceAllPairs(str, ...fromTo) {
    let r = `${str}`;
    for (const [from, to] of fromTo) {
        r = replaceAll(r, from, to);
    }
    return r;
}

export { replaceAll, replaceAllPairs };
