'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const UploadText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('my-5 space-y-2', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

UploadText.displayName = 'UploadText'

export { UploadText }
