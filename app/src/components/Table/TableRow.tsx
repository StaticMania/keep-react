import { useState, type ComponentProps, type FC, type PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import type { DeepPartial } from '../../helpers/deep-partial'
import { CheckBox } from '../CheckBox'
import { useTableContext } from './TableContext'
import { keepTableRowTheme, tableTheme } from './theme'

export interface TableRowProps extends PropsWithChildren, ComponentProps<'tr'> {
  theme?: DeepPartial<keepTableRowTheme>
}
export const TableRow: FC<TableRowProps> = ({ children, className, ...props }) => {
  const { hoverable, striped, showCheckbox, checked } = useTableContext()
  const theme = tableTheme.row
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckbox = (value: boolean) => {
    setIsChecked(value)
  }

  return (
    <tr
      data-testid="table-row-element"
      className={cn(theme.base, striped && theme.striped, hoverable && theme.hovered, className)}
      {...props}>
      {showCheckbox && (
        <th className="p-4">
          <CheckBox
            size="md"
            variant="square"
            id="two"
            name="table"
            color="info"
            checked={checked ? checked : isChecked}
            handleChecked={handleCheckbox}
          />
        </th>
      )}
      {children}
    </tr>
  )
}
