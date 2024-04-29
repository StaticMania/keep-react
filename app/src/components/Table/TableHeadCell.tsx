'use client'
import { forwardRef, type ReactNode, type TableHTMLAttributes } from 'react'
import { cn } from '../../helpers/cn'
import { TableContext } from './TableContext'
import { tableTheme } from './theme'

export interface TableHeadCellProps extends TableHTMLAttributes<HTMLTableCellElement> {
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  ({ children, className, icon, iconPosition = 'right', ...props }, ref) => {
    const theme = tableTheme.head.cell

    return (
      <TableContext.Provider value={{ icon, iconPosition }}>
        <th ref={ref} className={cn(theme.base, !icon && theme.icon.off, className)} {...props}>
          <div className={cn(theme.icon.base)}>
            {icon && iconPosition === 'left' && <span className={cn(theme.icon.on.left)}>{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className={cn(theme.icon.on.right)}>{icon}</span>}
          </div>
        </th>
      </TableContext.Provider>
    )
  },
)
TableHeadCell.displayName = 'Table.HeadCell'
