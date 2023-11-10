'use client'
import { CheckBox } from '~/src'

const DisabledCheckbox = () => {
  return (
    <div className="py-3">
      <CheckBox
        size="md"
        variant="square"
        label="Disabled"
        id="disabled"
        name="countries"
        color="info"
        disabled={true}
      />
    </div>
  )
}

const DisabledCheckboxCode = `
"use client";
import { CheckBox } from "keep-react";

export const CheckboxComponent = () => { 
  return (
      <CheckBox
        size="md"
        variant="square"
        label="Disabled"
        id="disabled"
        name="countries"
        color="info"
        disabled={true}
      />
  );
}
`

export { DisabledCheckbox, DisabledCheckboxCode }
