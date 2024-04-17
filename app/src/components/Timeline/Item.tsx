'use client'
import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../helpers/cn'

export const Item = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLLIElement>) => {
    return (
      <li {...props} className={cn('max-w-max px-4', className)} ref={ref}>
        {children}
      </li>
    )
  },
)

Item.displayName = 'Timeline.Item'
