import type { PropsWithChildren } from 'react'

/**
 * Interface for excluding a key from a source object.
 */
export interface ExcludeProps {
  key: string
  source: Record<string, unknown>
}

/**
 * Returns a new object with the same properties as the input object, except for the one specified by the `key` parameter.
 * 
 * ```tsx
 * const props = { className: 'foo', id: 'bar' }
 * const newProps = excludeClassName(props)
 * 
 * console.log(newProps) // { id: 'bar' }
 * 
 * // The original object is not mutated.
 * console.log(props) // { className: 'foo', id: 'bar' }
 * ```
 * 
 * @param props - The input object to exclude a property from.
 * @returns A new object with the same properties as the input object, except for the one specified by the `key` parameter.
 */
export const excludeClassName = (props: PropsWithChildren<object>): object => {
  return exclude({
    key: 'className',
    source: props,
  })
}

/**
 * Removes a property from an object and returns the updated object.
 * @param {object} props - The properties to exclude.
 * @param {string} props.key - The key of the property to exclude.
 * @param {object} props.source - The object to remove the property from.
 * @returns {object} The updated object with the property removed.
 * 
 * @example
 * ```tsx
 * const props = { className: 'foo', id: 'bar' }
 * const newProps = exclude({ key: 'className', source: props })
 * 
 * console.log(newProps) // { id: 'bar' }
 * 
 * // The original object is not mutated.
 * console.log(props) // { className: 'foo', id: 'bar' }
 * ```
 */
const exclude = ({ key, source }: ExcludeProps): object => {
  delete source[key]
  return source
}

export default exclude
