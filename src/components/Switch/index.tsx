import type { FC, ReactNode } from "react";
import { useState } from "react";
import classNames from "classnames";
import { Switch } from "@headlessui/react";
import { KeepSizes } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";
import { excludeClassName } from "../../helpers/exclude";

export interface keepToggleTheme {
  base: string;
  circleBase: string;
  enabledBg: {
    on: {
      primary: string;
      slate: string;
    };
    off: string;
  };
  enabledCircle: {
    on: ToggleSizes;
    off: ToggleSizes;
  };
  disabled: string;
  size: ToggleSizes;
  label: ToggleSizes;
  withIconBase: string;
}

export interface ToggleProps {
  label?: ReactNode;
  withIcon?: boolean;
  disabled?: boolean;
  size?: keyof ToggleSizes;
  bgColor?: "primary" | "slate";
}

export interface ToggleSizes extends Pick<KeepSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

const ToggleComponent: FC<ToggleProps> = ({
  label = "Toggle",
  bgColor = "primary",
  disabled = false,
  withIcon = false,
  size = "sm",

  ...props
}) => {
  const [enabled, setEnabled] = useState(false);
  const theirProps = excludeClassName(props);
  const theme = useTheme().theme.switch;

  const showWithIcon = (enabled: boolean, size: keyof ToggleSizes): string => {
    if (enabled) {
      const enableIcon: ToggleSizes = {
        sm: `after:h-[10px] after:w-[10px] after:bg-[url('/images/icon/moon-10.svg')]`,
        md: `after:h-[12px] after:w-[12px] after:bg-[url('/images/icon/moon-12.svg')]`,
        lg: `after:h-[13px] after:w-[13px] after:bg-[url('/images/icon/moon-13.svg')]`,
      };
      return enableIcon[size];
    }

    const disabledIcon: ToggleSizes = {
      sm: `after:h-[10px] after:w-[10px] after:bg-[url('/images/icon/sun-10.svg')]`,
      md: `after:h-[12px] after:w-[12px] after:bg-[url('/images/icon/sun-12.svg')]`,
      lg: `after:h-[13px] after:w-[13px] after:bg-[url('/images/icon/sun-13.svg')]`,
    };
    return disabledIcon[size];
  };

  return (
    <div
      data-testid="toggle-element"
      {...theirProps}
      className="inline-flex items-center"
      id="test-switch"
    >
      <Switch
        id="test-switchId"
        checked={disabled ? disabled : enabled}
        onChange={setEnabled}
        className={classNames(
          theme.base,
          theme.size[size],
          disabled && theme.disabled,
          enabled ? theme.enabledBg.on[bgColor] : theme.enabledBg.off
        )}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={classNames(
            theme.circleBase,
            theme.enabledCircle[enabled ? "on" : "off"][size],
            withIcon && theme.withIconBase,
            withIcon && showWithIcon(enabled, size),
            enabled ? theme.enabledCircle.on : theme.enabledCircle.off
          )}
        />
      </Switch>
      {typeof label !== "undefined" ||
        (!label && (
          <label
            className={classNames(
              theme.label[size],
              disabled && theme.disabled
            )}
          >
            {label}
          </label>
        ))}
    </div>
  );
};

ToggleComponent.displayName = "Toggle";
export const Toggle = ToggleComponent;
