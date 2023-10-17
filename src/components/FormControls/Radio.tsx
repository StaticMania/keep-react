import { KeepSizes, KeepStateColors } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";
import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";
import { forwardRef } from "react";

export interface keepRadioTheme {
  base: string;
  radioInput: string;
  color: KeepStateColors;
  radioType: {
    base: string;
    square: string;
    circle: string;
  };
  sizes: RadioInputSizes;
}

export interface RadioInputSizes extends Pick<KeepSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface RadioProps
  extends Omit<ComponentProps<"input">, "type" | "ref"> {
  sizing?: keyof RadioInputSizes;
  radioShape?: "circle" | "square";
  value?: string;
  selected?: string;
  color?: keyof KeepStateColors;
  onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      sizing = "md",
      radioShape = "circle",
      value,
      color = "info",
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
          className={twMerge(theme.radioInput, className, theme.sizes[sizing])}
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
            theme.radioType[radioShape],
            theme.color[color],
            theme.radioType.base
          )}
        ></div>
      </>
    );
  }
);

Radio.displayName = "Radio";
