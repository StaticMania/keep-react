import type { ComponentProps, FC } from 'react'
import { cn } from '../../helpers/cn'
import { dropdownTheme } from './theme'

export const DropdownDivider: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  const theme = dropdownTheme
  return <div className={cn(theme, className)} {...props} />
}
