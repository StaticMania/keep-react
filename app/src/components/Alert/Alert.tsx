'use client'
import { HTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { AlertContext } from './AlertContext'
import { AlertBody } from './Body'
import { AlertContainer } from './Container'
import { AlertDescription } from './Description'
import { AlertDismiss } from './Dismiss'
import { AlertIcon } from './Icon'
import { AlertLink } from './Link'
import { AlertTitle } from './Title'
import { alertTheme } from './theme'

interface AlertComponentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  withBg?: boolean
  dismiss?: boolean
}

const AlertComponent = forwardRef<HTMLDivElement, AlertComponentProps>(
  (
    { children, color = 'primary', withBg, dismiss, className, ...otherProps }: AlertComponentProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        {...otherProps}
        ref={ref}
        className={cn(
          alertTheme.root.base,
          withBg ? alertTheme.colorWithBg[color] : alertTheme.colorWithOutBg[color],
          dismiss ? 'hidden' : 'flex',
          className,
        )}>
        <AlertContext.Provider value={{ color }}>{children}</AlertContext.Provider>
      </div>
    )
  },
)

AlertComponent.displayName = 'Alert'

const Alert = Object.assign(AlertComponent, {
  Container: AlertContainer,
  Description: AlertDescription,
  Title: AlertTitle,
  Dismiss: AlertDismiss,
  Link: AlertLink,
  Icon: AlertIcon,
  Body: AlertBody,
})

export { Alert }
