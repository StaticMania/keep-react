'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { Button } from '../Button'
import { useNotificationContext } from './NotificationContext'

export interface NotificationActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const NotificationAction = forwardRef<HTMLButtonElement, NotificationActionProps>(
  ({ children, asChild, ...props }, ref) => {
    const { handleOpen } = useNotificationContext()

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        onClick: handleOpen,
        itemRef: ref,
        ...props,
      })
    }

    return (
      <Button ref={ref} onClick={handleOpen} variant="outline">
        {children ?? 'Notification Action'}
      </Button>
    )
  },
)

NotificationAction.displayName = 'NotificationAction'

export { NotificationAction }
