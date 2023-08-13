import { KeepBoolean, KeepColors, KeepSizes } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { useId } from "react";

export interface keepProgressTheme {
  base: string;
  label: string;
  progressBar: {
    base: string;
    bar: string;
    rounded: KeepBoolean;
    bordered: {
      on: {
        base: string;
        color: ProgressColor;
      };
      off: string;
    };
    progressPercentage: {
      base: string;
      color: ProgressColor;
    };
    popupLabelProgress: string;
    progressBaseColor: ProgressColor;
    progressPercentageColor: ProgressColor;
  };
  size: ProgressSizes;
}

export interface ProgressProps
  extends PropsWithChildren<ComponentProps<"div">> {
  /**
   * It defines the available sizes options for progress
   *
   * `"sm"` `"md"` `"lg"` `"xl"`
   */
  size?: keyof ProgressSizes;
  /**
   * Progress level text
   */
  label?: string;
  /**
   * It defines the available position for progress
   *
   * `"inside"` `"outside"` `"none"`
   */
  labelPosition?: "inside" | "outside" | "none";
  /**
   * Lavel Progress show or not?
   */
  labelProgress?: boolean;
  /**
   * Show Popup Label Progress show or not?
   */
  showPopupLabelProgress?: boolean;
  /**
   * Progress bar rounded or not?
   */
  rounded?: boolean;
  /**
   * Progress bar bordered or not?
   */
  bordered?: boolean;
  /**
   * It defines the progress control for progress
   */
  progress: number;
}

export interface ProgressColor
  extends Pick<
    KeepColors,
    "info" | "error" | "success" | "warning" | "indigo" | "purple"
  > {
  [key: string]: string;
}
export interface ProgressSizes
  extends Pick<KeepSizes, "sm" | "md" | "lg" | "xl"> {
  [key: string]: string;
}

export const Progress: FC<ProgressProps> = ({
  color = "blue",
  label = "progressbar",
  labelPosition = "none",
  labelProgress = false,
  showPopupLabelProgress = false,
  rounded = true,
  bordered = false,
  progress,
  size = "md",
  className,
  ...props
}): JSX.Element => {
  const id = useId();
  const theme = useTheme().theme.progress;

  return (
    <>
      <div
        id={id}
        aria-label={label}
        aria-valuenow={progress}
        role="progressbar"
        {...props}
      >
        {label && labelPosition === "outside" && (
          <div className={theme.label}>
            <span>{label}</span>
          </div>
        )}
        <div className={theme.base}>
          <div
            className={classNames(
              theme.size[size],
              theme.progressBar.base,
              theme.progressBar.progressBaseColor[color],
              theme.progressBar.rounded[rounded ? "on" : "off"],
              bordered && theme.progressBar.bordered.on.color[color],
              bordered
                ? theme.progressBar.bordered.on.base
                : theme.progressBar.bordered.off,
              className
            )}
          >
            <div
              className={classNames(
                theme.size[size],
                theme.progressBar.bar,
                theme.progressBar.progressPercentageColor[color],
                theme.progressBar.rounded[rounded ? "on" : "off"]
              )}
              style={{ width: `${progress}%` }}
            >
              {label && labelPosition === "inside" && label}
              {showPopupLabelProgress && (
                <span
                  className={classNames(
                    theme.progressBar.popupLabelProgress,
                    theme.progressBar.progressBaseColor[color],
                    theme.progressBar.progressPercentage.color[color]
                  )}
                >
                  {progress}%
                </span>
              )}
            </div>
          </div>
          {labelProgress && (
            <span
              className={classNames(
                theme.progressBar.progressPercentage.base,
                theme.progressBar.progressPercentage.color[color]
              )}
            >
              {progress}%
            </span>
          )}
        </div>
      </div>
    </>
  );
};

Progress.displayName = "Progress";
