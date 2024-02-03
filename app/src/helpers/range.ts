/**
 * Returns an array of numbers within the specified range.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @returns An array of numbers within the specified range.
 */
export const renge = (start: number, end: number): number[] => {
  if (start >= end) {
    return []
  }
  return [...Array.from(Array(end - start + 1).keys())].map((key: number): number => key + start)
}
