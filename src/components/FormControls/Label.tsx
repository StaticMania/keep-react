import type { ComponentProps, FC, PropsWithChildren } from 'react'
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
   */
  color?: keyof LabelColors
  /**
   * The value of the label.
   */
  value?: string
  /**
   * Specifies whether the label is disabled or not.
   */
  disabled?: boolean
  /**
   * The ID of the form element that the label is associated with.
   */
  htmlFor?: string
  /**
   * Additional CSS class for the label.
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
}): JSX.Element => {
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
