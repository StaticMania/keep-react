'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface EmptyTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
}

const EmptyTitle = forwardRef<HTMLParagraphElement, EmptyTitleProps>(
  ({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <h1 ref={ref} className={cn('text-heading-5 font-medium text-metal-700 dark:text-white', className)} {...props}>
        {children}
      </h1>
    )
  },
)
EmptyTitle.displayName = 'EmptyTitle'

export { EmptyTitle }
