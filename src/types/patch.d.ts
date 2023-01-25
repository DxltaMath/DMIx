/**
 * A patch is an array of two elements used
 * for string replacing.
 * 
 * The first element may be a string or RegExp to find what to replace from.
 * The second element must be a string to set what to replace to.
 * 
 * **Example:**
 * ```ts
 * let q : patch = ['o', 'i']
 * ```
 */
type patch = [string | RegExp | "prepend" | "append", string];

export default patch;
