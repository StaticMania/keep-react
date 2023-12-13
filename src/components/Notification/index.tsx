/* eslint-disable @next/next/no-img-element */
import { useTheme } from '../../Keep/ThemeContext'
import { X } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface keepNotificationTheme {
  base: string
  dismiss: string
  wrapper: string
  infoIcon: {
    base: string
    on: string
    off: string
  }
  closeButton: {
    base: string
    icon: string
  }
  headerBanner: {
    base: string
    img: string
    on: string
    off: string
    closeIcon: string
  }
  content: string
  position: {
    'top-left': string
    'top-right': string
    'bottom-left': string
    'bottom-right': string
  }
}

/**
 * Props for the Notification component.
 * @interface NotificationProps
 * @extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>>
 */

export interface NotificationProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  /**
   * Additional content to be displayed within the notification.
   */
  additionalContent?: ReactNode

  /**
   * Icon to be displayed for informational purposes.
   */
  infoIcon?: ReactNode

  /**
   * Determines whether the notification can be dismissed.
   */
  dismiss?: boolean

  /**
   * Source URL for the header banner image.
   */
  headerBannerSrc?: string

  /**
   * Callback function to be executed when the notification is dismissed.
   * If set to `true`, a default dismiss behavior will be applied.
   */
  onDismiss?: boolean | (() => void)

  /**
   * Determines whether the notification should be shown.
   */
  showNotification?: boolean

  /**
   * Position of the notification on the screen.
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const Notification: FC<NotificationProps> = ({
  additionalContent,
  children,
  infoIcon: InfoIcon,
  onDismiss,
  dismiss = false,
  headerBannerSrc,
  className,
  position = 'top-right',
  showNotification = false,
}) => {
  const theme = useTheme().theme.notification

  return (
    <div
      className={cn(
        theme.base,
        dismiss && theme.dismiss,
        theme.infoIcon[InfoIcon ? 'on' : 'off'],
        theme.headerBanner[headerBannerSrc ? 'on' : 'off'],
        position && theme.position[position],
        showNotification ? 'block' : 'hidden',
        className,
      )}
      role="notification">
      <div className={theme.wrapper}>
        {!headerBannerSrc && InfoIcon && <div className={cn(theme.infoIcon.base)}>{InfoIcon}</div>}
        <div>
          {headerBannerSrc && (
            <div className={cn(theme.headerBanner.base)}>
              <img src={headerBannerSrc} alt="header-banner" className={cn(theme.headerBanner.img)} />

              {onDismiss && typeof onDismiss === 'function' && (
                <div className={cn(theme.headerBanner.closeIcon)} onClick={onDismiss}>
                  <X size={20} color="#5E718D" />
                </div>
              )}
            </div>
          )}
          <div className={cn(headerBannerSrc && theme.content)}>
            {children}
            {additionalContent && <div>{additionalContent}</div>}
          </div>
        </div>
        {!headerBannerSrc && onDismiss && typeof onDismiss === 'function' && (
          <button aria-label="Dismiss" className={cn(theme.closeButton.base)} onClick={onDismiss} type="button">
            <X size={24} color="#5E718D" />
          </button>
        )}
      </div>
    </div>
  )
}

Notification.displayName = 'Notification'
