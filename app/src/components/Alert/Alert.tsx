'use client'
import { FC, ReactNode } from 'react'
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

export interface AlertProps {
  children?: ReactNode
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  className?: string
  withBg?: boolean
  dismiss?: boolean
  [key: string]: any
}

export const AlertComponent: FC<AlertProps> = ({ children, color = 'primary', withBg, dismiss, className }) => {
  return (
    <div
      className={cn(
        alertTheme.root.base,
        withBg ? alertTheme.colorWithBg[color] : alertTheme.colorWithOutBg[color],
        dismiss ? 'hidden' : 'flex',
        className,
      )}>
      <AlertContext.Provider value={{ color }}>{children}</AlertContext.Provider>
    </div>
  )
}

Container.displayName = 'Alert.Container'
Description.displayName = 'Alert.Description'
Title.displayName = 'Alert.Title'
Dismiss.displayName = 'Alert.Dismiss'
Link.displayName = 'Alert.Link'
Icon.displayName = 'Alert.Icon'
Body.displayName = 'Alert.Body'

export const Alert = Object.assign(AlertComponent, {
  Container,
  Description,
  Title,
  Dismiss,
  Link,
  Icon,
  Body,
})
