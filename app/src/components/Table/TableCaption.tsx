'use client'
import { TableHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { tableTheme } from './theme'

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableHTMLAttributes<HTMLTableCaptionElement>>(
  ({ children, className, ...props }, ref) => {
    const theme = tableTheme.caption.base
    return (
      <caption ref={ref} {...props} className={cn(theme, className)}>
        {children}
      </caption>
    )
  },
)

TableCaption.displayName = 'Table.Caption'
