'use client'
import type { FC } from 'react'
import { TooltipSlider } from './ToolTipSlider'
import { excludeClassName } from '../../helpers/exclude'

export interface MarkObj {
  [key: number]: string | number
}

/**
 * Represents the props for the Slider component.
 * @interface SliderProps
 */
export interface SliderProps {
  /**
   * The minimum value of the slider.
   * @type {number}
   * @default 0
   */
  min: number

  /**
   * The maximum value of the slider.
   * @type {number}
   * @default 100
   */
  max: number

  /**
   * The step value for the slider. Optional.
   * @type {number}
   * @default 1
   */
  step?: number | null

  /**
   * Indicates whether the slider is a range slider. Optional.
   * @type {boolean}
   * @default false
   */
  range?: boolean

  /**
   * Indicates whether to display dots on the slider. Optional.
   * @type {boolean}
   * @default false
   */
  dots?: boolean

  /**
   * The marks to display on the slider. Optional.
   * @type {MarkObj}
   * @default {}
   */
  marks?: MarkObj

  /**
   * Indicates whether the slider should be reversed. Optional.
   * @type {boolean}
   * @default false
   */
  reverse?: boolean

  /**
   * Indicates whether the slider is disabled. Optional.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * The default value of the slider.
   * @type {number | number[]}
   * @default 0
   */
  defaultValue: number | number[]

  /**
   * The callback function to be called when the value of the slider changes.
   * @type {(value: number | number[]) => void}
   */
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: number | number[]) => void

  /**
   * The position of the tooltip. Can be 'top', 'bottom', or 'none'. Optional.
   * @type {'top' | 'bottom' | 'none'}
   * @default 'none'
   */
  tooltip?: 'top' | 'bottom' | 'none'
}

export const Slider: FC<SliderProps> = ({
  min,
  max,
  step,
  defaultValue,
  range,
  marks = {},
  dots = false,
  disabled = false,
  reverse = false,
  tooltip = 'none',
  onChange,
  ...props
}) => {
  const theirProps = excludeClassName(props)

  return (
    <div>
      <TooltipSlider
        range={range}
        min={min}
        max={max}
        dots={dots}
        reverse={reverse}
        disabled={disabled}
        defaultValue={defaultValue}
        tipProps={{ placement: tooltip }}
        tipFormatter={(value: any) => `${value}`}
        onChange={onChange}
        marks={{ ...marks }}
        step={step}
        {...theirProps}
      />
    </div>
  )
}
