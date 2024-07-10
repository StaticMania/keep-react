'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useAlertContext } from './AlertContext'
import { alertTheme } from './theme'

const AlertTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>, ref: Ref<HTMLParagraphElement>) => {
    const { title } = alertTheme
    const { color = 'secondary' } = useAlertContext()
    return (
      <p {...props} className={cn(title.base, title.color[color], className)} ref={ref}>
        {children}
      </p>
    )
  },
)

AlertTitle.displayName = 'AlertTitle'

export { AlertTitle }
