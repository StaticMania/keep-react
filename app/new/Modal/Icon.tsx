'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { modalTheme } from './theme'

const Icon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(modalTheme.icon, className)} ref={ref}>
        {children}
      </div>
    )
  },
)

Icon.displayName = 'Modal.Icon'

export { Icon }
