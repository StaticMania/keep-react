'use client'
import { HTMLAttributes, forwardRef, isValidElement } from 'react'
import { KeepSlot } from '../Helpers/KeepSlot'
import { useNotificationContext } from './NotificationContext'

export interface NotificationActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const NotificationAction = forwardRef<HTMLButtonElement, NotificationActionProps>(
  ({ children, asChild, ...props }, ref) => {
    const { handleOpen } = useNotificationContext()

    const Slot = asChild && isValidElement(children) ? KeepSlot : 'button'

    return (
      <Slot ref={ref} onClick={handleOpen} {...props}>
        {children}
      </Slot>
    )
  },
)

NotificationAction.displayName = 'NotificationAction'

export { NotificationAction }
