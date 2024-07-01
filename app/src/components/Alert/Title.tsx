'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

const AlertTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>, ref: Ref<HTMLParagraphElement>) => {
    return (
      <p {...props} className={cn(alertTheme.title.base, className)} ref={ref}>
        {children}
      </p>
    )
  },
)

AlertTitle.displayName = 'Alert.Title'

export { AlertTitle }
