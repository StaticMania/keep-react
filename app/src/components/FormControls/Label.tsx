import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import type { KeepStateColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepLabelTheme {
  base: string
  colors: LabelColors
  disabled: string
}

export interface LabelColors extends KeepStateColors {
  [key: string]: string
  default: string
}

/**
 * Props for the Label component.
 * @interface LabelProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'label'>, 'className' | 'color'>>}
 */
export interface LabelProps extends PropsWithChildren<Omit<ComponentProps<'label'>, 'className' | 'color'>> {
  /**
   * The color of the label.
   * @type {keyof LabelColors}
   * @default 'default'
   */
  color?: keyof LabelColors

  /**
   * The value of the label.
   * @type {string}
   * @default ''
   */
  value?: string

  /**
   * Specifies whether the label is disabled or not.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * The ID of the form element that the label is associated with.
   * @type {string}
   * @default ''
   *
   */
  htmlFor?: string

  /**
   * Additional CSS class for the label.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const Label: FC<LabelProps> = ({
  children,
  color = 'default',
  disabled = false,
  htmlFor,
  value,
  className,
  ...props
}): ReactElement => {
  const theme = useTheme().theme.formControls.label
  const theirProps = excludeClassName(props)
  return (
    <label
      htmlFor={htmlFor}
      className={cn(theme.base, theme.colors[color], disabled && theme.disabled, className)}
      {...theirProps}>
      {value ?? children ?? ''}
    </label>
  )
}
