import { twMerge } from 'tailwind-merge'
import { BreadcrumbItem } from './BreadcrumbItem'
import { useTheme } from '../../Keep/ThemeContext'
import { BreadcrumbContext } from './BreadcrumbContext'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'

/**
 * Defines the interface for the theme object used in the Breadcrumb component.
 */
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
 * @param {ReactNode} separatorIcon - The icon to use as a separator between breadcrumb items.
 * @param {boolean} breadCrumbWithBorder - Whether to display a border around the breadcrumb component.
 */
export interface BreadcrumbProps extends PropsWithChildren<ComponentProps<'nav'>> {
  separatorIcon?: ReactNode
  breadCrumbWithBorder?: boolean
}

const BreadcrumbComponent: FC<BreadcrumbProps> = ({
  children,
  separatorIcon,
  breadCrumbWithBorder = false,
  ...props
}) => {
  const theme = useTheme().theme.breadcrumb

  return (
    <BreadcrumbContext.Provider value={{ separatorIcon }}>
      <nav aria-label="Breadcrumb" className={twMerge(breadCrumbWithBorder && theme.breadCrumbWithBorder)} {...props}>
        <ol className={theme.list}>{children}</ol>
      </nav>
    </BreadcrumbContext.Provider>
  )
}

BreadcrumbComponent.displayName = 'Breadcrumb'
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem,
})
