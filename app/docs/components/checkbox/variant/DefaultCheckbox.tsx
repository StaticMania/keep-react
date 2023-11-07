'use client'
import { CheckBox } from '~/src'

const DefaultCheckbox = () => {
  const handleChecked = (value: boolean) => {
    console.log(value)
  }
  return (
    <div className="py-3">
      <CheckBox
        variant="square"
        label="Checkbox"
        id="two"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
    </div>
  )
}

const DefaultCheckboxCode = `
"use client";
import { CheckBox } from "keep-react";

export const CheckboxComponent = () => { 
  const handleChecked = (value) => {
    console.log(value);
  };
  return (
      <CheckBox
        size="md"
        variant="square"
        label="Checkbox"
        id="two"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
  );
}
`

export { DefaultCheckbox, DefaultCheckboxCode }
