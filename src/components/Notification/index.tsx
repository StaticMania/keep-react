/* eslint-disable @next/next/no-img-element */
import { useTheme } from '../../Keep/ThemeContext'
import { X } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Interface representing the theme for the KeepNotification component.
 */
export interface keepNotificationTheme {
  /**
   * The base color of the notification.
   */
  base: string
  /**
   * The color of the dismiss button.
   */
  dismiss: string
  /**
   * The wrapper color of the notification.
   */
  wrapper: string
  /**
   * The theme for the info icon.
   */
  infoIcon: {
    /**
     * The base color of the info icon.
     */
    base: string
    /**
     * The color of the info icon when it is turned on.
     */
    on: string
    /**
     * The color of the info icon when it is turned off.
     */
    off: string
  }
  /**
   * The theme for the close button.
   */
  closeButton: {
    /**
     * The base color of the close button.
     */
    base: string
    /**
     * The icon color of the close button.
     */
    icon: string
  }
  /**
   * The theme for the header banner.
   */
  headerBanner: {
    /**
     * The base color of the header banner.
     */
    base: string
    /**
     * The image of the header banner.
     */
    img: string
    /**
     * The color of the header banner when it is turned on.
     */
    on: string
    /**
     * The color of the header banner when it is turned off.
     */
    off: string
    /**
     * The color of the close icon in the header banner.
     */
    closeIcon: string
  }
  /**
   * The color of the content in the notification.
   */
  content: string
  /**
   * The position of the notification.
   */
  position: {
    /**
     * The position of the notification at the top left corner.
     */
    'top-left': string
    /**
     * The position of the notification at the top right corner.
     */
    'top-right': string
    /**
     * The position of the notification at the bottom left corner.
     */
    'bottom-left': string
    /**
     * The position of the notification at the bottom right corner.
     */
    'bottom-right': string
  }
}

/**
 * @props Props for the Notification component.
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
