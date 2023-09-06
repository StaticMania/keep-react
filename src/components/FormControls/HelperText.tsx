import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { excludeClassName } from "../../helpers/exclude";
import type { KeepColors } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepHelperTextTheme {
  base: string;
  disabled: string;
  colors: HelperColors;
}

export interface HelperColors
  extends Pick<KeepColors, "gray" | "info" | "error" | "warning" | "success"> {
  [key: string]: string;
}

export interface HelperTextProps
  extends PropsWithChildren<Omit<ComponentProps<"p">, "color" | "className">> {
  color?: keyof HelperColors;
  value?: string;
  disabled?: boolean;
}

export const HelperText: FC<HelperTextProps> = ({
  value,
  children,
  disabled = false,
  color = "default",
  ...props
}) => {
  const theme = useTheme().theme.formControls.helperText;
  const theirProps = excludeClassName(props);

  return (
    <p
      className={classNames(
        theme.base,
        theme.colors[color],
        disabled && theme.disabled
      )}
      {...theirProps}
    >
      {value ?? children ?? ""}
    </p>
  );
};
