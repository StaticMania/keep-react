/* eslint-disable @next/next/no-img-element */
import { useTheme } from '../../Keep/ThemeContex'
import { twMerge } from 'tailwind-merge'
import { X } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'

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

export interface NotificationProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  additionalContent?: ReactNode
  infoIcon?: ReactNode
  dismiss?: boolean
  headerBannerSrc?: string
  onDismiss?: boolean | (() => void)
  showNotification?: boolean
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
      className={twMerge(
        theme.base,
        dismiss && theme.dismiss,
        theme.infoIcon[InfoIcon ? 'on' : 'off'],
        theme.headerBanner[headerBannerSrc ? 'on' : 'off'],
        className,
        position && theme.position[position],
        showNotification ? 'block' : 'hidden',
      )}
      role="notification">
      <div className={theme.wrapper}>
        {!headerBannerSrc && InfoIcon && <div className={twMerge(theme.infoIcon.base)}>{InfoIcon}</div>}
        <div>
          {headerBannerSrc && (
            <div className={twMerge(theme.headerBanner.base)}>
              <img src={headerBannerSrc} alt="header-banner" className={twMerge(theme.headerBanner.img)} />

              {onDismiss && typeof onDismiss === 'function' && (
                <div className={twMerge(theme.headerBanner.closeIcon)} onClick={onDismiss}>
                  <X size={20} color="#5E718D" />
                </div>
              )}
            </div>
          )}
          <div className={twMerge(headerBannerSrc && theme.content)}>
            {children}
            {additionalContent && <div>{additionalContent}</div>}
          </div>
        </div>
        {!headerBannerSrc && onDismiss && typeof onDismiss === 'function' && (
          <button aria-label="Dismiss" className={twMerge(theme.closeButton.base)} onClick={onDismiss} type="button">
            <X size={24} color="#5E718D" />
          </button>
        )}
      </div>
    </div>
  )
}

Notification.displayName = 'Notification'
