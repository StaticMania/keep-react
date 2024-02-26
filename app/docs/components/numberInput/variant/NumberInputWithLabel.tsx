'use client'
import { Minus, Plus } from 'phosphor-react'
import { Label, NumberInput } from '../../../../src'

const NumberInputWithLabel = () => {
  return (
    <fieldset className="space-y-1">
      <Label>Choose Number</Label>
      <NumberInput>
        <NumberInput.Button>
          <Minus size={16} color="#455468" />
        </NumberInput.Button>
        <NumberInput.Input defaultValue={12} />
        <NumberInput.Button>
          <Plus size={16} color="#455468" />
        </NumberInput.Button>
      </NumberInput>
      <p className="text-body-4 font-normal text-metal-600">Number Must be between 1 to 100</p>
    </fieldset>
  )
}

const NumberInputWithLabelCode = `
'use client'
import { Minus, Plus } from 'phosphor-react'
import { Label, NumberInput } from 'keep-react'

export const NumberInputComponent = () => {
  return (
    <fieldset className="space-y-1">
      <Label>Choose Number</Label>
      <NumberInput>
        <NumberInput.Button>
          <Minus size={16} color="#455468" />
        </NumberInput.Button>
        <NumberInput.Input defaultValue={12} />
        <NumberInput.Button>
          <Plus size={16} color="#455468" />
        </NumberInput.Button>
      </NumberInput>
      <p className="text-body-4 font-normal text-metal-600">Number Must be between 1 to 100</p>
    </fieldset>
  )
}
`

export { NumberInputWithLabel, NumberInputWithLabelCode }
