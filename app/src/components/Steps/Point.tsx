'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const StepPoint = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'flex min-h-7 min-w-7 flex-col items-center align-middle text-body-5 md:inline-flex md:w-full md:flex-row md:flex-wrap',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

StepPoint.displayName = 'StepPoint'

export { StepPoint }
