'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
}

const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ children, className, asChild, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <h1 className={cn('text-body-1 font-medium text-metal-900 dark:text-white', className)} {...props} ref={ref}>
        {children}
      </h1>
    )
  },
)

ModalTitle.displayName = 'ModalTitle'

export { ModalTitle }
