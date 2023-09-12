import { KeepSizes } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";
import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";
import { forwardRef } from "react";

export interface keepRadioTheme {
  base: string;
  radioInput: string;
  radioType: {
    square: string;
    circle: string;
  };
  sizes: RadioInputSizes;
  withCheckIcon: {
    on: {
      base: string;
      sizes: RadioInputSizes;
    };
    off: {
      base: string;
      sizes: RadioInputSizes;
    };
  };
  withSquare: string;
}

export interface RadioInputSizes extends Pick<KeepSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface RadioProps
  extends Omit<ComponentProps<"input">, "type" | "ref"> {
  sizing?: keyof RadioInputSizes;
  checkedIcon?: boolean;
  radioShape?: "circle" | "square";
  value?: string;
  selected?: string;
  onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      checkedIcon,
      sizing = "md",
      radioShape = "circle",
      value,
      onOptionChange,
      selected,
      ...props
    },
    ref
  ) => {
    const theme = useTheme().theme.formControls.radio;

    return (
      <>
        <input
          ref={ref}
          className={twMerge(theme.radioInput, className)}
          value={value}
          checked={selected === value}
          onChange={onOptionChange}
          type="radio"
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
              : theme.withCheckIcon.off.sizes[sizing],
            radioShape === "square" && theme.withSquare,
            radioShape && theme.radioType[radioShape]
          )}
        ></div>
      </>
    );
  }
);

Radio.displayName = "Radio";
