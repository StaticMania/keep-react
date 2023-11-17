import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { DropdownDivider } from './DropdownDivider'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepDropdownHeaderTheme {
  header: string
}

export const DropdownHeader: FC<PropsWithChildren & ComponentProps<'div'>> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.dropdown.floating.header

  return (
    <>
      <div className={cn(theme, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  )
}
