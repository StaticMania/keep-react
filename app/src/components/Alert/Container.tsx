'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(alertTheme.container.base, props.className)} ref={ref}>
        {children}
      </div>
    )
  },
)

Container.displayName = 'Alert.Container'

export { Container }
