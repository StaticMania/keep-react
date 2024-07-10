'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useAlertContext } from './AlertContext'
import { alertTheme } from './theme'

const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>, ref: Ref<HTMLParagraphElement>) => {
    const { description } = alertTheme
    const { color = 'secondary' } = useAlertContext()
    return (
      <p {...props} className={cn(description.color[color], description.base, className)} ref={ref}>
        {children}
      </p>
    )
  },
)

AlertDescription.displayName = 'AlertDescription'

export { AlertDescription }
