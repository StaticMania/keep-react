import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import type { KeepColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepHelperTextTheme {
  base: string
  disabled: string
  colors: HelperColors
}

export interface HelperColors extends Pick<KeepColors, 'gray' | 'info' | 'error' | 'warning' | 'success'> {
  [key: string]: string
}

/**
 * Props for the HelperText component.
 * @interface HelperTextProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'p'>, 'color' | 'className'>>}
 */
export interface HelperTextProps extends PropsWithChildren<Omit<ComponentProps<'p'>, 'color' | 'className'>> {
  /**
   * The color of the helper text.
   */
  color?: keyof HelperColors
  /**
   * The value of the helper text.
   */
  value?: string
  /**
   * Specifies whether the helper text is disabled.
   */
  disabled?: boolean
  /**
   * The CSS class name for the helper text.
   */
  className?: string
}

export const HelperText: FC<HelperTextProps> = ({
  value,
  children,
  disabled = false,
  color = 'default',
  className,
  ...props
}) => {
  const theme = useTheme().theme.formControls.helperText
  const theirProps = excludeClassName(props)

  return (
    <p className={cn(theme.base, theme.colors[color], disabled && theme.disabled, className)} {...theirProps}>
      {value ?? children ?? ''}
    </p>
  )
}
