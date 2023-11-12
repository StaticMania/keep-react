import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { DropdownDivider } from './DropdownDivider'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepDropdownHeaderTheme {
  header: string
}

export const DropdownHeader: FC<PropsWithChildren & ComponentProps<'div'>> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.dropdown.floating.header

  return (
    <>
      <div className={twMerge(theme, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  )
}
