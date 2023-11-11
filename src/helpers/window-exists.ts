/**
 * Checks if the window object exists.
 * @returns {boolean} - Returns true if the window object exists, false otherwise.
 * 
 * @example
 * ```tsx
 * import { windowExists } from 'helpers/window-exists'
 * 
 * if (windowExists()) {
 *  // Do something with the window object.
 * }
 * 
 * // Or
 * 
 * if (typeof window !== 'undefined') {
 * // Do something with the window object.
 * }
 * 
 * ```
 */
export const windowExists: () => boolean = () => {
  return typeof window !== 'undefined'
}
