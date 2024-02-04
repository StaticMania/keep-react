import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface CircleTextProps {
  children?: ReactNode
  className?: string
}

export const CircleText: FC<CircleTextProps> = ({ className, children }) => {
  return <p className={cn(className)}>{children}</p>
}
