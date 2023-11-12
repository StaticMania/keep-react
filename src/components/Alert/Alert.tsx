import { X } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import type { KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepAlertTheme {
  base: string
  dismiss: string
  border: {
    off: string
    on: AlertColors
    borderAccent: {
      top: string
      bottom: string
      left: string
      right: string
    }
  }
  wrapper: string
  infoButton: {
    base: string
  }
  closeButton: {
    base: string
    icon: string
    color: AlertColors
  }
  color: AlertColors
  icon: string
  rounded: string
  title: {
    base: string
    color: AlertColors
  }
}

export interface AlertProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  additionalContent?: ReactNode
  color?: keyof AlertColors
  icon?: ReactNode
  iconStyle?: string
  dismiss?: boolean
  onDismiss?: boolean | (() => void)
  rounded?: boolean
  withBorder?: boolean
  title?: string
  titleStyle?: string
  withBorderAccent?: boolean
  withBorderAccentPosition?: 'left' | 'right' | 'top' | 'bottom'
  children?: ReactNode
  className?: string
}

export interface AlertColors extends Pick<KeepColors, 'error' | 'gray' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  color = 'info',
  icon: Icon,
  onDismiss,
  dismiss = false,
  rounded = false,
  withBorder = false,
  withBorderAccent = false,
  withBorderAccentPosition = 'left',
  title,
  className,
  iconStyle,
  titleStyle,
}) => {
  const theme = useTheme().theme.alert

  return (
    <div
      className={cn(
        theme.base,
        theme.color[color],
        dismiss && theme.dismiss,
        rounded && theme.rounded,
        withBorder && theme.border.on[color],
        withBorderAccent && theme.border.borderAccent[withBorderAccentPosition],
        className,
      )}
      role="alert">
      <div className={theme.wrapper}>
        <div className={cn(theme.infoButton.base)}>{Icon}</div>
        <div>
          {typeof children !== 'undefined' && children}
          {title && <p className={cn(theme.title.base, theme.title.color[color], titleStyle)}>{title}</p>}
          {additionalContent && <div>{additionalContent}</div>}
        </div>
        {onDismiss && typeof onDismiss === 'function' && (
          <button
            aria-label="Dismiss"
            className={cn(theme.closeButton.base, theme.closeButton.color[color], iconStyle)}
            onClick={onDismiss}
            type="button">
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  )
}
