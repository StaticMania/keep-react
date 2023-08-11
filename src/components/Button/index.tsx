import classNames from "classnames";
import { ComponentProps, forwardRef, ReactNode } from "react";
import { excludeClassName } from "../../helpers/exclude";
import type { PositionInButtonGroup } from "./ButtonGroup";
import ButtonGroup from "./ButtonGroup";
import {
  KeepBoolean,
  KeepButtonType,
  KeepColors,
  KeepSizes,
} from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepButtonTheme {
  base: string;
  disabled: string;
  width: {
    half: string;
    full: string;
  };
  inner: {
    base: string;
    position: PositionInButtonGroup;
  };
  notificationLabel: string;
  default: {
    color: ButtonColors;
    transition: KeepBoolean;
  };
  primary: {
    color: ButtonColors;
    transition: KeepBoolean;
  };
  outlineGray: {
    color: ButtonColors;
    transition: KeepBoolean;
  };
  outlinePrimary: {
    color: ButtonColors;
    transition: KeepBoolean;
  };
  dashed: {
    color: ButtonColors;
    transition: KeepBoolean;
  };
  text: {
    color: ButtonColors;
    transition: KeepBoolean;
  };
  linkPrimary: {
    color: ButtonColors;
    transition: KeepBoolean;
  };
  linkGray: {
    color: ButtonColors;
    transition: KeepBoolean;
  };
  pill: KeepBoolean;
  circle: {
    off: string;
    size: ButtonSizes;
  };
  size: ButtonSizes;
}

export interface ButtonProps
  extends Omit<ComponentProps<"button">, "className" | "color" | "type"> {
  href?: string;
  color?: keyof ButtonColors;
  type?: keyof ButtonTypes;
  notificationLabel?: string;
  pill?: boolean;
  circle?: boolean;
  positionInGroup?: keyof PositionInButtonGroup;
  children?: ReactNode;
  size?: keyof ButtonSizes;
  width?: "full" | "half";
  customClass?: string;
  onClick?: () => void;
}

export interface ButtonTypes
  extends Pick<
    KeepButtonType,
    | "primary"
    | "dashed"
    | "text"
    | "linkPrimary"
    | "linkGray"
    | "outlineGray"
    | "outlinePrimary"
    | "default"
  > {
  [key: string]: string;
}

export interface ButtonColors
  extends Pick<KeepColors, "error" | "info" | "success" | "warning"> {
  [key: string]: string;
}
export interface ButtonSizes
  extends Pick<KeepSizes, "xs" | "sm" | "md" | "lg" | "xl" | "2xl"> {
  [key: string]: string;
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      color = "info",
      disabled = false,
      type = "default",
      href,
      notificationLabel,
      pill = false,
      circle = false,
      positionInGroup = "none",
      size = "md",
      width,
      customClass,
      ...props
    },
    ref
  ) => {
    const isLink = typeof href !== "undefined";
    const theirProps = excludeClassName(props);
    const { buttonGroup: groupTheme, button: theme } = useTheme().theme;
    const Component = isLink ? "a" : "button";
    return (
      <Component
        className={classNames(
          customClass,
          theme.base,
          disabled && theme.disabled,
          width && theme.width[width],
          groupTheme.position[positionInGroup],
          !circle && theme.pill[pill ? "on" : "off"],
          circle && theme.circle.size[size],
          type === "default" && theme.default.color[color],
          type === "primary" && theme.primary.color[color],
          type === "outlineGray" && theme.outlineGray.color[color],
          type === "outlinePrimary" && theme.outlinePrimary.color[color],
          type === "dashed" && theme.dashed.color[color],
          type === "text" && theme.text.color[color],
          type === "linkPrimary" && theme.linkPrimary.color[color],
          type === "linkGray" && theme.linkGray.color[color]
        )}
        disabled={disabled}
        href={href}
        type={isLink ? undefined : "button"}
        onClick={onClick}
        {...theirProps}
      >
        <span
          ref={ref}
          className={classNames(
            theme.inner.base,
            !circle && theme.size[size],
            theme.inner.position[positionInGroup],
            theme.default.transition[type === "default" ? "on" : "off"],
            theme.primary.transition[type === "primary" ? "on" : "off"],
            theme.outlineGray.transition[type === "outlineGray" ? "on" : "off"],
            theme.outlinePrimary.transition[
              type === "outlinePrimary" ? "on" : "off"
            ],
            theme.dashed.transition[type === "dashed" ? "on" : "off"],
            theme.text.transition[type === "text" ? "on" : "off"],
            theme.linkPrimary.transition[type === "linkPrimary" ? "on" : "off"],
            theme.linkGray.transition[type === "linkGray" ? "on" : "off"]
          )}
        >
          <>
            {typeof children !== "undefined" && children}
            {typeof notificationLabel !== "undefined" && (
              <span
                className={theme.notificationLabel}
                data-testid="keep-button-label"
              >
                {notificationLabel}
              </span>
            )}
          </>
        </span>
      </Component>
    );
  }
);

ButtonComponent.displayName = "Button";
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
