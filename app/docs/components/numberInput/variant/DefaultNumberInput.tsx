'use client'
import { Minus, Plus } from 'phosphor-react'
import { NumberInput } from '../../../../src'

const DefaultNumberInput = () => {
  return (
    <NumberInput>
      <NumberInput.Button>
        <Minus size={16} color="#455468" />
      </NumberInput.Button>
      <NumberInput.Input defaultValue={12} />
      <NumberInput.Button>
        <Plus size={16} color="#455468" />
      </NumberInput.Button>
    </NumberInput>
  )
}

const DefaultNumberInputCode = `
'use client'
import { Minus, Plus } from 'phosphor-react'
import { NumberInput } from 'keep-react'

export const NumberInputComponent = () => {
  return (
    <NumberInput>
      <NumberInput.Button>
        <Minus size={16} color="#455468" />
      </NumberInput.Button>
      <NumberInput.Input defaultValue={12} />
      <NumberInput.Button>
        <Plus size={16} color="#455468" />
      </NumberInput.Button>
    </NumberInput>
  )
}

`

export { DefaultNumberInput, DefaultNumberInputCode }
