import { useTheme } from '../../Keep/ThemeContext'
import type { ComponentProps, FC } from 'react'
import { cn } from '../../helpers/cn'

export interface keepDropdownDividerTheme {
  divider: string
}

export const DropdownDivider: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  const theme = useTheme().theme.dropdown.floating.divider

  return <div className={cn(theme, className)} {...props} />
}
