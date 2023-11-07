'use client'
import { Slider } from '~/src'

const SliderWithDots = () => {
  return (
    <div className="w-5/6 p-4">
      <Slider
        defaultValue={300}
        dots={true}
        max={1000}
        min={100}
        onChange={(value: number | number[]) => console.log(value)}
        step={200}
      />
    </div>
  )
}

const SliderWithDotsCode = `
"use client";
import { Slider } from "keep-react";

export const SliderComponent = () => {
  return (
    <Slider
      min={100}
      max={1000}
      step={200}
      dots={true}
      defaultValue={300}
      onChange={(value) => console.log(value)}
    />
  );
}
`

export { SliderWithDots, SliderWithDotsCode }
