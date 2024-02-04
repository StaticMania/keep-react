import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface LineTextProps {
  children?: ReactNode
  className?: string
}

export const LineText: FC<LineTextProps> = ({ className, children }) => {
  return <p className={cn(className)}>{children}</p>
}
