import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { DeepPartial } from "../../helpers/deep-partial";
import type { KeepSidebarCollapseTheme } from "./SidebarCollapse";
import SidebarCollapse from "./SidebarCollapse";
import { SidebarContext } from "./SidebarContext";
import type { KeepSidebarCTATheme } from "./SidebarCTA";
import SidebarCTA from "./SidebarCTA";
import type { KeepSidebarItemTheme } from "./SidebarItem";
import SidebarItem from "./SidebarItem";
import SidebarItemGroup from "./SidebarItemGroup";
import SidebarItems from "./SidebarItems";
import type { KeepSidebarLogoTheme } from "./SidebarLogo";
import SidebarLogo from "./SidebarLogo";
import { KeepBoolean } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";
import { mergeDeep } from "@/src/helpers/mergeDeep";

export interface KeepSidebarTheme {
  root: {
    base: string;
    collapsed: KeepBoolean;
    inner: string;
  };
  collapse: KeepSidebarCollapseTheme;
  cta: KeepSidebarCTATheme;
  item: KeepSidebarItemTheme;
  items: string;
  itemGroup: string;
  logo: KeepSidebarLogoTheme;
}

export interface SidebarProps extends PropsWithChildren, ComponentProps<"div"> {
  collapseBehavior?: "collapse" | "hide";
  collapsed?: boolean;
  theme?: DeepPartial<KeepSidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  collapseBehavior = "collapse",
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  ...props
}) => {
  const oldTheme = useTheme().theme.sidebar;
  const theme = mergeDeep(oldTheme, customTheme);

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside
        aria-label="Sidebar"
        hidden={isCollapsed && collapseBehavior === "hide"}
        className={classNames(
          theme.root.base,
          theme.root.collapsed[isCollapsed ? "on" : "off"]
        )}
        {...props}
        id="sidebar"
      >
        <div className={theme.root.inner}>{children}</div>
      </aside>
    </SidebarContext.Provider>
  );
};

SidebarComponent.displayName = "Sidebar";
export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
