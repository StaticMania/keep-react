import { useState, type ComponentProps, type FC, type PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import type { DeepPartial } from '../../helpers/deep-partial'

import { Checkbox } from '../CheckBox'
import { useTableContext } from './TableContext'
import { keepTableRowTheme, tableTheme } from './theme'

export interface TableRowProps extends PropsWithChildren, ComponentProps<'tr'> {
  theme?: DeepPartial<keepTableRowTheme>
}
export const TableRow: FC<TableRowProps> = ({ children, className, ...props }) => {
  const { hoverable, striped, showCheckbox } = useTableContext()
  const theme = tableTheme.row
  const [isChecked, setIsChecked] = useState(false)

  return (
    <tr
      data-testid="table-row-element"
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
}
