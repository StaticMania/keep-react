'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
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
      <h1 ref={ref} className={cn('text-heading-6 font-semibold text-metal-800 dark:text-white', className)} {...props}>
        {children}
      </h1>
    )
  },
)

CardTitle.displayName = 'CardTitle'

export { CardTitle }
