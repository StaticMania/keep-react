'use client'
import { Minus, Plus } from 'phosphor-react'
import { NumberInput, NumberInputBox, NumberInputButton } from '../../../../src'

const DefaultNumberInput = () => {
  return (
    <NumberInput>
      <NumberInputButton>
        <Minus size={16} />
      </NumberInputButton>
      <NumberInputBox defaultValue={0} />
      <NumberInputButton>
        <Plus size={16} />
      </NumberInputButton>
    </NumberInput>
  )
}

const DefaultNumberInputCode = {
  'NumberInput.tsx': `
'use client'
import { Minus, Plus } from 'phosphor-react'
import { NumberInput, NumberInputBox, NumberInputButton } from 'keep-react'

export const NumberInputComponent = () => {
  return (
    <NumberInput>
      <NumberInputButton>
        <Minus size={16} />
      </NumberInputButton>
      <NumberInputBox defaultValue={0} />
      <NumberInputButton>
        <Plus size={16} />
      </NumberInputButton>
    </NumberInput>
  )
}

`,
}
export { DefaultNumberInput, DefaultNumberInputCode }
