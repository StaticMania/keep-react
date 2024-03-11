import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { DeepPartial } from '../../helpers/deep-partial'
import { keepTableCaptionTheme, tableTheme } from './theme'

/**
 * Props for the TableCaption component.
 * @interface TableCaptionProps
 * @extends {PropsWithChildren}
 * @extends {ComponentProps<'caption'>}
 */
export interface TableCaptionProps extends PropsWithChildren, ComponentProps<'caption'> {
  /**
   * Optional theme for the TableCaption component.
   * @type {DeepPartial<keepTableCaptionTheme>}
   */
  theme?: DeepPartial<keepTableCaptionTheme>
}

export const TableCaption: FC<TableCaptionProps> = ({ children, className, ...props }) => {
  const theme = tableTheme.caption.base
  return (
    <caption {...props} className={cn(theme, className)}>
      {children}
    </caption>
  )
}
