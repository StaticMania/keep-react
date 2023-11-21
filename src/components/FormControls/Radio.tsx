import { KeepSizes, KeepStateColors } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export interface keepRadioTheme {
  base: string
  radioInput: string
  color: KeepStateColors
  radioType: {
    base: string
    square: string
    circle: string
  }
  sizes: RadioInputSizes
}

export interface RadioInputSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

/**
 * Props for the Radio component.
 * @interface RadioProps
 * @extends {Omit<ComponentProps<'input'>, 'type' | 'ref'>}
 */
export interface RadioProps extends Omit<ComponentProps<'input'>, 'type' | 'ref'> {
  /**
   * The sizing of the radio input.
   */
  sizing?: keyof RadioInputSizes

  /**
   * The shape of the radio input.
   */
  radioShape?: 'circle' | 'square'

  /**
   * The value of the radio input.
   */
  value?: string

  /**
   * The selected value of the radio input.
   */
  selected?: string

  /**
   * The color of the radio input.
   */
  color?: keyof KeepStateColors

  /**
   * Event handler for when the radio option changes.
   */
  onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * Additional class name for the radio component.
   */
  className?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { className, sizing = 'md', radioShape = 'circle', value, color = 'info', onOptionChange, selected, ...props },
    ref,
  ) => {
    const theme = useTheme().theme.formControls.radio

    return (
      <>
        <input
          ref={ref}
          className={cn(theme.radioInput, theme.sizes[sizing])}
          value={value}
          checked={selected === value}
          onChange={onOptionChange}
          type="radio"
          {...props}
        />
        <div
          className={cn(
            theme.base,
            theme.sizes[sizing],
            theme.radioType[radioShape],
            theme.color[color],
            theme.radioType.base,
            className,
          )}></div>
      </>
    )
  },
)

Radio.displayName = 'Radio'
