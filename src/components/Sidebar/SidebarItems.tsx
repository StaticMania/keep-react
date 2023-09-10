import type { ComponentProps, FC, PropsWithChildren } from "react";

import { useTheme } from "../../Keep/ThemeContex";
import classNames from "classnames";

export interface SidebarItemsProps
  extends PropsWithChildren,
    ComponentProps<"div"> {}

export const SidebarItems: FC<SidebarItemsProps> = ({
  children,
  className,
  ...props
}) => {
  const theme = useTheme().theme.sidebar.items;

  return (
    <div
      className={classNames(theme, className)}
      data-testid="keep-sidebar-items"
      {...props}
    >
      {children}
    </div>
  );
};

SidebarItems.displayName = "Sidebar.Items";
