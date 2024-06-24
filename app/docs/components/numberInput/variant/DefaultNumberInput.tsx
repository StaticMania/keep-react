'use client'
import { Minus, Plus } from 'phosphor-react'
import { NumberInput, NumberInputBox, NumberInputButton } from '../../../../src'

const DefaultNumberInput = () => {
  return (
    <NumberInput>
      <NumberInputButton>
        <Minus size={16} color="#455468" />
      </NumberInputButton>
      <NumberInputBox defaultValue={0} />
      <NumberInputButton>
        <Plus size={16} color="#455468" />
      </NumberInputButton>
    </NumberInput>
  )
}

const DefaultNumberInputCode = `
'use client'
import { Minus, Plus } from 'phosphor-react'
import { NumberInput, NumberInputBox, NumberInputButton } from 'keep-react'

export const NumberInputComponent = () => {
  return (
    <NumberInput>
      <NumberInputButton>
        <Minus size={16} color="#455468" />
      </NumberInputButton>
      <NumberInputBox defaultValue={0} />
      <NumberInputButton>
        <Plus size={16} color="#455468" />
      </NumberInputButton>
    </NumberInput>
  )
}

`

export { DefaultNumberInput, DefaultNumberInputCode }
