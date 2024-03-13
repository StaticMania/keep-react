import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface SliderRangeProps {
  children?: ReactNode
  className?: string
}

export const SliderRange: FC<SliderRangeProps> = ({ children, className }) => {
  return <div className={cn('mt-3 flex items-center justify-between', className)}>{children}</div>
}
