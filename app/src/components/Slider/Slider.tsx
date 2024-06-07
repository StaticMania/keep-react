'use client'
import type { FC, ReactNode } from 'react'
import { TooltipSlider } from './ToolTipSlider'

export interface MarkObj {
  [key: number]: string | number
}

export interface SliderProps {
  children?: ReactNode
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
  tooltip = 'top',
  onChange,
  children,
  ...props
}) => {
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
        {...props}
      />
      {children}
    </div>
  )
}
