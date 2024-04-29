'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../helpers/cn'
import { useStepContext } from './Context'

export const StepTitle = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => {
    const { active } = useStepContext()
    return (
      <h1
        {...props}
        ref={ref}
        className={cn('block text-body-3 font-medium ', active ? 'text-primary-500' : 'text-metal-800', className)}>
        {children}
      </h1>
    )
  },
)

StepTitle.displayName = 'StepTitle'
