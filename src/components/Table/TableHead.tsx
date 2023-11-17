import { type ComponentProps, type FC, type PropsWithChildren } from 'react'
import type { keepTableHeadCellTheme } from './TableHeadCell'
import { useTableContext } from './TableContext'
import { useTheme } from '../../Keep/ThemeContext'
import { DeepPartial } from '../../helpers/deep-partial'
import { CheckBox } from '../CheckBox'
import { cn } from '../../helpers/cn'

export interface keepTableHeadTheme {
  base: string
  cell: keepTableHeadCellTheme
}

export interface TableHeadProps extends PropsWithChildren, ComponentProps<'thead'> {
  theme?: DeepPartial<keepTableHeadTheme>
}

export const TableHead: FC<TableHeadProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.table
  const { showCheckbox, checked, handleCheckbox } = useTableContext()

  return (
    <thead className={cn(theme.head.base, className)} {...props}>
      <tr>
        {showCheckbox && (
          <td className="pl-4">
            <CheckBox
              size="md"
              variant="square"
              id="two"
              name="table"
              color="info"
              checked={checked}
              handleChecked={handleCheckbox}
            />
          </td>
        )}
        {children}
      </tr>
    </thead>
  )
}
