'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface NotificationTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
}

const NotificationTitle = forwardRef<HTMLParagraphElement, NotificationTitleProps>(
  ({ className, children, asChild, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <h1 ref={ref} className={cn('text-heading-6 font-semibold text-metal-900 dark:text-white', className)} {...props}>
        {children}
      </h1>
    )
  },
)
NotificationTitle.displayName = 'NotificationTitle'

export { NotificationTitle }
