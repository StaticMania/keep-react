'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useStepContext } from './Context'

const StepPointText = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLSpanElement>) => {
    const { active } = useStepContext()
    return (
      <span
        {...props}
        className={cn(
          'flex size-10 flex-shrink-0 items-center justify-center rounded-full border-4 border-metal-900 font-medium',
          active ? 'bg-metal-900 text-white dark:bg-metal-800' : 'bg-metal-50 text-metal-900 dark:bg-white/50',
          className,
        )}
        ref={ref}>
        {children}
      </span>
    )
  },
)

StepPointText.displayName = 'StepPointText'

export { StepPointText }
