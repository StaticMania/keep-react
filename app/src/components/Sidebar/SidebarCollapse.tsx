'use client'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useEffect, useId, useState } from 'react'
import { cn } from '../../helpers/cn'
import { DeepPartial } from '../../helpers/deep-partial'
import { Tooltip } from '../Tooltip'
import { useSidebarContext } from './SidebarContext'
import type { SidebarItemProps } from './SidebarItem'
import { SidebarItemContext } from './SidebarItemContext'
import { KeepSidebarTheme, sidebarTheme } from './theme'

/**
 * Props for the SidebarCollapse component.
 * @interface SidebarCollapseProps
 * @extends {PropsWithChildren}
 * @extends {Pick<SidebarItemProps, 'active' | 'as' | 'href' | 'icon' | 'label' | 'labelColor'>}
 * @extends {ComponentProps<'button'>}
 *
 */
export interface SidebarCollapseProps
  extends PropsWithChildren,
    Pick<SidebarItemProps, 'active' | 'as' | 'href' | 'icon' | 'label' | 'labelColor'>,
    ComponentProps<'button'> {
  /**
   * Event handler for the button click event.
   */
  onClick?: ComponentProps<'button'>['onClick']

  /**
   * Determines whether the sidebar is open or collapsed.
   */
  open?: boolean

  /**
   * Custom theme for the sidebar.
   */
  theme?: DeepPartial<KeepSidebarTheme>
}

export const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  className,
  icon: Icon,
  label,
  open = false,
  ...props
}) => {
  const id = useId()
  const { isCollapsed } = useSidebarContext()
  const [isOpen, setOpen] = useState(open)

  const theme = sidebarTheme.collapse

  useEffect(() => setOpen(open), [open])

  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <li>
      {isCollapsed && !isOpen ? (
        <Tooltip content={label} placement="right">
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </li>
  )

  return (
    <Wrapper>
      <button
        id={`keep-sidebar-collapse-${id}`}
        onClick={() => setOpen(!isOpen)}
        title={label}
        type="button"
        className={cn(theme.button, className)}
        {...props}>
        {Icon && (
          <div
            aria-hidden
            data-testid="keep-sidebar-collapse-icon"
            className={cn(theme.icon.base, theme.icon.open[isOpen ? 'on' : 'off'])}>
            {Icon}
          </div>
        )}
        {isCollapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
          <>
            <span data-testid="keep-sidebar-collapse-label" className={theme.label.base}>
              {label}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
              <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
            </svg>
          </>
        )}
      </button>
      <ul aria-labelledby={`keep-sidebar-collapse-${id}`} hidden={!isOpen} className={theme.list}>
        <SidebarItemContext.Provider value={{ isInsideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  )
}
SidebarCollapse.displayName = 'Sidebar.Collapse'
