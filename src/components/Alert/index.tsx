import type { KeepColors } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import { X } from "phosphor-react";
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";

export interface keepAlertTheme {
  base: string;
  dismiss: string;
  border: {
    off: string;
    on: AlertColors;
    borderAccent: {
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
  };
  wrapper: string;
  infoButton: {
    base: string;
  };
  closeButton: {
    base: string;
    icon: string;
    color: AlertColors;
  };
  color: AlertColors;
  icon: string;
  rounded: string;
}

export interface AlertProps
  extends PropsWithChildren<Omit<ComponentProps<"div">, "color">> {
  additionalContent?: ReactNode;
  color?: keyof AlertColors;
  icon?: ReactNode;
  dismiss?: boolean;
  onDismiss?: boolean | (() => void);
  rounded?: boolean;
  withBorder?: boolean;
  withBorderAccent?: boolean;
  withBorderAccentPosition?: "left" | "right" | "top" | "bottom";
  children?: ReactNode;
}

export interface AlertColors
  extends Pick<KeepColors, "error" | "gray" | "info" | "success" | "warning"> {
  [key: string]: string;
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  color = "info",
  icon: Icon,
  onDismiss,
  dismiss = false,
  rounded = true,
  withBorder = false,
  withBorderAccent = false,
  withBorderAccentPosition = "left",
  className,
}) => {
  const theme = useTheme().theme.alert;

  return (
    <div
      className={classNames(
        theme.base,
        theme.color[color],
        dismiss && theme.dismiss,
        rounded && theme.rounded,
        withBorder && theme.border.on[color],
        withBorderAccent && theme.border.borderAccent[withBorderAccentPosition],
        className
      )}
      role="alert"
    >
      <div className={theme.wrapper}>
        <div className={classNames(theme.infoButton.base)}>{Icon}</div>
        <div>
          {children}
          {additionalContent && <div>{additionalContent}</div>}
        </div>
        {onDismiss && typeof onDismiss === "function" && (
          <button
            aria-label="Dismiss"
            className={classNames(
              theme.closeButton.base,
              theme.closeButton.color[color]
            )}
            onClick={onDismiss}
            type="button"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

Alert.displayName = "Alert";
