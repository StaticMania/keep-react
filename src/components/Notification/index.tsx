import { useTheme } from "../../Keep/ThemeContex";
import classNames from "classnames";
import { X } from "phosphor-react";
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";

export interface keepNotificationTheme {
  base: string;
  dismiss: string;
  wrapper: string;
  infoIcon: {
    base: string;
    on: string;
    off: string;
  };
  closeButton: {
    base: string;
    icon: string;
  };
  headerBanner: {
    base: string;
    img: string;
    on: string;
    off: string;
    closeIcon: string;
  };
  content: string;
}

export interface NotificationProps
  extends PropsWithChildren<Omit<ComponentProps<"div">, "color">> {
  additionalContent?: ReactNode;
  infoIcon?: ReactNode;
  dismiss?: boolean;
  headerBannerSrc?: string;
  onDismiss?: boolean | (() => void);
}

export const Notification: FC<NotificationProps> = ({
  additionalContent,
  children,
  infoIcon: InfoIcon,
  onDismiss,
  dismiss = false,
  headerBannerSrc,
  className,
}) => {
  const theme = useTheme().theme.notification;

  return (
    <div
      className={classNames(
        theme.base,
        dismiss && theme.dismiss,
        theme.infoIcon[InfoIcon ? "on" : "off"],
        theme.headerBanner[headerBannerSrc ? "on" : "off"],
        className
      )}
      role="notification"
    >
      <div className={theme.wrapper}>
        {!headerBannerSrc && InfoIcon && (
          <div className={classNames(theme.infoIcon.base)}>{InfoIcon}</div>
        )}
        <div>
          {headerBannerSrc && (
            <div className={classNames(theme.headerBanner.base)}>
              <img
                src={headerBannerSrc}
                alt="header-banner"
                className={classNames(theme.headerBanner.img)}
              />

              {onDismiss && typeof onDismiss === "function" && (
                <div
                  className={classNames(theme.headerBanner.closeIcon)}
                  onClick={onDismiss}
                >
                  <X size={20} color="#5E718D" />
                </div>
              )}
            </div>
          )}
          <div className={classNames(headerBannerSrc && theme.content)}>
            {children}
            {additionalContent && <div>{additionalContent}</div>}
          </div>
        </div>
        {!headerBannerSrc && onDismiss && typeof onDismiss === "function" && (
          <button
            aria-label="Dismiss"
            className={classNames(theme.closeButton.base)}
            onClick={onDismiss}
            type="button"
          >
            <X size={24} color="#5E718D" />
          </button>
        )}
      </div>
    </div>
  );
};

Notification.displayName = "Notification";
