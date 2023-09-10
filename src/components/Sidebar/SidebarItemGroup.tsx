import type { ComponentProps, FC, PropsWithChildren } from "react";

import classNames from "classnames";
import { SidebarItemContext } from "./SidebarItemContext";
import { useTheme } from "../../Keep/ThemeContex";

export interface SidebarItemGroupProps
  extends PropsWithChildren,
    ComponentProps<"ul"> {}

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,

  ...props
}) => {
  const theme = useTheme().theme.sidebar.itemGroup;

  return (
    <ul
      data-testid="keep-sidebar-item-group"
      className={classNames(theme, className)}
      {...props}
    >
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>
        {children}
      </SidebarItemContext.Provider>
    </ul>
  );
};
SidebarItemGroup.displayName = "Sidebar.ItemGroup";
