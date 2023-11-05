import { twMerge } from "tailwind-merge";
import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";
import { excludeClassName } from "../../helpers/exclude";
import { HelperText } from "./HelperText";
import type { KeepBoolean, KeepColors } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepTextAreaTheme {
  base: string;
  colors: TextareaColors;
  disabled: string;
  withBg: {
    on: {
      colors: TextareaColors;
    };
    off: string;
  };
  withBorder: KeepBoolean;
  withShadow: KeepBoolean;
}

export interface TextareaColors
  extends Pick<KeepColors, "gray" | "info" | "error" | "warning" | "success"> {
  [key: string]: string;
}

export interface TextareaProps
  extends Omit<ComponentProps<"textarea">, "className" | "color" | "ref"> {
  shadow?: boolean;
  helperText?: ReactNode;
  withBg?: boolean;
  border?: boolean;
  disabled?: boolean;
  color?: keyof TextareaColors;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      shadow,
      helperText,
      withBg,
      border = true,
      disabled = false,
      color = "default",
      ...props
    },
    ref
  ) => {
    const theme = useTheme().theme.formControls.textarea;
    const theirProps = excludeClassName(props);

    return (
      <>
        <textarea
          ref={ref}
          disabled={disabled}
          className={twMerge(
            theme.base,
            theme.colors[color],
            disabled && theme.disabled,
            theme.withShadow[shadow ? "on" : "off"],
            theme.withBorder[border ? "on" : "off"],
            withBg ? theme.withBg.on.colors[color] : theme.withBg.off
          )}
          {...theirProps}
        />
        {helperText && (
          <HelperText color={color} disabled={disabled}>
            {helperText}
          </HelperText>
        )}
      </>
    );
  }
);

Textarea.displayName = "Textarea";
