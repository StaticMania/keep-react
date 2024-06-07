'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useNotificationContext } from './Context'

const contentTheme = {
  position: {
    'top-left': 'top-5 left-5',
    'top-right': 'top-5 right-5',
    'bottom-left': 'bottom-5 left-5',
    'bottom-right': 'bottom-5 right-5',
    center: 'right-0 left-0',
  },
}

const NotificationBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { isOpen, position = 'bottom-right' } = useNotificationContext()
    return (
      <div
        {...props}
        className={cn(
          'notification-body absolute max-w-sm rounded-lg bg-white p-6 transition-all duration-300 dark:bg-metal-900',
          isOpen && 'animate-keep-bounce',
          contentTheme.position[position],
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

NotificationBody.displayName = 'Notification.Body'

export { NotificationBody }
