import { FC } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { useStatisticContext } from './StatisticContext'
import { cn } from '../../helpers/cn'

export interface keepAmountTheme {
  base: string
  spacing: string
}

/**
 * Props for the Amount component.
 * @interface AmountProps
 */
export interface AmountProps {
  /**
   * The number to be displayed as the amount.
   * @type {number}
   * @default 0
   */
  children: number
  /**
   * Additional CSS class name for styling purposes.
   * @type {string}
   * @default ''
   */
  className?: string
}

/**
 * Formats a number by adding commas as thousand separators.
 *
 * @param number - The number to be formatted.
 * @returns The formatted number as a string.
 */
function formatNumber(number: number): string {
  const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return formattedNumber
}

export const Amount: FC<AmountProps> = ({ children, className }) => {
  const theme = useTheme().theme.statistic
  const { showDollar } = useStatisticContext()
  return (
    <h3 className={cn(theme.amount.base, className)}>
      {showDollar && <span className={theme.amount.spacing}>$</span>}
      <span>{formatNumber(children)}</span>
    </h3>
  )
}
