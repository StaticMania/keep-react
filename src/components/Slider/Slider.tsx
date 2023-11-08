import type { FC } from 'react'
import { TooltipSlider } from './ToolTipSlider'
import { excludeClassName } from '../../helpers/exclude'

/**
 * An object representing the marks on the slider track.
 * The keys are the positions of the marks on the track, and the values are the labels for the marks.
 */
export interface MarkObj {
  [key: number]: string | number
}

/**
 * Props for the Slider component.
 */
export interface SliderProps {
  min: number
  max: number
  step?: number | null
  range?: boolean
  dots?: boolean
  marks?: MarkObj
  reverse?: boolean
  disabled?: boolean
  defaultValue: number | number[]
  onChange?: (value: number | number[]) => void
  tooltip?: 'top' | 'bottom' | 'none'
}

/**
 * A slider component that allows users to select a value from a range of values.
 * @param min The minimum value of the slider.
 * @param max The maximum value of the slider.
 * @param step The step between each value on the slider.
 * @param defaultValue The default value of the slider.
 * @param range Whether the slider is a range slider or not.
 * @param marks The marks on the slider.
 * @param dots Whether to show dots on the slider.
 * @param disabled Whether the slider is disabled or not.
 * @param reverse Whether the slider is reversed or not.
 * @param tooltip The type of tooltip to show on the slider.
 * @param onChange The function to call when the slider value changes.
 * @param props The additional props to pass to the component.
 */
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
