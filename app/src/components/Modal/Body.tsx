'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { modalTheme } from './theme'

const ModalBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(modalTheme.body, className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ModalBody.displayName = 'Modal.Body'

export { ModalBody }
