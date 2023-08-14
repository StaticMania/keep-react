import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export interface SidebarItemsProps
  extends PropsWithChildren,
    ComponentProps<"div"> {}

const SidebarItems: FC<SidebarItemsProps> = ({
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
export default SidebarItems;
