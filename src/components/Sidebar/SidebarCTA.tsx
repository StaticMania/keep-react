import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { DeepPartial } from "../../helpers/deep-partial";

import { useSidebarContext } from "./SidebarContext";
import { KeepColors } from "../../Keep/KeepTheme";
import { useTheme } from "../../Keep/ThemeContex";

export interface KeepSidebarCTATheme {
  base: string;
  color: KeepSidebarCTAColors;
}

export interface SidebarCTAProps
  extends PropsWithChildren,
    Omit<ComponentProps<"div">, "color"> {
  color?: keyof KeepSidebarCTAColors;
  theme?: DeepPartial<KeepSidebarCTATheme>;
}

export interface KeepSidebarCTAColors
  extends Pick<
    KeepColors,
    | "blue"
    | "dark"
    | "failure"
    | "gray"
    | "green"
    | "light"
    | "purple"
    | "red"
    | "success"
    | "warning"
    | "yellow"
  > {
  [key: string]: string;
}

export const SidebarCTA: FC<SidebarCTAProps> = ({
  children,
  color = "info",
  className,
  ...props
}) => {
  const { isCollapsed } = useSidebarContext();
  const theme = useTheme().theme.sidebar.cta;

  return (
    <div
      data-testid="sidebar-cta"
      hidden={isCollapsed}
      className={classNames(theme.base, theme.color[color], className)}
      {...props}
    >
      {children}
    </div>
  );
};

SidebarCTA.displayName = "Sidebar.CTA";
