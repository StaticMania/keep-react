import { useTheme } from "../../Keep/ThemeContex";
import { twMerge } from "tailwind-merge";
import type { ComponentProps, FC } from "react";

export interface keepDropdownDividerTheme {
  divider: string;
}

export const DropdownDivider: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  const theme = useTheme().theme.dropdown.floating.divider;

  return <div className={twMerge(theme, className)} {...props} />;
};
