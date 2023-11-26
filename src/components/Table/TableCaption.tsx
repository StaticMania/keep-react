import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { DeepPartial } from '../../helpers/deep-partial'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepTableCaptionTheme {
  base: string
}

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
  const theme = useTheme().theme.table.caption.base
  return (
    <caption {...props} className={cn(theme, className)}>
      {children}
    </caption>
  )
}
