'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const NotificationTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-heading-6 font-semibold text-metal-900 dark:text-white', className)} {...props} />
  ),
)
NotificationTitle.displayName = 'Notification.Title'

export { NotificationTitle }
