'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { StepContext } from './Context'

export interface StepItemProps extends HTMLProps<HTMLLIElement> {
  active?: boolean
  asChild?: boolean
}

export const StepItem = forwardRef<HTMLLIElement, StepItemProps>(
  ({ className, children, active = false, ...props }, ref) => {
    return (
      <li {...props} ref={ref} className={cn('group flex flex-1 gap-x-2 md:block md:shrink md:basis-0', className)}>
        <StepContext.Provider value={{ active }}>{children}</StepContext.Provider>
      </li>
    )
  },
)
StepItem.displayName = 'StepItem'
