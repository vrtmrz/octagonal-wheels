function replaceAll(str, search, replace) {
    if ("replaceAll" in String.prototype) {
        //@ts-ignore
        return str.replaceAll(search, replace);
    }
    return str.split(search).join(replace);
}
function replaceAllPairs(str, ...fromTo) {
    let r = `${str}`;
    for (const [from, to] of fromTo) {
        r = replaceAll(r, from, to);
    }
    return r;
}

export { replaceAll, replaceAllPairs };
