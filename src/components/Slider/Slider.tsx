import type { FC } from 'react'
import { TooltipSlider } from './ToolTipSlider'
import { excludeClassName } from '../../helpers/exclude'

/**
 * Represents an object that maps numbers to strings or numbers.
 * @interface MarkObj
 * @property {string | number} key - The key for the mark.
 * @property {string | number} value - The value for the mark.
 */
export interface MarkObj {
  [key: number]: string | number
}

export interface SliderProps {
  min: number // minimum value of the slider
  max: number // maximum value of the slider
  step?: number | null // step size for the slider
  range?: boolean // whether the slider is a range slider or not
  dots?: boolean // whether to display dots on the slider or not
  marks?: MarkObj // marks to display on the slider
  reverse?: boolean // whether the slider is reversed or not
  disabled?: boolean // whether the slider is disabled or not
  defaultValue: number | number[] // default value of the slider
  onChange?: (value: number | number[]) => void // callback function to be called when the slider value changes
  tooltip?: 'top' | 'bottom' | 'none' // tooltip placement for the slider
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
