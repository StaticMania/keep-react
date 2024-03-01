'use client'
import { HTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { AlertContext } from './AlertContext'
import { Body } from './Body'
import { Container } from './Container'
import { Description } from './Description'
import { Dismiss } from './Dismiss'
import { Icon } from './Icon'
import { Link } from './Link'
import { Title } from './Title'
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

export const Alert = Object.assign(AlertComponent, {
  Container,
  Description,
  Title,
  Dismiss,
  Link,
  Icon,
  Body,
})
