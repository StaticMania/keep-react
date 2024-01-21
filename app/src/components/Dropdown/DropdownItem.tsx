import { cn } from '../../helpers/cn'
import { DeepPartial } from '../../helpers/deep-partial'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { dropdownTheme, keepDropdownItemTheme } from './theme'

/**
 * Props for the DropdownItem component.
 * @interface DropdownItemProps
 * @extends {PropsWithChildren<ComponentProps<'li'>>}
 */
export interface DropdownItemProps extends PropsWithChildren, ComponentProps<'li'> {
  /**
   * The icon to display in the dropdown item.
   * @type {ReactNode}
   * @default ''
   */
  icon?: ReactNode
  /**
   * The callback function to be called when the dropdown item is clicked.
   * @type {() => void}
   */
  onClick?: () => void
  /**
   * The theme for the dropdown item.
   * @type {DeepPartial<keepDropdownItemTheme>}
   * @default {}
   */
  theme?: DeepPartial<keepDropdownItemTheme>
}

export const DropdownItem: FC<DropdownItemProps> = ({ children, className, icon: Icon, onClick, ...props }) => {
  const theme = dropdownTheme.floating.item
  return (
    <li className={cn(theme.base, className)} onClick={onClick} {...props}>
      {Icon && <span className={theme.icon}>{Icon}</span>}
      {children}
    </li>
  )
}
