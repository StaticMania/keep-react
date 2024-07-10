'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => (
    <div {...props} className={cn(className)} ref={ref}>
      {children}
    </div>
  ),
)

CardHeader.displayName = 'CardHeader'

export { CardHeader }
