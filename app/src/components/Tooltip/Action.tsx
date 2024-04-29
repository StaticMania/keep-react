'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useTooltipContext } from './Context'

export const TooltipAction = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ children, className }, ref) => {
    const { refs, getReferenceProps } = useTooltipContext()
    return (
      <button
        ref={refs.setReference || ref}
        {...getReferenceProps()}
        className={cn('rounded-lg bg-metal-900 px-3.5 py-2 text-body-5 capitalize text-white', className)}>
        {children}
      </button>
    )
  },
)

TooltipAction.displayName = 'Tooltip.Action'
