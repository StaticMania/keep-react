import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { DropdownDivider } from './DropdownDivider'
import { cn } from '../../helpers/cn'
import { dropdownTheme } from './theme'

/**
 * DropdownHeader component.
 * @param {PropsWithChildren<ComponentProps<'div'>>} props
 */
export const DropdownHeader: FC<PropsWithChildren & ComponentProps<'div'>> = ({ children, className, ...props }) => {
  const theme = dropdownTheme
  return (
    <>
      <div className={cn(theme, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  )
}
