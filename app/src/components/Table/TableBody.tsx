import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { DeepPartial } from '../../helpers/deep-partial'
import { keepTableCellTheme, tableTheme } from './theme'

/**
 * Props for the TableBody component.
 * @interface TableBodyProps
 * @extends {PropsWithChildren}
 * @extends {ComponentProps<'tbody'>}
 */
export interface TableBodyProps extends PropsWithChildren, ComponentProps<'tbody'> {
  /**
   * Optional theme for the TableBody component.
   * @type {DeepPartial<keepTableBodyTheme>}
   */
  theme?: DeepPartial<keepTableCellTheme>
}

export const TableBody: FC<TableBodyProps> = ({ children, className, ...props }) => {
  const theme = tableTheme.body

  return (
    <tbody className={cn(theme.base, className)} {...props}>
      {children}
    </tbody>
  )
}
