/**
 * Generates a random UUID string.
 * @returns {string} The generated UUID string.
 *
 * @example
 * ```tsx
 * import { uuid } from 'helpers/uuid'
 *
 * const id = uuid()
 *
 * console.log(id) // 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
 * ```
 */
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
