'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface NotificationDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

const NotificationDescription = forwardRef<HTMLParagraphElement, NotificationDescriptionProps>(
  ({ className, asChild, children, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <p ref={ref} className={cn('text-body-4 font-normal text-metal-600 dark:text-metal-300', className)} {...props}>
        {children}
      </p>
    )
  },
)

NotificationDescription.displayName = 'NotificationDescription'

export { NotificationDescription }
