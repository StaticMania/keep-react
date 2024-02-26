'use client'

import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { Label } from '../src'
import { NumberInput } from './NumberInput'

const Page = () => {
  const [number, setNumber] = useState(0)
  return (
    <section className="py-20">
      <div className="container space-y-4">
        <fieldset className="space-y-1">
          <Label>Choose Number</Label>
          <NumberInput>
            <NumberInput.Button disabled={number === 0} onClick={() => setNumber((prev) => prev - 1)}>
              <Minus size={16} color="#455468" />
            </NumberInput.Button>
            <NumberInput.Input min={0} max={100} value={number} onChange={(e) => setNumber(+e.target.value)} />
            <NumberInput.Button disabled={number === 100} onClick={() => setNumber((prev) => prev + 1)}>
              <Plus size={16} color="#455468" />
            </NumberInput.Button>
          </NumberInput>
          <p className="text-body-4 font-normal text-metal-600">Number Must be between 1 to 100</p>
        </fieldset>
      </div>
    </section>
  )
}

export default Page
