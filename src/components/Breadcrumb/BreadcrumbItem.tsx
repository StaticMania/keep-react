import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../Keep/ThemeContex'
import { useBreadcrumbContext } from './BreadcrumbContext'
import type { ComponentProps, PropsWithChildren, ReactNode } from 'react'

export interface BreadcrumbItemProps extends PropsWithChildren<Omit<ComponentProps<'li'>, 'ref'>> {
  href?: string
  icon?: ReactNode
  active?: 'border' | 'bar' | 'base'
  disabled?: boolean
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  ({ children, className, href, icon: Icon, disabled, active, ...props }, ref): JSX.Element => {
    const { separatorIcon } = useBreadcrumbContext()
    const isLink = typeof href !== 'undefined'
    const theme = useTheme().theme.breadcrumb.item

    const Component = isLink ? 'a' : 'span'

    return (
      <li className={twMerge(theme.base, className)} {...props}>
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
          <div className={twMerge(theme.iconWrapper, disabled && theme.disabled, active && theme.activeItem[active])}>
            {Icon && <span className={theme.icon}>{Icon}</span>}
            {children}
          </div>
        </Component>
      </li>
    )
  },
)
BreadcrumbItem.displayName = 'Breadcrumb.Item'
