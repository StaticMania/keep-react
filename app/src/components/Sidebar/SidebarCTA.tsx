import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import type { DeepPartial } from '../../helpers/deep-partial'
import { useSidebarContext } from './SidebarContext'
import { KeepSidebarCTAColors, KeepSidebarCTATheme, sidebarTheme } from './theme'

/**
 * Props for the SidebarCTA component.
 * @interface SidebarCTAProps
 * @extends {PropsWithChildren}
 */
export interface SidebarCTAProps extends PropsWithChildren, Omit<ComponentProps<'div'>, 'color'> {
  /**
   * The color of the SidebarCTA component.
   */
  color?: keyof KeepSidebarCTAColors

  /**
   * The theme configuration for the SidebarCTA component.
   */
  theme?: DeepPartial<KeepSidebarCTATheme>
}

export const SidebarCTA: FC<SidebarCTAProps> = ({ children, color = 'info', className, ...props }) => {
  const { isCollapsed } = useSidebarContext()
  const theme = sidebarTheme.cta

  return (
    <div
      data-testid="sidebar-cta"
      hidden={isCollapsed}
      className={cn(theme.base, theme.color[color], className)}
      {...props}>
      {children}
    </div>
  )
}

SidebarCTA.displayName = 'Sidebar.CTA'
