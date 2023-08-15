import classNames from "classnames";
import React, { ComponentProps, forwardRef, ReactNode } from "react";
import { excludeClassName } from "../../helpers/exclude";
import HelperText from "./HelperText";
import type { KeepBoolean, KeepColors, KeepSizes } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepTextInputTheme {
  base: string;
  addon: {
    base: string;
    separator: {
      colors: TextInputColors;
    };
    position: {
      left: string;
      right: string;
    };
  };
  field: {
    base: string;
    icon: {
      base: string;
      position: {
        left: string;
        right: string;
      };
    };
    input: {
      base: string;
      disabled: string;
      sizes: TextInputSizes;
      colors: TextInputColors;
      withBorder: KeepBoolean;
      withBg: {
        on: {
          colors: TextInputColors;
        };
        off: string;
      };
      withIcon: {
        on: {
          left: string;
          right: string;
        };
        off: string;
      };
      withAddon: {
        on: {
          left: string;
          right: string;
        };
        off: string;
      };
      withShadow: KeepBoolean;
    };
  };
}

export interface TextInputColors
  extends Pick<KeepColors, "gray" | "info" | "error" | "warning" | "success"> {
  [key: string]: string;
}

export interface TextInputSizes extends Pick<KeepSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface TextInputProps
  extends Omit<ComponentProps<"input">, "ref" | "color" | "className"> {
  /**
   * Avaiable Size for input text
   *
   * `"sm"` `"md"` `"lg"` `"xl"` `"2xl"`
   */
  sizing?: keyof TextInputSizes;

  /**
   * Input Text background color show or not?
   */
  withBg?: boolean;
  /**
   * Input Text border show or not?
   */
  border?: boolean;
  /**
   * Input Text shadow show or not?
   */
  shadow?: boolean;
  /**
   * Input Text field disabled or not?
   */
  disabled?: boolean;
  /**
   * Input Text helper text
   */
  helperText?: ReactNode;
  /**
   * Input Text Field with Addon Icon
   */
  addon?: ReactNode;

  /**
   * Input Text Field Addon icon position
   *
   * `"left"` `"right"`
   */
  addonPosition?: "left" | "right";
  /**
   * Input Text Field With Icon
   */
  icon?: ReactNode;
  /**
   * Input Text Field icon position
   *
   * `"left"` `"right"`
   */
  iconPosition?: "left" | "right";
  /**
   * Avaiable color variant for input text field
   *
   * `"gray"` `"info"` `"error"` `"warning"` `"success"`
   */
  color?: keyof TextInputColors;
  value?: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      sizing = "md",
      shadow,
      withBg,
      helperText,
      addon,
      icon: Icon,
      border = true,
      disabled = false,
      color = "default",
      addonPosition = "left",
      iconPosition = "right",
      value,
      handleOnChange,
      ...props
    },
    ref
  ) => {
    const theme = useTheme().theme.formControls.textInput;
    const theirProps = excludeClassName(props);

    return (
      <React.Fragment>
        <div className={theme.base}>
          {addon && addonPosition === "left" && (
            <span
              className={classNames(
                theme.addon.base,
                theme.addon.separator.colors[color],
                theme.addon.position[addonPosition],
                theme.field.input.withBorder[border ? "on" : "off"],
                withBg
                  ? theme.field.input.withBg.on.colors[color]
                  : theme.field.input.withBg.off,
                disabled && theme.field.input.disabled
              )}
            >
              {addon}
            </span>
          )}
          <div className={theme.field.base}>
            {Icon && iconPosition === "left" && (
              <div
                className={classNames(
                  theme.field.icon.base,
                  theme.field.icon.position[iconPosition]
                )}
              >
                {Icon}
              </div>
            )}
            <input
              className={classNames(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withShadow[shadow ? "on" : "off"],
                theme.field.input.withBorder[border ? "on" : "off"],
                disabled && theme.field.input.disabled,
                Icon
                  ? theme.field.input.withIcon.on[iconPosition]
                  : theme.field.input.withIcon.off,
                addon
                  ? theme.field.input.withAddon.on[addonPosition]
                  : theme.field.input.withAddon.off,
                withBg
                  ? theme.field.input.withBg.on.colors[color]
                  : theme.field.input.withBg.off
              )}
              {...theirProps}
              ref={ref}
              disabled={disabled}
              defaultValue={value}
              onChange={handleOnChange}
            />
            {Icon && iconPosition === "right" && (
              <div
                className={classNames(
                  theme.field.icon.base,
                  theme.field.icon.position[iconPosition]
                )}
              >
                {Icon}
              </div>
            )}
          </div>
          {addon && addonPosition === "right" && (
            <span
              className={classNames(
                theme.addon.base,
                theme.addon.separator.colors[color],
                theme.addon.position[addonPosition],
                theme.field.input.withBorder[border ? "on" : "off"],
                withBg
                  ? theme.field.input.withBg.on.colors[color]
                  : theme.field.input.withBg.off
              )}
            >
              {addon}
            </span>
          )}
        </div>
        {helperText && (
          <HelperText color={color} disabled={disabled}>
            {helperText}
          </HelperText>
        )}
      </React.Fragment>
    );
  }
);

TextInput.displayName = "TextInput";
