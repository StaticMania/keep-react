import { ArrowUp } from 'phosphor-react'
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
        <ArrowUp size="12" weight="bold" />
      </span>
      <span>{children}%</span>
    </p>
  )
}
