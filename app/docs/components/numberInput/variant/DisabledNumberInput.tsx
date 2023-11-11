'use client'
import { useState } from 'react'
import { NumberInput } from '~/src'

const DisabledNumberInput = () => {
  const [value, setValue] = useState(100)
  return <NumberInput sizing="md" value={value} setValue={setValue} disabled={true} />
}

const DisabledNumberInputCode = `
"use client";
import { useState } from "react";
import { NumberInput } from "keep-react";

export const NumberInputComponent = () => {
  const [value, setValue] = useState(100);
  return (
    <NumberInput
      sizing="md"
      value={value}
      setValue={setValue}
      disabled={true}
    />
  );
}
`

export { DisabledNumberInput, DisabledNumberInputCode }
