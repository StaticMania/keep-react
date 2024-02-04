import type { ComponentProps, ElementType, FC, PropsWithChildren, ReactNode } from 'react'
import { forwardRef, useId } from 'react'
import { KeepColors } from '../../Keep/KeepTheme'
import { cn } from '../../helpers/cn'
import type { DeepPartial } from '../../helpers/deep-partial'
import { mergeDeep } from '../../helpers/mergeDeep'
import { Badge } from '../Badge'
import { Tooltip } from '../Tooltip'
import { useSidebarContext } from './SidebarContext'
import { useSidebarItemContext } from './SidebarItemContext'
import { KeepSidebarItemTheme, sidebarTheme } from './theme'

/**
 * Props for the SidebarItem component.
 * @interface SidebarItemProps
 * @extends {PropsWithChildren}
 * @extends {Omit<ComponentProps<'div'>, 'ref'>}
 * @extends {Record<string, unknown>}
 */
export interface SidebarItemProps
  extends PropsWithChildren,
    Omit<ComponentProps<'div'>, 'ref'>,
    Record<string, unknown> {
  /**
   * Determines if the sidebar item is active.
   * @type {boolean}
   * @default false
   */
  active?: boolean
  /**
   * The HTML element type or React component to be rendered as the sidebar item.
   * @type {ElementType}
   * @default 'a'
   */
  as?: ElementType
  /**
   * The URL to navigate to when the sidebar item is clicked.
   * @type {string}
   * @default ''
   */
  href?: string
  /**
   * The icon to be displayed in the sidebar item.
   * @type {ReactNode}
   * @default ''
   */
  icon?: ReactNode
  /**
   * The label text to be displayed in the sidebar item.
   * @type {string}
   * @default ''
   */
  label?: string
  /**
   * The color of the label text in the sidebar item.
   * @type {keyof SidebarItemLabelColors}
   * @default 'info'
   */
  labelColor?: keyof SidebarItemLabelColors
  /**
   * The theme configuration for the sidebar item.
   * @type {DeepPartial<KeepSidebarItemTheme>}
   * @default {}
   */
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
  const theme = sidebarTheme.item

  return (
    <span data-testid="keep-sidebar-item-content" id={`keep-sidebar-item-${id}`} className={cn(theme.content.base)}>
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
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const id = useId()
    const { isCollapsed } = useSidebarContext()
    const { isInsideCollapse } = useSidebarItemContext()
    const oldTheme = sidebarTheme.item
    const theme = mergeDeep(oldTheme, customTheme)

    return (
      <ListItem id={id} isCollapsed={isCollapsed} tooltipChildren={children}>
        <Component
          aria-labelledby={`keep-sidebar-item-${id}`}
          ref={ref}
          className={cn(
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
              className={cn(theme.icon?.base, isActive && theme.icon?.active)}>
              {Icon}
            </div>
          )}
          {isCollapsed && !Icon && (
            <span className={theme.collapsed?.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? '?'}</span>
          )}
          {!isCollapsed && <Children id={id}>{children}</Children>}
          {!isCollapsed && label && (
            <Badge data-testid="keep-sidebar-label" className={theme.label}>
              {label}
            </Badge>
          )}
        </Component>
      </ListItem>
    )
  },
)

SidebarItem.displayName = 'Sidebar.Item'
