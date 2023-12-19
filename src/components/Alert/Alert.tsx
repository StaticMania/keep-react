'use client'
import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { Title } from './Title'
import { Description } from './Description'
import { Container } from './Container'
import { X } from 'phosphor-react'
import { AlertContext } from './AlertContext'
import { cn } from '../../helpers/cn'
import clsx from 'clsx'
import { Icon } from './Icon'
import { Body } from './Body'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepAlertTheme {
  base: string
  container: string
  dismiss: string
  rounded: string
  border: string
  disMissButton: {
    base: string
    color: {
      primary: string
      success: string
      warning: string
      error: string
      metal: string
    }
  }
  borderColor: {
    primary: string
    success: string
    warning: string
    error: string
    metal: string
  }
  borderAccent: {
    left: string
    right: string
    top: string
    bottom: string
  }
  color: {
    primary: string
    success: string
    warning: string
    error: string
    metal: string
  }
  icon: {
    primary: string
    success: string
    warning: string
    error: string
    metal: string
  }
  title: {
    base: string
    color: {
      primary: string
      success: string
      warning: string
      error: string
      metal: string
    }
  }
  description: string
}

/**
 * Props for the Alert component.
 * @interface AlertProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>>}
 */
interface AlertProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  /**
   * The color of the alert.
   * @type {'primary' | 'success' | 'warning' | 'error' | 'metal'}
   * @default 'primary'
   */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'metal'
  /**
   * The icon to be displayed in the alert.
   * @type {ReactNode}
   */
  icon?: ReactNode
  /**
   * Determines whether the alert can be dismissed.
   * If set to `true`, a default dismiss button will be applied.
   * @type {boolean}
   * @default false
   */
  dismiss?: boolean
  /**
   * The callback function to be called when the alert is dismissed.
   * @type {boolean | (() => void)}
   */
  onDismiss?: boolean | (() => void)
  /**
   * Determines whether the alert has rounded corners.
   * @type {boolean}
   * @default false
   */
  rounded?: boolean
  /**
   * Determines whether the alert has a border.
   * @type {boolean}
   * @default false
   */
  withBorder?: boolean
  /**
   * Determines whether the alert has an accent border.
   * @type {boolean}
   * @default false
   */
  withBorderAccent?: boolean
  /**
   * The position of the accent border.
   * @type {'left' | 'right' | 'top' | 'bottom'}
   * @default 'left'
   */
  withBorderAccentPosition?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * The content of the alert.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode
  /**
   * Additional CSS class name for the alert.
   * @type {string}
   * @default ''
   */
  className?: string
  /**
   * Additional CSS style for the alert button.
   * @type {string}
   * @default ''
   */
  BtnStyle?: string
  /**
   * Additional props for the alert component.
   * @type {any}
   * @default ''
   */
  [key: string]: any
}

const AlertComponent: FC<AlertProps> = ({
  children,
  color = 'primary',
  withBorder = false,
  withBorderAccent = false,
  withBorderAccentPosition = 'left',
  className,
  BtnStyle,
  rounded,
  icon,
  dismiss,
  onDismiss,
  ...restProps
}) => {
  const theme = useTheme().theme.alert
  let alertClasses = clsx(
    theme.base,
    theme.color[color],
    withBorder && theme.border,
    withBorder && theme.borderColor[color],
    withBorderAccent && theme.borderAccent[withBorderAccentPosition],
    withBorderAccent && theme.borderColor[color],
    rounded && theme.rounded,
    dismiss && theme.dismiss,
  )
  let btnClasses = clsx(theme.disMissButton.base, theme.disMissButton.color[color])

  return (
    <div role="alert" className={cn(alertClasses, className)} {...restProps}>
      {onDismiss && typeof onDismiss === 'function' && (
        <button aria-label="dismiss" role="button" className={cn(btnClasses, BtnStyle)} onClick={onDismiss}>
          {icon ? icon : <X size={20} />}
        </button>
      )}
      <AlertContext.Provider value={{ color }}>{children}</AlertContext.Provider>
    </div>
  )
}

Title.displayName = 'Alert.Title'
Description.displayName = 'Alert.Description'
Container.displayName = 'Alert.Container'
Icon.displayName = 'Alert.Icon'
Body.displayName = 'Alert.Body'

export const Alert = Object.assign(AlertComponent, {
  Title: Title,
  Description: Description,
  Container: Container,
  Icon: Icon,
  Body: Body,
})
