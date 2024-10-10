'use client'
import { Close, Content, Portal } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useNotificationContext } from './Context'
import { notificationTheme } from './theme'

export interface NotificationContentProps extends ComponentPropsWithoutRef<typeof Content> {
  closeIconStyle?: string
}

const NotificationContent = forwardRef<ElementRef<typeof Content>, NotificationContentProps>(
  ({ className, children, closeIconStyle, ...props }, ref) => {
    const { showCloseIcon, position } = useNotificationContext()
    return (
      <Portal>
        <Content
          ref={ref}
          className={cn(
            notificationTheme.base,
            notificationTheme.position[position as keyof typeof notificationTheme.position],
            className,
          )}
          {...props}>
          {children}
          <Close
            className={cn(
              'absolute right-4 top-4 rounded-xl opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-metal-50 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white dark:fill-white dark:ring-offset-metal-900 dark:focus:ring-metal-800',
              !showCloseIcon && 'hidden',
              closeIconStyle,
            )}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
            <span className="sr-only">Close</span>
          </Close>
        </Content>
      </Portal>
    )
  },
)

NotificationContent.displayName = Content.displayName

export { NotificationContent }
