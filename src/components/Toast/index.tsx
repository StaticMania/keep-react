import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useState } from "react";
import type { Duration } from "./ToastContext";
import { ToastContext } from "./ToastContext";
import { ToastToggle } from "./ToastToggle";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepToastTheme {
  base: string;
  closed: string;
  removed: string;
  toggle: {
    base: string;
  };
}

export interface ToastProps extends PropsWithChildren<ComponentProps<"div">> {
  duration?: Duration;
}

const durationstyle: Record<Duration, string> = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1000: "duration-1000",
};

const ToastComponent: FC<ToastProps> = ({
  children,
  duration = 300,
  className,
  ...props
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const theme = useTheme().theme.toast;

  return (
    <ToastContext.Provider
      value={{ duration, isClosed, isRemoved, setIsClosed, setIsRemoved }}
    >
      <div
        data-testid="keep-toast"
        className={classNames(
          theme.base,
          durationstyle[duration],
          { [theme.closed]: isClosed },
          { [theme.removed]: isRemoved },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </ToastContext.Provider>
  );
};

ToastComponent.displayName = "Toast";
ToastToggle.displayName = "Toast.Toggle";

export const Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle,
});