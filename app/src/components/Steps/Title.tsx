'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../utils/cn'
import { useStepContext } from './Context'

export const StepTitle = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => {
    const { active } = useStepContext()
    return (
      <h1
        {...props}
        ref={ref}
        className={cn(
          'block text-body-3 font-medium ',
          active ? 'opacity-1 text-metal-900 dark:text-white' : 'text-metal-600 opacity-50 dark:text-metal-300',
          className,
        )}>
        {children}
      </h1>
    )
  },
)

StepTitle.displayName = 'StepTitle'
