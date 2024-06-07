import { Slider } from '../../../../src'

const SliderSteps = () => {
  return (
    <div className="p-6">
      <Slider
        min={100}
        max={1000}
        defaultValue={200}
        step={100}
        onChange={(value: number | number[]) => console.log(value)}></Slider>
    </div>
  )
}

const SliderStepsCode = `
import { Slider } from 'keep-react'

export const SliderComponent = () => {
  return (
    <Slider
      min={100}
      max={1000}
      step={100}
      defaultValue={200}
      onChange={(value) => console.log(value)}></Slider>
  )
}
`

export { SliderSteps, SliderStepsCode }
