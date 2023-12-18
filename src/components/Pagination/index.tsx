import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useTheme } from '../../Keep/ThemeContext'
import { paginationGenerator } from '../../helpers/rangeWithDots'
import { cn } from '../../helpers/cn'

export interface keepPaginationTheme {
  paginateWithBorder: string
  layout: {
    table: {
      base: string
      span: string
    }
  }
  pages: {
    base: string
    previous: {
      base: string
      icon: string
      title: string
      iconWithText: string
      iconWithOutText: string
    }
    next: {
      base: string
      icon: string
      title: string
      iconWithText: string
      iconWithOutText: string
    }
    selector: {
      base: string
      active: {
        base: string
        circle: string
        roundSquare: string
      }
    }
    prevNextShape: {
      none: string
      circle: string
      round: string
      roundSquare: string
    }
  }
  goTo: {
    base: string
    title: string
    input: string
    withBorder: string
    goToShape: {
      none: string
      circle: string
      round: string
      roundSquare: string
    }
  }
}

export type PaginationProps = PropsWithChildren<Pagination>

/**
 * Pagination component props.
 * @interface Pagination
 * @extends Omit<ComponentProps<'nav'>, 'className'>
 */
interface Pagination extends Omit<ComponentProps<'nav'>, 'className'> {
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
}): JSX.Element => {
  const [numberVal, setNumberVal] = useState<number>(0)
  const firstPage = Math.max(1, currentPage - 4)
  const lastPage = Math.min(currentPage + 4, totalPages)

  const theme = useTheme().theme.pagination
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
                <ArrowLeft className={theme.pages.previous.icon} />
                <span className={theme.pages.previous.title}>Previous</span>
              </>
            )}
            {iconWithOutText && <ArrowLeft className={theme.pages.previous.icon} />}
          </button>
        </li>
        {paginationGenerator(firstPage, lastPage).map((page: string | number, index: number): JSX.Element => {
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
                <ArrowRight className={theme.pages.next.icon} />
              </>
            )}
            {iconWithOutText && <ArrowRight className={theme.pages.next.icon} />}
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
