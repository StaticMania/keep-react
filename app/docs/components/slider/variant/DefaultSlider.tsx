import { Slider } from '../../../../src'

const DefaultSlider = () => {
  return (
    <div className="p-6">
      <Slider
        min={100}
        max={1000}
        defaultValue={200}
        onChange={(value: number | number[]) => console.log(value)}></Slider>
    </div>
  )
}

const DefaultSliderCode = `
import { Slider } from 'keep-react'

export const SliderComponent = () => {
  return (
    <Slider
      min={100}
      max={1000}
      defaultValue={200}
      onChange={(value) => console.log(value)}></Slider>
  )
}
`

export { DefaultSlider, DefaultSliderCode }
