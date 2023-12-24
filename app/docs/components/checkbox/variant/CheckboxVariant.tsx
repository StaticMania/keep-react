'use client'
import { CheckBox } from '../../../../src'

const CheckboxVariant = () => {
  return (
    <div className="flex flex-row gap-3 py-3">
      <CheckBox size="md" variant="square" label="Square" id="square" name="countries" color="info" />
      <CheckBox size="md" variant="circle" label="Circle" id="circle" name="countries" color="info" />
    </div>
  )
}

const CheckboxVariantCode = `
"use client";
import { CheckBox } from "keep-react";

export const CheckboxComponent = () => {  
  const handleChecked = (value) => {
    // value is available
  };
  return (
    <>
      <CheckBox
        size="md"
        variant="square"
        label="Square"
        id="square"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
      <CheckBox
        size="md"
        variant="circle"
        label="Circle"
        id="circle"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
    </>
  );
}
`

export { CheckboxVariant, CheckboxVariantCode }
