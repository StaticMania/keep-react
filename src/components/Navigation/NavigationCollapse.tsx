import React from "react";
import { twMerge } from "tailwind-merge";
import { useNavigationContext } from "./NavigationContext";
import { useTheme } from "../../Keep/ThemeContex";

export interface CollapseProps {
  children?: React.ReactNode;
  className?: string;
  collapseType?: "sidebar" | "fullWidth";
}

export interface CollapseTheme {
  base: string;
  menu: {
    open: string;
    close: string;
    position: string;
  };
  type: {
    sidebar: string;
    fullWidth: string;
  };
}

export const NavigationCollapse: React.FC<CollapseProps> = ({
  children,
  className,
  collapseType = "fullWidth",
}) => {
  const { isOpen } = useNavigationContext();
  const { collapse } = useTheme().theme.navigation;
  return (
    <div
      className={twMerge(
        collapse.base,
        isOpen ? collapse.menu.open : collapse.menu.close,
        className ? className : collapse.menu.position,
        collapseType === "sidebar"
          ? collapse.type.sidebar
          : collapse.type.fullWidth
      )}
    >
      {children}
    </div>
  );
};
