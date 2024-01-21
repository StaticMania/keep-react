import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export interface SidebarItemsProps extends PropsWithChildren, ComponentProps<'div'> {}

export const SidebarItems: FC<SidebarItemsProps> = ({ children, className, ...props }) => {
  const theme = sidebarTheme.items

  return (
    <div className={cn(theme, className)} data-testid="keep-sidebar-items" {...props}>
      {children}
    </div>
  )
}

SidebarItems.displayName = 'Sidebar.Items'
