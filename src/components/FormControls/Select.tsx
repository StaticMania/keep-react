import { twMerge } from "tailwind-merge";
import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";
import { excludeClassName } from "../../helpers/exclude";
import { HelperText } from "./HelperText";
import type { KeepBoolean, KeepColors, KeepSizes } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepSelectTheme {
  base: string;
  addon: string;
  field: {
    base: string;
    icon: {
      base: string;
      svg: string;
    };
    select: {
      base: string;
      withIcon: KeepBoolean;
      withAddon: KeepBoolean;
      withShadow: KeepBoolean;
      sizes: SelectSizes;
      colors: SelectColors;
    };
  };
}

export interface SelectColors
  extends Pick<KeepColors, "gray" | "info" | "error" | "warning" | "success"> {
  [key: string]: string;
}

export interface SelectSizes extends Pick<KeepSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface SelectProps
  extends Omit<ComponentProps<"select">, "className" | "color" | "ref"> {
  sizing?: keyof SelectSizes;
  shadow?: boolean;
  helperText?: ReactNode;
  addon?: ReactNode;
  icon?: ReactNode;
  color?: keyof SelectColors;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      sizing = "md",
      shadow,
      helperText,
      addon,
      icon: Icon,
      color = "gray",
      ...props
    },
    ref
  ) => {
    const theme = useTheme().theme.formControls.select;
    const theirProps = excludeClassName(props);

    return (
      <div className={theme.base}>
        {addon && <span className={theme.addon}>{addon}</span>}
        <div className={theme.field.base}>
          {Icon && <div className={theme.field.icon.base}>{Icon}</div>}
          <select
            className={twMerge(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.withIcon[Icon ? "on" : "off"],
              theme.field.select.withAddon[addon ? "on" : "off"],
              theme.field.select.withShadow[shadow ? "on" : "off"],
              theme.field.select.sizes[sizing]
            )}
            {...theirProps}
            ref={ref}
          >
            {children}
          </select>
          {helperText && <HelperText color={color}>{helperText}</HelperText>}
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
