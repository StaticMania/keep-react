import { BreadcrumbItem } from './BreadcrumbItem'
import { useTheme } from '../../Keep/ThemeContext'
import { BreadcrumbContext } from './BreadcrumbContext'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface keepBreadCrumbTheme {
  breadCrumbWithBorder: string
  item: {
    base: string
    chevron: string
    href: {
      off: string
      on: string
    }
    icon: string
    iconWrapper: string
    disabled: string
    activeItem: {
      base: string
      border: string
      bar: string
    }
  }
  list: string
}

/**
 * Props for the Breadcrumb component.
 * @interface BreadcrumbProps
 * @extends {PropsWithChildren<ComponentProps<'nav'>>}
 */
export interface BreadcrumbProps extends PropsWithChildren<ComponentProps<'nav'>> {
  /**
   * The separator icon to be displayed between breadcrumb items.
   * @type {ReactNode}
   */
  separatorIcon?: ReactNode

  /**
   * Determines whether the breadcrumb should have a border.
   * @type {boolean}
   * @default false
   */
  breadCrumbWithBorder?: boolean

  /**
   * Additional CSS class name for the breadcrumb component.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The style for the breadcrumb list.
   * @type {string}
   * @default ''
   */
  listStyle?: string
}

const BreadcrumbComponent: FC<BreadcrumbProps> = ({
  children,
  separatorIcon,
  breadCrumbWithBorder = false,
  className,
  listStyle,
  ...props
}) => {
  const theme = useTheme().theme.breadcrumb
  return (
    <BreadcrumbContext.Provider value={{ separatorIcon }}>
      <nav
        aria-label="Breadcrumb"
        className={cn(breadCrumbWithBorder && theme.breadCrumbWithBorder, className)}
        {...props}>
        <ol className={cn(theme.list, listStyle)}>{children}</ol>
      </nav>
    </BreadcrumbContext.Provider>
  )
}

BreadcrumbComponent.displayName = 'Breadcrumb'
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem,
})
