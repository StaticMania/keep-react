import { FC } from 'react'
import { cn } from '../../helpers/cn'
import { navigationTheme } from './theme'

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

export const NavigationDivider: FC<DividerProps> = ({ className }) => {
  const { divider } = navigationTheme
  return <div className={cn(divider.base, className)}></div>
}
