'use client'
import { useState, type ComponentProps, type FC, type PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { TableBody } from './TableBody'
import { TableCaption } from './TableCaption'
import { TableCell } from './TableCell'
import type { TableContextType } from './TableContext'
import { TableContext } from './TableContext'
import { TableHead } from './TableHead'
import { TableHeadCell } from './TableHeadCell'
import { TableRow } from './TableRow'
import { tableTheme } from './theme'

export interface TableProps extends PropsWithChildren, ComponentProps<'table'>, TableContextType {
  showCheckbox?: boolean
  showBorder?: boolean
  showBorderPosition?: 'left' | 'right'
  checked?: boolean
  className?: string
}

const TableComponent: FC<TableProps> = ({
  children,
  className,
  hoverable,
  striped,
  showCheckbox = false,
  showBorder = false,
  showBorderPosition = 'right',
  ...props
}) => {
  const theme = tableTheme

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckbox = (value: boolean) => {
    setIsChecked(value)
  }

  return (
    <div id="tableScrollBar" className="w-full overflow-x-auto rounded-lg">
      <div className={cn(theme.root.wrapper)}>
        <TableContext.Provider
          value={{
            striped,
            hoverable,
            showCheckbox,
            showBorder,
            showBorderPosition,
            checked: isChecked,
            handleCheckbox: handleCheckbox,
          }}>
          <table className={cn(theme.root.base, className)} {...props}>
            {children}
          </table>
        </TableContext.Provider>
      </div>
    </div>
  )
}

TableComponent.displayName = 'Table'

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
  Caption: TableCaption,
})
