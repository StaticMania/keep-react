import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { excludeClassName } from '../../helpers/exclude'
import { HelperColors, formControlsTheme } from './theme'

/**
 * Props for the HelperText component.
 * @interface HelperTextProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'p'>, 'color' | 'className'>>}
 */
export interface HelperTextProps extends PropsWithChildren<Omit<ComponentProps<'p'>, 'color' | 'className'>> {
  /**
   * The color of the helper text.
   * @type {keyof HelperColors}
   * @default 'gray'
   */
  color?: keyof HelperColors

  /**
   * The value of the helper text.
   * @type {string}
   * @default ''
   */
  value?: string

  /**
   * Specifies whether the helper text is disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * The CSS class name for the helper text.
   * @type {string}
   * @default ''
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
  const theme = formControlsTheme.helperText
  const theirProps = excludeClassName(props)

  return (
    <p className={cn(theme.base, theme.colors[color], disabled && theme.disabled, className)} {...theirProps}>
      {value ?? children ?? ''}
    </p>
  )
}
