import { FC } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface DividerProps {
  className?: string
}

export interface DividerTheme {
  base: string
}

export const NavigationDivider: FC<DividerProps> = ({ className }) => {
  const { divider } = useTheme().theme.navigation
  return <div className={cn(divider.base, className)}></div>
}
