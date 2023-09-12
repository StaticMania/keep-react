import { KeepSizes } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";
import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";
import { forwardRef } from "react";

export interface keepCheckBoxTheme {
  base: string;
  radioInput: string;
  sizes: CheckboxInputSizes;
  withCheckIcon: {
    on: {
      base: string;
      sizes: CheckboxInputSizes;
    };
    off: {
      base: string;
      sizes: CheckboxInputSizes;
    };
  };
}

export interface CheckboxInputSizes
  extends Pick<KeepSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface CheckboxProps
  extends Omit<ComponentProps<"input">, "type" | "ref"> {
  sizing?: keyof CheckboxInputSizes;
  checkedIcon?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checkedIcon, sizing = "md", ...props }, ref) => {
    const theme = useTheme().theme.formControls.checkbox;
    return (
      <>
        <input
          ref={ref}
          className={twMerge(theme.radioInput, className)}
          type="checkbox"
          {...props}
        />
        <div
          className={twMerge(
            theme.base,
            theme.sizes[sizing],
            checkedIcon
              ? theme.withCheckIcon.on.base
              : theme.withCheckIcon.off.base,
            checkedIcon
              ? theme.withCheckIcon.on.sizes[sizing]
              : theme.withCheckIcon.off.sizes[sizing]
          )}
        ></div>
      </>
    );
  }
);

Checkbox.displayName = "Checkbox";
