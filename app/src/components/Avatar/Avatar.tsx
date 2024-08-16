'use client'
import { cloneElement, forwardRef, HTMLAttributes, isValidElement } from 'react'
import { cn } from '../../utils/cn'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({ children, asChild, className, ...props }, ref) => {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      itemRef: ref,
      ...props,
    })
  }
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        'relative flex size-12 shrink-0 items-center justify-center rounded-full border border-metal-200 bg-metal-50 dark:border-metal-800 dark:bg-metal-800',
        className,
      )}>
      {children}
    </div>
  )
})

Avatar.displayName = 'Avatar'

export { Avatar }
