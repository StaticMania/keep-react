import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { DeepPartial } from '../../helpers/deep-partial'
import { TableContext } from './TableContext'
import { keepTableHeadCellTheme, tableTheme } from './theme'

export interface TableHeadCellProps extends PropsWithChildren, ComponentProps<'th'> {
  theme?: DeepPartial<keepTableHeadCellTheme>
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const TableHeadCell: FC<TableHeadCellProps> = ({
  children,
  className,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const theme = tableTheme.head.cell

  return (
    <TableContext.Provider value={{ icon, iconPosition }}>
      <th className={cn(theme.base, !icon && theme.icon.off, className)} {...props}>
        <div className={cn(theme.icon.base)}>
          {icon && iconPosition === 'left' && <span className={cn(theme.icon.on.left)}>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className={cn(theme.icon.on.right)}>{icon}</span>}
        </div>
      </th>
    </TableContext.Provider>
  )
}
