'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const ModalOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'keep-modal fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-80',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

ModalOverlay.displayName = 'ModalOverlay'

export { ModalOverlay }
