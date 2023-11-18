import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { keepTableCellTheme } from './TableCell'
import { DeepPartial } from '../../helpers/deep-partial'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

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
    <tbody className={cn(theme.base, className)} {...props}>
      {children}
    </tbody>
  )
}
