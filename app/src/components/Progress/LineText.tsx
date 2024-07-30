'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useProgressContext } from './Context'
import { progressTheme } from './theme'

export const LineProgressText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { line } = progressTheme
    const { size = 'md' } = useProgressContext()
    return (
      <div ref={ref} {...props} className={cn(line.text.base, line.text.content[size], className)}>
        {children}
      </div>
    )
  },
)

LineProgressText.displayName = 'LineProgress.Text'
