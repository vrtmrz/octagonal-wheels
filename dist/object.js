/**
 * Extracting objects as like filling a template
 * @param template
 * @param obj
 * @returns
 */
function extractObject(template, obj) {
    const ret = { ...template };
    for (const key in ret) {
        ret[key] = obj[key];
    }
    return ret;
}
function isObjectDifferent(a, b, ignoreUndefined = false) {
    if (typeof a !== typeof b) {
        return true;
    }
    if (typeof a === "object") {
        if (a === null || b === null) {
            return a !== b;
        }
        const keys = [...new Set([...Object.keys(a), ...Object.keys(b)])];
        if (ignoreUndefined) {
            return keys.map(key => a?.[key] !== undefined && b?.[key] !== undefined && isObjectDifferent(a?.[key], b?.[key])).some(e => e == true);
        }
        return keys.map(key => isObjectDifferent(a?.[key], b?.[key])).some(e => e == true);
    }
    else {
        return a !== b;
    }
}

export { extractObject, isObjectDifferent };
