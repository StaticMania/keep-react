'use client'
import { TableHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useTableContext } from './TableContext'
import { tableTheme } from './theme'

export const TableCell = forwardRef<HTMLTableCellElement, TableHTMLAttributes<HTMLTableCellElement>>(
  ({ children, className, ...props }, ref) => {
    const theme = tableTheme
    const { showBorder, showBorderPosition } = useTableContext()
    return (
      <td
        ref={ref}
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
  },
)
TableCell.displayName = 'Table.Cell'
