'use client'
import { HTMLAttributes, Ref, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, asChild, ...props }, ref: Ref<HTMLDivElement>) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <div {...props} className={cn('flex flex-col gap-1', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ModalHeader.displayName = 'ModalHeader'

export { ModalHeader }
