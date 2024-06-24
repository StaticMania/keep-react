'use client'
import { Minus, Plus } from 'phosphor-react'
import { Label, NumberInput, NumberInputBox, NumberInputButton } from '../../../../src'

const NumberInputWithLabel = () => {
  return (
    <fieldset className="space-y-1">
      <Label>Choose Number</Label>
      <NumberInput>
        <NumberInputButton>
          <Minus size={16} color="#455468" />
        </NumberInputButton>
        <NumberInputBox defaultValue={12} />
        <NumberInputButton>
          <Plus size={16} color="#455468" />
        </NumberInputButton>
      </NumberInput>
      <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">Number Must be between 1 to 100</p>
    </fieldset>
  )
}

const NumberInputWithLabelCode = `
'use client'
import { Minus, Plus } from 'phosphor-react'
import { Label, NumberInput, NumberInputBox, NumberInputButton } from 'keep-react'

export const NumberInputComponent = () => {
  return (
    <fieldset className="space-y-1">
      <Label>Choose Number</Label>
      <NumberInput>
        <NumberInputButton>
          <Minus size={16} color="#455468" />
        </NumberInputButton>
        <NumberInputBox defaultValue={12} />
        <NumberInputButton>
          <Plus size={16} color="#455468" />
        </NumberInputButton>
      </NumberInput>
      <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">Number Must be between 1 to 100</p>
    </fieldset>
  )
}
`

export { NumberInputWithLabel, NumberInputWithLabelCode }
