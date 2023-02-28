import type patch from "~types/patch";

/**
 * A plugin is an array of patches.
 * Often used to achive a certain change in DeltaMath.
 * 
 * **Example:**
 * ```ts
 * let d : plugin = [['r', 'x'], ['e', 'p']]
 * ```
 */
type plugin = patch[];

export default plugin;