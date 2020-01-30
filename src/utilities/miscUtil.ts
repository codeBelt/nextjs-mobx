// A function that performs no operations.
export const noop = Function.prototype as () => void;

export const isDefined = <T>(t: T | null | undefined): t is T => t != null;

export const uniq = <T>(array: T[]) => Array.from(new Set(array));
