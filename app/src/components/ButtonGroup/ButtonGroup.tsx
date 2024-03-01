'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const ButtonGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('flex items-center', props.className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ButtonGroup.displayName = 'Button.Group'

export { ButtonGroup }
