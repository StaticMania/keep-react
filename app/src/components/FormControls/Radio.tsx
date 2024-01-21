import type { ChangeEvent, ComponentProps } from 'react'
import { forwardRef } from 'react'
import { KeepStateColors } from '../../Keep/KeepTheme'
import { cn } from '../../helpers/cn'
import { RadioInputSizes, formControlsTheme } from './theme'

/**
 * Props for the Radio component.
 * @interface RadioProps
 * @extends {Omit<ComponentProps<'input'>, 'type' | 'ref'>}
 */
export interface RadioProps extends Omit<ComponentProps<'input'>, 'type' | 'ref'> {
  /**
   * The sizing of the radio input.
   * @type {keyof RadioInputSizes}
   * @default 'md'
   */
  sizing?: keyof RadioInputSizes

  /**
   * The shape of the radio input.
   * @type {'circle' | 'square'}
   * @default 'circle'
   */
  radioShape?: 'circle' | 'square'

  /**
   * The value of the radio input.
   * @type {string}
   * @default ''
   */
  value?: string

  /**
   * The selected value of the radio input.
   * @type {string}
   * @default ''
   */
  selected?: string

  /**
   * The color of the radio input.
   * @type {keyof KeepStateColors}
   * @default 'info'
   */
  color?: keyof KeepStateColors

  /**
   * Event handler for when the radio option changes.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object.
   * @returns {void}
   * @default () => {}
   */
  // eslint-disable-next-line no-unused-vars
  onOptionChange: (e: ChangeEvent<HTMLInputElement>) => void

  /**
   * Additional class name for the radio component.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { className, sizing = 'md', radioShape = 'circle', value, color = 'info', onOptionChange, selected, ...props },
    ref,
  ) => {
    const theme = formControlsTheme.radio

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
