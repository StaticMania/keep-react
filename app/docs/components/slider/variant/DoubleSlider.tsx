import { Slider } from '../../../../src'

const DoubleSlider = () => {
  return (
    <div className="w-full p-6">
      <Slider min={0} max={100} defaultValue={[33, 75]} />
    </div>
  )
}

const DoubleSliderCode = {
  'SliderComponent.tsx': `
import { Slider } from 'keep-react'

export const SliderComponent = () => {
  return <Slider min={0} max={100} defaultValue={[33, 75]} />
}
`,
}

export { DoubleSlider, DoubleSliderCode }
