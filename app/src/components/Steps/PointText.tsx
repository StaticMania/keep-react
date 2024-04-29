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
          'flex size-10 flex-shrink-0 items-center justify-center rounded-full border-4 border-primary-500 font-medium',
          active ? 'bg-primary-500 text-white' : 'bg-primary-50 text-primary-500',
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
