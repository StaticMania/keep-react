'use client'
import { useState } from 'react'
import { Button, Slider, SliderRange } from '../../../../src'

const DefaultSlider = () => {
  const [value, setValue] = useState<number | number[]>([])
  return (
    <div className="w-5/6 p-4">
      <Slider
        min={100}
        max={1000}
        defaultValue={[100, 300]}
        tooltip="top"
        range={true}
        onChange={(value: number | number[]) => setValue(value)}>
        {Array.isArray(value) && (
          <SliderRange>
            <Button size="sm" variant="outline">
              {value[0] ? value[0] : 100}
            </Button>
            <Button size="sm" variant="outline">
              {value[1] ? value[1] : 1000}
            </Button>
          </SliderRange>
        )}
      </Slider>
    </div>
  )
}

const DefaultSliderCode = `
'use client'
import { useState } from 'react'
import { Button, Slider, SliderRange } from 'keep-react'

export const SliderComponent = () => {
  const [value, setValue] = useState([])
  return (
    <Slider
      min={100}
      max={1000}
      defaultValue={[100, 300]}
      tooltip="top"
      range={true}
      onChange={(value) => setValue(value)}>
      {Array.isArray(value) && (
        <SliderRange>
          <Button size="sm" variant="outline">
            {value[0] ? value[0] : 100}
          </Button>
          <Button size="sm" variant="outline">
            {value[1] ? value[1] : 1000}
          </Button>
        </SliderRange>
      )}
    </Slider>
  )
}
`

export { DefaultSlider, DefaultSliderCode }
