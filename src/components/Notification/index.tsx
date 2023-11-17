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
