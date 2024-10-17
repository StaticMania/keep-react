'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const StepsContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn('row space-y-1.5 pb-5 md:mt-3 md:grow-0', className)}>
        {children}
      </div>
    )
  },
)

StepsContent.displayName = 'StepsContent'

export { StepsContent }
