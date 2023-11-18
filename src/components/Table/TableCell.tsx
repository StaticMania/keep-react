import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTableContext } from './TableContext'
import { DeepPartial } from '../../helpers/deep-partial'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

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
      className={cn(
        theme.body.cell.base,
        showBorder && showBorderPosition === 'right' && theme.body.showBorderPosition.right,
        showBorder && showBorderPosition === 'left' && theme.body.showBorderPosition.left,
        className,
      )}
      {...props}>
      {children}
    </td>
  )
}
