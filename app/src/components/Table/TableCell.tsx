import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { DeepPartial } from '../../helpers/deep-partial'
import { useTableContext } from './TableContext'
import { keepTableCellTheme, tableTheme } from './theme'

/**
 * Props for the TableCell component.
 * @interface TableCellProps
 * @extends {PropsWithChildren<ComponentProps<'td'>>}
 */
export interface TableCellProps extends PropsWithChildren, ComponentProps<'td'> {
  /**
   * Optional theme for the TableCell.
   * @type {DeepPartial<keepTableCellTheme>}
   */
  theme?: DeepPartial<keepTableCellTheme>
}

export const TableCell: FC<TableCellProps> = ({ children, className, ...props }) => {
  const theme = tableTheme
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
