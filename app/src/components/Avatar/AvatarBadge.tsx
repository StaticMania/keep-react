'use client'
import { cloneElement, forwardRef, HTMLAttributes, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface AvatarBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean
}

const AvatarBadge = forwardRef<HTMLSpanElement, AvatarBadgeProps>(({ children, className, asChild, ...props }, ref) => {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      itemRef: ref,
      ...props,
    })
  }
  return (
    <span
      ref={ref}
      {...props}
      className={cn('absolute bottom-0 right-0 size-3 rounded-full bg-success-500', className)}>
      {children}
    </span>
  )
})

AvatarBadge.displayName = 'AvatarBadge'

export { AvatarBadge }
