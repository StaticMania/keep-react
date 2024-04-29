'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('p-6', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

CardContent.displayName = 'Card.Content'

export { CardContent }
