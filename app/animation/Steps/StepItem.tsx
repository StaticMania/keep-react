'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '~/app/src/utils/cn'

const StepItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="relative">
        <div
          className={cn(
            'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-metal-200 text-sm font-semibold text-metal-200 transition-colors duration-300',
            className,
          )}>
          <span style={{ opacity: 1, transform: 'none' }}>{children}</span>
        </div>
      </div>
    )
  },
)

StepItem.displayName = 'StepItem'

export { StepItem }
