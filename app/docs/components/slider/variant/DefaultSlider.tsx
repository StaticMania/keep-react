import { Slider } from '../../../../src'

const DefaultSlider = () => {
  return (
    <div className="p-6">
      <Slider min={0} max={100} defaultValue={[55]} />
    </div>
  )
}

const DefaultSliderCode = {
  'SliderComponent.tsx': `
import { Slider } from 'keep-react'

export const SliderComponent = () => {
  return <Slider min={0} max={100} defaultValue={[55]} />
}
`,
}

export { DefaultSlider, DefaultSliderCode }
