'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../helpers/cn'
import { useStepContext } from './Context'

export const StepDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    const { active } = useStepContext()
    return (
      <p
        {...props}
        ref={ref}
        className={cn('mt-2 text-body-4 font-normal ', active ? 'text-primary-500' : 'text-metal-600', className)}>
        {children}
      </p>
    )
  },
)

StepDescription.displayName = 'StepDescription'
