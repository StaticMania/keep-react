'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const Icon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn('flex h-16 w-16 items-center justify-center rounded-full bg-primary-50', className)}
        ref={ref}>
        {children}
      </div>
    )
  },
)

Icon.displayName = 'Upload.Icon'

export { Icon }
