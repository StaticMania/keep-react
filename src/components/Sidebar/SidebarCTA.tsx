import type { ComponentProps, FC, PropsWithChildren } from 'react'
import type { DeepPartial } from '../../helpers/deep-partial'

import { useSidebarContext } from './SidebarContext'
import { KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface KeepSidebarCTATheme {
  base: string
  color: KeepSidebarCTAColors
}

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

export interface KeepSidebarCTAColors
  extends Pick<
    KeepColors,
    'blue' | 'dark' | 'failure' | 'gray' | 'green' | 'light' | 'purple' | 'red' | 'success' | 'warning' | 'yellow'
  > {
  [key: string]: string
}

export const SidebarCTA: FC<SidebarCTAProps> = ({ children, color = 'info', className, ...props }) => {
  const { isCollapsed } = useSidebarContext()
  const theme = useTheme().theme.sidebar.cta

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
