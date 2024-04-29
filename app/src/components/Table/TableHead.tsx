'use client'
import { TableHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { Checkbox } from '../Checkbox'
import { useTableContext } from './TableContext'
import { tableTheme } from './theme'

export const TableHead = forwardRef<HTMLTableSectionElement, TableHTMLAttributes<HTMLTableSectionElement>>(
  ({ children, className, ...props }, ref) => {
    const theme = tableTheme
    const { showCheckbox } = useTableContext()

    return (
      <thead ref={ref} className={cn(theme.head.base, className)} {...props}>
        <tr>
          {showCheckbox && (
            <td className="pl-4">
              <Checkbox variant="checked" />
            </td>
          )}
          {children}
        </tr>
      </thead>
    )
  },
)

TableHead.displayName = 'Table.Head'
