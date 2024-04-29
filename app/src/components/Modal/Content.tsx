'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const ModalContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ModalContent.displayName = 'Modal.Content'

export { ModalContent }
