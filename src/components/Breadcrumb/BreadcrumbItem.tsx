import { forwardRef } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { useBreadcrumbContext } from './BreadcrumbContext'
import type { ComponentProps, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the BreadcrumbItem component.
 * @interface BreadcrumbItemProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'li'>, 'ref'>>}
 */
export interface BreadcrumbItemProps extends PropsWithChildren<Omit<ComponentProps<'li'>, 'ref'>> {
  /**
   * The URL to navigate to when the breadcrumb item is clicked.
   */
  href?: string

  /**
   * The icon to display alongside the breadcrumb item.
   */
  icon?: ReactNode

  /**
   * The active state of the breadcrumb item.
   * - 'border': Adds a border to the breadcrumb item.
   * - 'bar': Adds a bar to the breadcrumb item.
   * - 'base': Default active state.
   */
  active?: 'border' | 'bar' | 'base'

  /**
   * Determines if the breadcrumb item is disabled.
   */
  disabled?: boolean

  /**
   * Additional CSS class name for the breadcrumb item.
   */
  className?: string
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  ({ children, className, href, icon: Icon, disabled, active, ...props }, ref): JSX.Element => {
    const { separatorIcon } = useBreadcrumbContext()
    const isLink = typeof href !== 'undefined'
    const theme = useTheme().theme.breadcrumb.item

    const Component = isLink ? 'a' : 'span'

    return (
      <li className={cn(theme.base, className)} {...props}>
        {separatorIcon && (
          <span className={theme.chevron} data-testid="keep-breadcrumb-separator">
            {separatorIcon}
          </span>
        )}
        <Component
          ref={ref as never}
          className={theme.href[isLink ? 'on' : 'off']}
          data-testid="keep-breadcrumb-item"
          href={href}>
          <div className={cn(theme.iconWrapper, disabled && theme.disabled, active && theme.activeItem[active])}>
            {Icon && <span className={theme.icon}>{Icon}</span>}
            {children}
          </div>
        </Component>
      </li>
    )
  },
)
BreadcrumbItem.displayName = 'Breadcrumb.Item'
