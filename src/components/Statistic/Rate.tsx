import { FC } from 'react'
import { ArrowUp } from 'phosphor-react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepRateTheme {
  base?: string
}

export interface RateProps {
  children?: string
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
