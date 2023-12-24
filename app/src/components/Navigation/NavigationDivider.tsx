import { FC } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the NavigationDivider component.
 * @interface DividerProps
 */
export interface DividerProps {
  /**
   * Additional class name for the navigation divider.
   */
  className?: string
}

export interface DividerTheme {
  base: string
}

export const NavigationDivider: FC<DividerProps> = ({ className }) => {
  const { divider } = useTheme().theme.navigation
  return <div className={cn(divider.base, className)}></div>
}
