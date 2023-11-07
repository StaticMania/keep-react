import { twMerge } from 'tailwind-merge'
import type { ComponentProps, ElementType, FC, PropsWithChildren, ReactNode } from 'react'
import type { DeepPartial } from '../../helpers/deep-partial'

import { forwardRef, useId } from 'react'
import { Tooltip } from '../Tooltip'
import { useSidebarContext } from './SidebarContext'
import { useSidebarItemContext } from './SidebarItemContext'
import { KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContex'
import { mergeDeep } from '../../helpers/mergeDeep'
import { Badge } from '../Badge'

export interface KeepSidebarItemTheme {
  active: string
  base: string
  collapsed: {
    insideCollapse: string
    noIcon: string
  }
  content: {
    base: string
  }
  icon: {
    base: string
    active: string
  }
  label: string
}

export interface SidebarItemProps
  extends PropsWithChildren,
    Omit<ComponentProps<'div'>, 'ref'>,
    Record<string, unknown> {
  active?: boolean
  as?: ElementType
  href?: string
  icon?: ReactNode
  label?: string
  labelColor?: keyof SidebarItemLabelColors
  theme?: DeepPartial<KeepSidebarItemTheme>
}

export interface SidebarItemLabelColors extends Pick<KeepColors, 'gray'> {
  [key: string]: string
}

const ListItem: FC<
  PropsWithChildren<{
    id: string
    isCollapsed: boolean
    tooltipChildren: ReactNode | undefined
  }>
> = ({ id, isCollapsed, tooltipChildren, children: wrapperChildren }) => (
  <li>
    {isCollapsed ? (
      <Tooltip content={<TooltipContent id={id}>{tooltipChildren}</TooltipContent>} placement="right">
        {wrapperChildren}
      </Tooltip>
    ) : (
      wrapperChildren
    )}
  </li>
)

const TooltipContent: FC<PropsWithChildren<{ id: string }>> = ({ id, children }) => (
  <Children id={id}>{children}</Children>
)

const Children: FC<PropsWithChildren<{ id: string }>> = ({ id, children }) => {
  const theme = useTheme().theme.sidebar.item

  return (
    <span
      data-testid="keep-sidebar-item-content"
      id={`keep-sidebar-item-${id}`}
      className={twMerge(theme.content.base)}>
      {children}
    </span>
  )
}

export const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    {
      active: isActive,
      as: Component = 'a',
      children,
      className,
      icon: Icon,
      label,
      labelColor = 'info',
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const id = useId()
    const { isCollapsed } = useSidebarContext()
    const { isInsideCollapse } = useSidebarItemContext()
    const oldTheme = useTheme().theme.sidebar.item
    const theme = mergeDeep(oldTheme, customTheme)

    return (
      <ListItem id={id} isCollapsed={isCollapsed} tooltipChildren={children}>
        <Component
          aria-labelledby={`keep-sidebar-item-${id}`}
          ref={ref}
          className={twMerge(
            theme.base,
            isActive && theme.active,
            !isCollapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
            className,
          )}
          {...props}>
          {Icon && (
            <div
              aria-hidden
              data-testid="keep-sidebar-item-icon"
              className={twMerge(theme.icon?.base, isActive && theme.icon?.active)}>
              {Icon}
            </div>
          )}
          {isCollapsed && !Icon && (
            <span className={theme.collapsed?.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? '?'}</span>
          )}
          {!isCollapsed && <Children id={id}>{children}</Children>}
          {!isCollapsed && label && (
            <Badge color={labelColor} data-testid="keep-sidebar-label" hidden={isCollapsed} className={theme.label}>
              {label}
            </Badge>
          )}
        </Component>
      </ListItem>
    )
  },
)

SidebarItem.displayName = 'Sidebar.Item'
