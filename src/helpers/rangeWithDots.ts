/**
 * Generates an array of page numbers for pagination with dots to represent skipped pages.
 * @param currentPage - The current page number.
 * @param totalPages - The total number of pages.
 * @returns An array of page numbers with dots to represent skipped pages.
 */
export const paginationGenerator = (currentPage: number, totalPages: number) => {
  const shownPages = 5
  const result: Array<string | number> = []
  if (totalPages <= 6) {
    for (let i = totalPages; i > 0; i--) {
      result.unshift(i)
    }
  } else if (currentPage >= totalPages - shownPages) {
    result.push(totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
  } else {
    result.push(currentPage, currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4, '...', totalPages)
  }

  return result
}
