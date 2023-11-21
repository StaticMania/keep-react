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

/**
 * Props for the Alert component.
 */
export interface AlertProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  /**
   * The additional content of the Alert component.
   * @type {ReactNode}
   */
  additionalContent?: ReactNode
  /**
   * The color of the Alert component.
   * @type {string}
   * @default info
   * @control select
   * @description What is the color to use like
   * @options error | gray | info | success | warning
   */
  color?: keyof AlertColors
  /**
   * The icon of the Alert component.
   * @type {ReactNode}
   */
  icon?: ReactNode
  /**
   * The icon style of the Alert component.
   * @type {string}
   * @default false
   */
  iconStyle?: string
  /**
   * Whether to enable the dismiss icon for the Alert component.
   * @type {boolean}
   * @default false
   */
  dismiss?: boolean
  /**
   * The onDismiss function of the Alert component.
   * @type {boolean}
   * @default false
   */
  onDismiss?: boolean | (() => void)
  /**
   * The rounded theme object for the KeepAlert component.
   * @type {boolean}
   * @default false
   */
  rounded?: boolean
  /**
   * Whether to add a border around the Alert component.
   * @type {boolean}
   * @default false
   */
  withBorder?: boolean
  /**
   * The title of the Alert component.
   * @type {string}
   */
  title?: string
  /**
   * The title style of the Alert component.
   * @type {string}
   * @default false
   */
  titleStyle?: string
  /**
   * Whether to add a border accent to the Alert component.
   * @type {boolean}
   * @default false
   */
  withBorderAccent?: boolean
  /**
   * The position of the border accent for the Alert component.
   * @type {string}
   * @default left
   * @control select
   * @description What is the border accent position color to use like
   * @options left | right | top | bottom
   */
  withBorderAccentPosition?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * The children of the Alert component.
   * @type {ReactNode}
   */
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
