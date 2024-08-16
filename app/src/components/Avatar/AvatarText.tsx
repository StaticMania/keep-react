'use client'
import { cloneElement, forwardRef, HTMLAttributes, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface AvatarTextProps extends HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean
}

const AvatarText = forwardRef<HTMLSpanElement, AvatarTextProps>(({ children, className, asChild, ...props }, ref) => {
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
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full text-body-4 font-semibold text-metal-900 dark:text-white',
        className,
      )}>
      {children}
    </span>
  )
})

AvatarText.displayName = 'AvatarText'

export { AvatarText }
