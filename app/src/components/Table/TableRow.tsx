'use client'
import { TableHTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '../../helpers/cn'
import { Checkbox } from '../Checkbox'
import { useTableContext } from './TableContext'
import { tableTheme } from './theme'

export const TableRow = forwardRef<HTMLTableRowElement, TableHTMLAttributes<HTMLTableRowElement>>(
  ({ children, className, ...props }, ref) => {
    const { hoverable, striped, showCheckbox } = useTableContext()
    const theme = tableTheme.row
    const [isChecked, setIsChecked] = useState(false)

    return (
      <tr
        ref={ref}
        className={cn(theme.base, striped && theme.striped, hoverable && theme.hovered, className)}
        {...props}>
        {showCheckbox && (
          <th className="p-4">
            <Checkbox variant="checked" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
          </th>
        )}
        {children}
      </tr>
    )
  },
)

TableRow.displayName = 'Table.Row'
