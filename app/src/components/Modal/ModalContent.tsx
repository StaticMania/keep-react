'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const ModalContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'modal-content relative w-[22rem] animate-keep-bounce rounded-xl bg-white p-5 shadow-xLarge dark:bg-metal-900',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

ModalContent.displayName = 'ModalContent'

export { ModalContent }
