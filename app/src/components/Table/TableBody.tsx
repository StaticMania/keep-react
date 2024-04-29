'use client'
import { TableHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { tableTheme } from './theme'

export const TableBody = forwardRef<HTMLTableSectionElement, TableHTMLAttributes<HTMLTableSectionElement>>(
  ({ children, className, ...props }, ref) => {
    const theme = tableTheme.body

    return (
      <tbody ref={ref} className={cn(theme.base, className)} {...props}>
        {children}
      </tbody>
    )
  },
)

TableBody.displayName = 'Table.Body'
