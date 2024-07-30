'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const AvatarGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} {...props} className={cn('flex items-center -space-x-3', className)}>
        {children}
      </div>
    )
  },
)

AvatarGroup.displayName = 'AvatarGroup'

export { AvatarGroup }
