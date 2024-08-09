'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface CardTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <p ref={ref} className={cn('text-heading-6 font-semibold text-metal-800 dark:text-white', className)} {...props}>
        {children}
      </p>
    )
  },
)

CardTitle.displayName = 'CardTitle'

export { CardTitle }
