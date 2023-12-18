import type { ComponentProps, FC, PropsWithChildren } from 'react'
import type { DeepPartial } from '../../helpers/deep-partial'
import type { KeepSidebarCollapseTheme } from './SidebarCollapse'
import type { KeepSidebarCTATheme } from './SidebarCTA'
import type { KeepSidebarItemTheme } from './SidebarItem'
import type { KeepSidebarLogoTheme } from './SidebarLogo'

import { SidebarCollapse } from './SidebarCollapse'
import { SidebarContext } from './SidebarContext'
import { SidebarCTA } from './SidebarCTA'
import { SidebarItem } from './SidebarItem'
import { SidebarItemGroup } from './SidebarItemGroup'
import { SidebarItems } from './SidebarItems'
import { SidebarLogo } from './SidebarLogo'
import { KeepBoolean } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { mergeDeep } from '../../helpers/mergeDeep'
import { cn } from '../../helpers/cn'

export interface KeepSidebarTheme {
  root: {
    base: string
    collapsed: KeepBoolean
    inner: string
  }
  collapse: KeepSidebarCollapseTheme
  cta: KeepSidebarCTATheme
  item: KeepSidebarItemTheme
  items: string
  itemGroup: string
  logo: KeepSidebarLogoTheme
}

/**
 * Props for the Sidebar component.
 * @interface SidebarProps
 * @extends {PropsWithChildren}
 */
export interface SidebarProps extends PropsWithChildren, ComponentProps<'div'> {
  /**
   * The behavior of the sidebar when collapsed.
   * - 'collapse': The sidebar collapses to a smaller width.
   * - 'hide': The sidebar is completely hidden.
   */
  collapseBehavior?: 'collapse' | 'hide'

  /**
   * Determines whether the sidebar is initially collapsed.
   */
  collapsed?: boolean

  /**
   * The theme configuration for the sidebar.
   */
  theme?: DeepPartial<KeepSidebarTheme>

  /**
   * Additional CSS class name for the sidebar.
   */
  className?: string
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const oldTheme = useTheme().theme.sidebar
  const theme = mergeDeep(oldTheme, customTheme)

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside
        aria-label="Sidebar"
        hidden={isCollapsed && collapseBehavior === 'hide'}
        className={cn(theme.root.base, theme.root.collapsed[isCollapsed ? 'on' : 'off'], className)}
        {...props}
        id="sidebar">
        <div className={theme.root.inner}>{children}</div>
      </aside>
    </SidebarContext.Provider>
  )
}
SidebarComponent.displayName = 'Sidebar'

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
})
