'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { modalTheme } from './theme'

const ModalFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(modalTheme.footer, className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ModalFooter.displayName = 'Modal.Footer'

export { ModalFooter }
