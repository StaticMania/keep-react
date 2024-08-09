'use client'
import { HTMLAttributes, Ref, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, asChild, ...props }, ref: Ref<HTMLDivElement>) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <div {...props} className={cn('flex items-center gap-3', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ModalFooter.displayName = 'ModalFooter'

export { ModalFooter }
