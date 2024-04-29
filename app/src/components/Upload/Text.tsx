'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const UploadText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('my-5 space-y-2', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

UploadText.displayName = 'Upload.Text'

export { UploadText }
