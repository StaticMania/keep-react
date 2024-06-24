'use client'
import { Slider } from '../../../../src'

const DoubleSlider = () => {
  return (
    <div className="p-6">
      <Slider
        min={100}
        max={1000}
        defaultValue={[100, 300]}
        range={true}
        onChange={(value: number | number[]) => console.log(value)}></Slider>
    </div>
  )
}

const DoubleSliderCode = `
import { Slider } from 'keep-react'

export const SliderComponent = () => {
  return (
    <Slider
      min={100}
      max={1000}
      defaultValue={[100, 300]}
      range={true}
      onChange={(value: number | number[]) => console.log(value)}></Slider>
  )
}
`

export { DoubleSlider, DoubleSliderCode }
