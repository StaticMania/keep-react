import { FC } from 'react'
import { cn } from '../../helpers/cn'

export interface NavBrandProps {
  children?: React.ReactNode
  className?: string
}

export const NavigationBrand: FC<NavBrandProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}
