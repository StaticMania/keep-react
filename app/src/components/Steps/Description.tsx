'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../utils/cn'
import { useStepContext } from './Context'

export const StepDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    const { active } = useStepContext()
    return (
      <p
        {...props}
        ref={ref}
        className={cn(
          'mt-2 text-body-4 font-normal ',
          active ? 'text-metal-900 opacity-100 dark:text-white/60' : 'text-metal-600 opacity-50 dark:text-metal-300',
          className,
        )}>
        {children}
      </p>
    )
  },
)

StepDescription.displayName = 'StepDescription'
