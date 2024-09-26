'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const UploadIcon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn('flex size-16 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800', className)}
        ref={ref}>
        {children}
      </div>
    )
  },
)

UploadIcon.displayName = 'UploadIcon'

export { UploadIcon }
