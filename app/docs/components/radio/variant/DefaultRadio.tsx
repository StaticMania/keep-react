'use client'
import { ChangeEvent, useState } from 'react'
import { Label, Radio } from '../../../../src'

const DefaultRadio = () => {
  const [selected, setSelected] = useState('')
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }

  return (
    <fieldset className="flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite country</legend>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-1"
          name="favorite-country"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="USA"
        />
        <Label htmlFor="country-1">United States</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-2"
          name="favorite-country"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="Germany"
        />
        <Label htmlFor="country-2">Germany</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-3"
          name="favorite-country"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="Spain"
        />
        <Label htmlFor="country-3">Spain</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-4"
          name="favorite-country"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="China"
          disabled={true}
        />
        <Label htmlFor="country-4" disabled={true}>
          China (disabled)
        </Label>
      </div>
    </fieldset>
  )
}

const DefaultRadioCode = `
"use client";
import { useState } from "react";
import { Label,Radio } from "keep-react";

export const RadioComponent = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <fieldset className="flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your favorite country</legend>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-1"
          name="favorite-country"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="USA"
        />
        <Label htmlFor="country-1">United States</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-2"
          name="favorite-country"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="Germany"
        />
        <Label htmlFor="country-2">Germany</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-3"
          name="favorite-country"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="Spain"
        />
        <Label htmlFor="country-3">Spain</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-4"
          name="favorite-country"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="circle"
          value="China"
          disabled={true}
        />
        <Label htmlFor="country-4" disabled={true}>
          China (disabled)
        </Label>
      </div>
    </fieldset>
  );
}
`

export { DefaultRadio, DefaultRadioCode }
