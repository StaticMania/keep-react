'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export const SliderRange = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn('mt-3 flex items-center justify-between', className)}>
        {children}
      </div>
    )
  },
)

SliderRange.displayName = 'Slider.Box'
