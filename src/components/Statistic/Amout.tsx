import { FC } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { useStatisticContext } from './StatisticContext'
import { cn } from '../../helpers/cn'

export interface keepAmountTheme {
  base: string
  spacing: string
}

export interface AmountProps {
  children: number
  className?: string
}

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
