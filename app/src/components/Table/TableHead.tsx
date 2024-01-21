import { type ComponentProps, type FC, type PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { DeepPartial } from '../../helpers/deep-partial'
import { CheckBox } from '../CheckBox'
import { useTableContext } from './TableContext'
import { keepTableHeadTheme, tableTheme } from './theme'

/**
 * Props for the TableHead component.
 * @interface TableHeadProps
 * @extends {PropsWithChildren}
 * @extends {ComponentProps<'thead'>}
 */
export interface TableHeadProps extends PropsWithChildren, ComponentProps<'thead'> {
  /**
   * Optional theme for the TableHead component.
   * @type {DeepPartial<keepTableHeadTheme>}
   */
  theme?: DeepPartial<keepTableHeadTheme>
}

export const TableHead: FC<TableHeadProps> = ({ children, className, ...props }) => {
  const theme = tableTheme
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
