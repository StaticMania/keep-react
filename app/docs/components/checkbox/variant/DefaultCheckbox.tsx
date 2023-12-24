'use client'
import { CheckBox } from '../../../../src'

const DefaultCheckbox = () => {
  return <CheckBox variant="square" label="Checkbox" id="two" name="countries" color="info" />
}

const DefaultCheckboxCode = `
"use client";
import { CheckBox } from "keep-react";

export const CheckboxComponent = () => { 
  const handleChecked = (value) => {
    //value
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
