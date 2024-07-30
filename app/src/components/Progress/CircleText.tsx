'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useProgressContext } from './Context'
import { progressTheme } from './theme'

export const CircleProgressText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { circle } = progressTheme
    const { size = 'md' } = useProgressContext()
    return (
      <div ref={ref} {...props} className={cn(circle.text.base, circle.text.content[size], className)}>
        {children}
      </div>
    )
  },
)

CircleProgressText.displayName = 'Progress.CircleText'
