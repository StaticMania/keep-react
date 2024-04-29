'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const NotificationDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-body-4 font-normal text-metal-600', className)} {...props} />
  ),
)
NotificationDescription.displayName = 'Notification.Description'

export { NotificationDescription }
