'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const StepContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('max-w-xs grow pb-5 md:mt-3 md:grow-0', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

StepContent.displayName = 'StepContent'

export { StepContent }
