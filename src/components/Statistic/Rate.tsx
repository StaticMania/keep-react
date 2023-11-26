import { FC } from 'react'
import { ArrowUp } from 'phosphor-react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepRateTheme {
  base?: string
}

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
  const theme = useTheme().theme.statistic
  return (
    <p className={cn(theme.rate.base, className)}>
      <span>
        <ArrowUp size="12" weight="bold" />
      </span>
      <span>{children}%</span>
    </p>
  )
}
