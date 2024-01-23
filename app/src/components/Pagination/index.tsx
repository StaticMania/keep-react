'use client'
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { useState } from 'react'
import { cn } from '../../helpers/cn'
import { excludeClassName } from '../../helpers/exclude'
import { paginationGenerator } from '../../helpers/rangeWithDots'
import { paginationTheme } from './theme'

export type PaginationProps = PropsWithChildren<PaginationProperty>

/**
 * Pagination component props.
 * @interface Pagination
 * @extends Omit<ComponentProps<'nav'>, 'className'>
 */
interface PaginationProperty extends Omit<ComponentProps<'nav'>, 'className'> {
  /**
   * The current page number.
   */
  currentPage: number

  /**
   * The shape of the previous/next buttons.
   * Possible values: 'circle', 'round', 'roundSquare', 'none'.
   */
  prevNextShape?: 'circle' | 'round' | 'roundSquare' | 'none'

  /**
   * The shape of the go-to page button.
   * Possible values: 'circle', 'round', 'roundSquare', 'none'.
   */
  goToShape?: 'circle' | 'round' | 'roundSquare' | 'none'

  /**
   * The shape of the active current page indicator.
   * Possible values: 'circle', 'roundSquare'.
   */
  activeCurrentPageShape?: 'circle' | 'roundSquare'

  /**
   * Callback function triggered when the page is changed.
   * @param page - The new page number.
   */
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void

  /**
   * Determines whether to display icons with text.
   */
  iconWithText?: boolean

  /**
   * Determines whether to display icons without text.
   */
  iconWithOutText?: boolean

  /**
   * Determines whether to paginate with borders.
   */
  paginateWithBorder?: boolean

  /**
   * Determines whether to show the go-to page button.
   */
  showGoToPaginate?: boolean

  /**
   * The total number of pages.
   */
  totalPages: number

  /**
   * The style for the next button.
   */
  nextBtnStyle?: string

  /**
   * The style for the previous button.
   */
  previousBtnStyle?: string

  /**
   * The style for the page.
   */
  pageStyle?: string

  /**
   * The additional class name for the component.
   */
  className?: string
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  prevNextShape = 'none',
  goToShape = 'none',
  activeCurrentPageShape = 'roundSquare',
  onPageChange,
  totalPages,
  iconWithText,
  iconWithOutText,
  showGoToPaginate,
  paginateWithBorder,
  nextBtnStyle,
  previousBtnStyle,
  className,
  pageStyle,
  ...props
}): ReactElement => {
  const [numberVal, setNumberVal] = useState<number>(0)
  const firstPage = Math.max(1, currentPage - 4)
  const lastPage = Math.min(currentPage + 4, totalPages)

  const theme = paginationTheme
  const theirProps = excludeClassName(props)

  const goToNextPage = (): void => {
    onPageChange(Math.min(currentPage + 1, totalPages))
  }

  const goToPreviousPage = (): void => {
    onPageChange(Math.max(currentPage - 1, 1))
  }

  return (
    <nav className={cn(paginateWithBorder && theme.paginateWithBorder)} {...theirProps}>
      <ul className={cn(theme.pages.base, className)}>
        <li>
          <button
            className={cn(
              theme.pages.previous.base,
              theme.pages.prevNextShape[prevNextShape],
              iconWithText && theme.pages.previous.iconWithText,
              iconWithOutText && theme.pages.previous.iconWithOutText,
              previousBtnStyle,
            )}
            onClick={() => goToPreviousPage()}>
            {iconWithText && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className={theme.pages.previous.icon} viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
                <span className={theme.pages.previous.title}>Previous</span>
              </>
            )}
            {iconWithOutText && (
              <svg xmlns="http://www.w3.org/2000/svg" className={theme.pages.previous.icon} viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
              </svg>
            )}
          </button>
        </li>
        {paginationGenerator(firstPage, lastPage).map((page: string | number, index: number): ReactElement => {
          return (
            <li aria-current={page === currentPage ? 'page' : undefined} key={index}>
              <button
                className={cn(
                  theme.pages.selector.base,
                  theme.pages.selector.active[activeCurrentPageShape],
                  currentPage === page && theme.pages.selector.active.base,
                  pageStyle,
                )}
                onClick={() => {
                  if (typeof page === 'string') onPageChange(Math.min(currentPage + 2, totalPages))
                  if (typeof page === 'number') onPageChange(page)
                }}>
                {page}
              </button>
            </li>
          )
        })}
        <li>
          <button
            className={cn(
              theme.pages.next.base,
              theme.pages.prevNextShape[prevNextShape],
              iconWithText && theme.pages.next.iconWithText,
              iconWithOutText && theme.pages.next.iconWithOutText,
              nextBtnStyle,
            )}
            onClick={() => goToNextPage()}>
            {iconWithText && (
              <>
                <span className={theme.pages.next.title}>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={theme.pages.next.icon} viewBox="0 0 256 256">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </>
            )}
            {iconWithOutText && (
              <svg xmlns="http://www.w3.org/2000/svg" className={theme.pages.next.icon} viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            )}
          </button>
        </li>
        {showGoToPaginate && (
          <li className={cn(theme.goTo.base, paginateWithBorder && theme.goTo.withBorder)}>
            <span className="text-metal-200">/</span>
            <span className={cn(theme.goTo.title)}>Go to</span>
            <input
              className={cn(theme.goTo.input, theme.goTo.goToShape[goToShape])}
              type="number"
              placeholder="Number"
              value={numberVal}
              onChange={(e) => setNumberVal(parseInt(e.target.value, 10))}
              onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  e.preventDefault()
                  onPageChange(numberVal)
                }
              }}
            />
          </li>
        )}
      </ul>
    </nav>
  )
}
