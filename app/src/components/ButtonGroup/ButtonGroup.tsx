'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const ButtonGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('flex items-center', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }
