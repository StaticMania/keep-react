'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface ModalDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ children, className, asChild, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <p className={cn('text-body-4 font-normal text-metal-600 dark:text-metal-300', className)} {...props} ref={ref}>
        {children}
      </p>
    )
  },
)

ModalDescription.displayName = 'ModalDescription'

export { ModalDescription }
