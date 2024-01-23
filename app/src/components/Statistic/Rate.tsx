import { FC } from 'react'
import { cn } from '../../helpers/cn'
import { statisticsTheme } from './theme'

/**
 * Props for the Rate component.
 * @interface RateProps
 */
export interface RateProps {
  /**
   * The content of the Rate component.
   * @type {string}
   * @default ''
   */
  children?: string
  /**
   * Additional class name for the Rate component.
   * @type {string}
   */
  className?: string
}

export const Rate: FC<RateProps> = ({ children, className }) => {
  const theme = statisticsTheme
  return (
    <p className={cn(theme.rate.base, className)}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 256 256">
          <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path>
        </svg>
      </span>
      <span>{children}%</span>
    </p>
  )
}
