import { FC } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the NavigationBrand component.
 * @interface NavBrandProps
 */
export interface NavBrandProps {
  /**
   * The children of the NavigationBrand component.
   */
  children?: React.ReactNode

  /**
   * The class name for the NavigationBrand component.
   */
  className?: string
}

export const NavigationBrand: FC<NavBrandProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}
