'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>, ref: Ref<HTMLParagraphElement>) => {
    return (
      <p {...props} className={cn(alertTheme.description.base, props.className)} ref={ref}>
        {children}
      </p>
    )
  },
)

AlertDescription.displayName = 'Alert.Description'

export { AlertDescription }
