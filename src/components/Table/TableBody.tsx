import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { keepTableCellTheme } from './TableCell'
import { DeepPartial } from '../../helpers/deep-partial'
import { useTheme } from '../../Keep/ThemeContex'

export interface keepTableBodyTheme {
  base: string
  cell: keepTableCellTheme
  showBorderPosition: {
    left: string
    right: string
  }
}

export interface TableBodyProps extends PropsWithChildren, ComponentProps<'tbody'> {
  theme?: DeepPartial<keepTableCellTheme>
}

export const TableBody: FC<TableBodyProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.table.body

  return (
    <tbody className={twMerge(theme.base, className)} {...props}>
      {children}
    </tbody>
  )
}
