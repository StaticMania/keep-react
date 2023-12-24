import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface SidebarItemsProps extends PropsWithChildren, ComponentProps<'div'> {}

export const SidebarItems: FC<SidebarItemsProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.sidebar.items

  return (
    <div className={cn(theme, className)} data-testid="keep-sidebar-items" {...props}>
      {children}
    </div>
  )
}

SidebarItems.displayName = 'Sidebar.Items'
