'use client'
import { useState } from 'react'
import { NumberInput } from '~/src'

const DefaultNumberInput = () => {
  const [value, setValue] = useState(100)
  return <NumberInput sizing="md" value={value} setValue={setValue} />
}

const DefaultNumberInputCode = `
"use client";
import { useState } from "react";
import { NumberInput } from "keep-react";

export const NumberInputComponent = () => {
  const [value, setValue] = useState(100);
   return <NumberInput sizing="md" value={value} setValue={setValue} />
}
`

export { DefaultNumberInput, DefaultNumberInputCode }
