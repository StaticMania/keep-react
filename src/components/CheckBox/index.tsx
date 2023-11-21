import { ComponentProps, FC, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { KeepSizes, KeepStateColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepCheckboxTheme {
  base: string
  checkboxInput: string
  enabled: string
  disabled: string
  label: CheckboxSizes
  labelColor: CheckboxLabelColors
  variant: {
    circle: string
    square: string
  }
  size: CheckboxSizes
  color: KeepStateColors
}

/**
 * Checkbox component props.
 * @interface CheckboxProps
 * @extends {Omit<ComponentProps<'input'>, 'className' | 'color' | 'size' | 'type'>}
 */
export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'className' | 'color' | 'size' | 'type'> {
  /**
   * The label to display next to the checkbox.
   */
  label?: ReactNode

  /**
   * Determines if the checkbox is disabled.
   */
  disabled?: boolean

  /**
   * The size of the checkbox.
   */
  size?: keyof CheckboxSizes

  /**
   * The color of the checkbox.
   */
  color?: keyof KeepStateColors

  /**
   * The color of the label.
   */
  labelColor?: keyof CheckboxLabelColors

  /**
   * The variant of the checkbox (square or circle).
   */
  variant?: 'square' | 'circle'

  /**
   * The name of the field associated with the checkbox.
   */
  fieldName?: string

  /**
   * Determines if the checkbox is checked.
   */
  isChecked?: boolean

  /**
   * Callback function to handle checkbox checked state changes.
   * @param value - The new checked state value.
   */
  handleChecked?: (value: boolean) => void

  /**
   * Additional class name for the checkbox component.
   */
  className?: string

  /**
   * Additional inline style for the label.
   */
  labelStyle?: string
}

export interface CheckboxSizes extends Pick<KeepSizes, 'sm' | 'lg' | 'md'> {
  [key: string]: string
}

export interface CheckboxLabelColors extends Pick<KeepStateColors, 'error' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}

const CheckboxComponent: FC<CheckboxProps> = ({
  color = 'info',
  labelColor = 'info',
  label,
  size = 'md',
  disabled = false,
  id = '',
  variant = 'square',
  handleChecked,
  fieldName,
  className,
  labelStyle,
  ...props
}) => {
  const theirProps = excludeClassName(props)
  const theme = useTheme().theme.checkbox

  const handleOnChange = (e: { target: { checked: any } }) => {
    handleChecked && handleChecked(e.target.checked)
  }

  return (
    <div data-testid="checkbox-element">
      <div className={cn(typeof label !== 'undefined' ? 'flex items-center gap-2' : '')}>
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          name={fieldName}
          onChange={handleOnChange}
          {...theirProps}
          className={cn(theme.checkboxInput, theme.size[size])}
        />
        <div
          className={cn(
            theme.base,
            theme.color[color],
            theme.size[size],
            theme.variant[variant],
            !disabled && theme.enabled,
            disabled && theme.disabled,
            className,
          )}></div>

        {typeof label !== 'undefined' && (
          <label
            htmlFor={id}
            className={cn(
              !disabled && theme.enabled,
              disabled && theme.disabled,
              theme.label[size],
              theme.labelColor[labelColor ? labelColor : color],
              labelStyle,
            )}>
            {label}
          </label>
        )}
      </div>
    </div>
  )
}

CheckboxComponent.displayName = 'CheckBox'
export const CheckBox = CheckboxComponent
