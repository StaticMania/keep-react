import type { ComponentProps, FC, PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'
import { useTableContext } from './TableContext'
import { DeepPartial } from '../../helpers/deep-partial'
import { useTheme } from '../../Keep/ThemeContex'
export interface keepTableCellTheme {
  base: string
}

export interface TableCellProps extends PropsWithChildren, ComponentProps<'td'> {
  theme?: DeepPartial<keepTableCellTheme>
}

export const TableCell: FC<TableCellProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.table
  const { showBorder, showBorderPosition } = useTableContext()
  return (
    <td
      className={twMerge(
        theme.body.cell.base,
        className,
        showBorder && showBorderPosition === 'right' && theme.body.showBorderPosition.right,
        showBorder && showBorderPosition === 'left' && theme.body.showBorderPosition.left,
      )}
      {...props}>
      {children}
    </td>
  )
}
