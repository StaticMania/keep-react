'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, asChild, className, ...props }, ref) => {
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
CardDescription.displayName = 'CardDescription'

export { CardDescription }
