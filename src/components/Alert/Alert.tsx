import { X } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'

/**
 * Represents the theme object for the KeepAlert component.
 * @interface keepAlertTheme
 */

export interface keepAlertTheme {
  /**
   * The base theme object for the KeepAlert component.
   */
  base: string
  /**
   * The dismiss theme object for the KeepAlert component.
   */
  dismiss: string
  /**
   * The border theme object for the KeepAlert component.
   * @property off - The border color of the alert.
   * @property on - The border color of the alert.
   */
  border: {
    off: string
    on: AlertColors
    /**
     * The border accent theme object for the KeepAlert component.
     * @property top - The top border accent color.
     * @property bottom - The bottom border accent color.
     * @property left - The left border accent color.
     * @property right - The right border accent color.
     */
    borderAccent: {
      top: string
      bottom: string
      left: string
      right: string
    }
  }
  /**
   * The wrapper theme object for the KeepAlert component.
   */
  wrapper: string
  /**
   * The info button theme object for the KeepAlert component.
   * @property base - The base color of the info button.
   */
  infoButton: {
    base: string
  }
  /**
   * The close button theme object for the KeepAlert component.
   * @property base - The base color of the close button.
   * @property icon - The icon of the close button.
   * @property color - The color of the close button.
   */
  closeButton: {
    base: string
    icon: string
    color: AlertColors
  }
  /**
   * The color theme object for the KeepAlert component.
   */
  color: AlertColors
  /**
   * The icon theme object for the KeepAlert component.
   */
  icon: string
  /**
   * The rounded theme object for the KeepAlert component.
   */
  rounded: string
  /**
   * The title theme object for the KeepAlert component.
   * @property base - The base color of the alert title.
   * @property color - The color of the alert title.
   */
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
}

/**
 * Defines an interface for Alert colors, extending the `KeepColors` interface with additional color keys.
 */
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
}) => {
  const theme = useTheme().theme.alert

  return (
    <div
      className={twMerge(
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
        <div className={twMerge(theme.infoButton.base)}>{Icon}</div>
        <div>
          {typeof children !== 'undefined' && children}
          {title && <p className={twMerge(theme.title.base, theme.title.color[color])}>{title}</p>}
          {additionalContent && <div>{additionalContent}</div>}
        </div>
        {onDismiss && typeof onDismiss === 'function' && (
          <button
            aria-label="Dismiss"
            className={twMerge(theme.closeButton.base, theme.closeButton.color[color])}
            onClick={onDismiss}
            type="button">
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  )
}
