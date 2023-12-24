import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

/**
 * Represents the context type for the Table component.
 * @interface TableContextType
 */
export type TableContextType = {
  /**
   * Specifies whether the table rows should be striped.
   * @type {boolean}
   * @default false
   */
  striped?: boolean

  /**
   * Specifies whether the table rows should be hoverable.
   * @type {boolean}
   * @default false
   */
  hoverable?: boolean

  /**
   * Specifies whether to show checkboxes for each row in the table.
   * @type {boolean}
   * @default false
   */
  showCheckbox?: boolean

  /**
   * Specifies the icon to be displayed in the table.
   * @type {ReactNode}
   */
  icon?: ReactNode

  /**
   * Specifies the position of the icon in the table.
   * @type {string}
   * @default 'left'
   */
  iconPosition?: string

  /**
   * Specifies whether to show borders around the table.
   * @type {boolean}
   * @default false
   */
  showBorder?: boolean

  /**
   * Specifies the position of the border in the table.
   * @type {string}
   * @default 'right'
   */
  showBorderPosition?: 'left' | 'right'

  /**
   * Specifies whether the checkbox is checked.
   * @type {boolean}
   * @default false
   */
  checked?: boolean

  /**
   * The event handler for the onChange event of the checkbox.
   * @type {(value: boolean) => void}
   */
  // eslint-disable-next-line no-unused-vars
  handleCheckbox?: (value: boolean) => void
}

export const TableContext = createContext<TableContextType | undefined>(undefined)

export function useTableContext(): TableContextType {
  const context = useContext(TableContext)

  if (!context) {
    throw new Error('useTableContext should be used within the TableContext provider!')
  }

  return context
}
