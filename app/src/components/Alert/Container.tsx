'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

const AlertContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(alertTheme.container.base, className)} ref={ref}>
        {children}
      </div>
    )
  },
)

AlertContainer.displayName = 'Alert.Container'

export { AlertContainer }
