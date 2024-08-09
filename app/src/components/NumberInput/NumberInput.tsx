'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const NumberInput = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'flex h-12 max-w-sm items-center justify-between rounded-lg border border-metal-100 bg-white px-5',
          className,
        )}>
        {children}
      </div>
    )
  },
)

NumberInput.displayName = 'NumberInput'

export { NumberInput }
