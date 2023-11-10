'use client'
import { Slider } from '~/src'

const SliderTooltipPosition = () => {
  return (
    <div className="w-5/6 p-4">
      <Slider
        defaultValue={300}
        max={1000}
        min={100}
        onChange={(value: number | number[]) => console.log(value)}
        step={100}
        tooltip="bottom"
      />
    </div>
  )
}

const SliderTooltipPositionCode = `
"use client";
import { Slider } from "keep-react";

export const SliderComponent = () => {
  return (
    <Slider
      step={100}
      min={100}
      max={1000}
      tooltip="bottom"
      defaultValue={300}
      onChange={(value) => console.log(value)}
    />
  );
}
`

export { SliderTooltipPosition, SliderTooltipPositionCode }
