'use client'
import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { Label, NumberInput, NumberInputBox, NumberInputButton } from '../../../../src'

const NumberInputWithState = () => {
  const [number, setNumber] = useState(0)
  return (
    <fieldset className="space-y-1">
      <Label>Choose Number</Label>
      <NumberInput>
        <NumberInputButton disabled={number === 0} onClick={() => setNumber((prev) => prev - 1)}>
          <Minus size={16} />
        </NumberInputButton>
        <NumberInputBox min={0} max={100} value={number} onChange={(e) => setNumber(+e.target.value)} />
        <NumberInputButton disabled={number === 100} onClick={() => setNumber((prev) => prev + 1)}>
          <Plus size={16} />
        </NumberInputButton>
      </NumberInput>
      <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">Number Must be between 1 to 100</p>
    </fieldset>
  )
}

const NumberInputWithStateCode = {
  'NumberInput.tsx': `
'use client'
import { useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { Label, NumberInput, NumberInputBox, NumberInputButton } from 'keep-react'

export const NumberInputComponent = () => {
  const [number, setNumber] = useState(0)

  return (
    <fieldset className="space-y-1">
      <Label>Choose Number</Label>
      <NumberInput>
        <NumberInputButton disabled={number === 0} onClick={() => setNumber((prev) => prev - 1)}>
          <Minus size={16} />
        </NumberInputButton>
        <NumberInputBox min={0} max={100} value={number} onChange={(e) => setNumber(+e.target.value)} />
        <NumberInputButton disabled={number === 100} onClick={() => setNumber((prev) => prev + 1)}>
          <Plus size={16} />
        </NumberInputButton>
      </NumberInput>
      <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">Number Must be between 1 to 100</p>
    </fieldset>
  )
}

`,
}

export { NumberInputWithState, NumberInputWithStateCode }
