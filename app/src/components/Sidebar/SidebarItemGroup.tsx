import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { SidebarItemContext } from './SidebarItemContext'
import { sidebarTheme } from './theme'

export interface SidebarItemGroupProps extends PropsWithChildren, ComponentProps<'ul'> {}

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,

  ...props
}) => {
  const theme = sidebarTheme.itemGroup

  return (
    <ul data-testid="keep-sidebar-item-group" className={cn(theme, className)} {...props}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  )
}
SidebarItemGroup.displayName = 'Sidebar.ItemGroup'
