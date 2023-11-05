import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../Keep/ThemeContex";

export interface DividerProps {
  className?: string;
}

export interface DividerTheme {
  base: string;
}

export const NavigationDivider: FC<DividerProps> = ({ className }) => {
  const { divider } = useTheme().theme.navigation;
  return <div className={twMerge(className ? className : divider.base)}></div>;
};
