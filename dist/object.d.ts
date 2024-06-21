/**
 * Extracting objects as like filling a template
 * @param template
 * @param obj
 * @returns
 */
export declare function extractObject<T>(template: Partial<T>, obj: T): Partial<T>;
export declare function isObjectDifferent(a: any, b: any, ignoreUndefined?: boolean): boolean;
