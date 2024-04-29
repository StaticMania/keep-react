'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useStepContext } from './Context'

const StepPointLine = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { active } = useStepContext()
    return (
      <div
        {...props}
        className={cn(
          'mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-[2px] md:w-full md:flex-1',
          active ? 'bg-primary-500' : 'bg-primary-50',
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
