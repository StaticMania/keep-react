import type { PropsWithChildren } from "react";

/**
 * The parameters for the {@link exclude} function.
 * @property key - The key of the property to exclude.
 * @property source - The object to exclude the property from.
 */

export interface ExcludeProps {
  key: string
  source: Record<string, unknown>
}

/**
 * Returns a new object with the same properties as the input object, except for the "className" property.
 * @param props - The input object.
 * @returns A new object with the same properties as the input object, except for the "className" property.
 */
export const excludeClassName = (props: PropsWithChildren<object>): object => {
  return exclude({
    key: "className",
    source: props,
  })
}

const exclude = ({ key, source }: ExcludeProps): object => {
  delete source[key]
  return source
}

export default exclude
