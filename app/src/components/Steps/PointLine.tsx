'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useStepContext } from './Context'

const StepPointLine = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { active } = useStepContext()
    return (
      <div
        {...props}
        className={cn(
          'mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-[2px] md:w-full md:flex-1',
          active ? 'bg-metal-900 dark:bg-white' : 'bg-metal-50 dark:bg-metal-800',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

StepPointLine.displayName = 'StepPointLine'

export { StepPointLine }
