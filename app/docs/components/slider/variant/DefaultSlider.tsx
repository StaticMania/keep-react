'use client'
import { Slider } from '~/src'

const DefaultSlider = () => {
  return (
    <div className="w-5/6 p-4">
      <Slider
        min={100}
        max={1000}
        defaultValue={[100, 300]}
        tooltip="top"
        range={true}
        onChange={(value: number | number[]) => console.log(value)}
      />
    </div>
  )
}

const DefaultSliderCode = `
"use client";
import { Slider } from "keep-react";

export const SliderComponent = () => {
  return (
    <Slider
      range={true}
      min={100}
      max={1000}
      defaultValue={[100, 300]}
      tooltip="top"
      onChange={(value) => console.log(value)}
    />
  );
}
`

export { DefaultSlider, DefaultSliderCode }
