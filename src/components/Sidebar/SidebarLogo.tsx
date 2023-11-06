/* eslint-disable @next/next/no-img-element */
import type { ComponentProps, FC, PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";
import { useId } from "react";
import { useSidebarContext } from "./SidebarContext";
import { useTheme } from "../../Keep/ThemeContex";
import { KeepBoolean } from "../../Keep/KeepTheme";

export interface KeepSidebarLogoTheme {
  base: string;
  collapsed: KeepBoolean;
  img: string;
}

export interface SidebarLogoProps
  extends PropsWithChildren,
    ComponentProps<"a"> {
  href: string;
  img: string;
  imgAlt?: string;
}

export const SidebarLogo: FC<SidebarLogoProps> = ({
  children,
  className,
  href,
  img,
  imgAlt = "",
  ...props
}) => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const theme = useTheme().theme.sidebar.logo;

  return (
    <a
      aria-labelledby={`keep-sidebar-logo-${id}`}
      href={href}
      className={twMerge(theme.base, className)}
      {...props}
    >
      <img alt={imgAlt} src={img} className={theme.img} />
      <span
        className={theme.collapsed[isCollapsed ? "on" : "off"]}
        id={`keep-sidebar-logo-${id}`}
      >
        {children}
      </span>
    </a>
  );
};
SidebarLogo.displayName = "Sidebar.Logo";
