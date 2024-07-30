'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface EmptyDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

const EmptyDescription = forwardRef<HTMLParagraphElement, EmptyDescriptionProps>(
  ({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <p
        ref={ref}
        className={cn('text-center text-body-3 font-normal text-metal-400 dark:text-metal-300', className)}
        {...props}>
        {children}
      </p>
    )
  },
)
EmptyDescription.displayName = 'Empty.Description'

export { EmptyDescription }
