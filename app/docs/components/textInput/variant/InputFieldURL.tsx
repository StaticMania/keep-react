'use client'
import { Label, TextInput } from '~/src'
import { WarningCircle } from 'phosphor-react'

const InputFieldURL = () => {
  return (
    <div>
      <Label htmlFor="#id-7" value="Enter URL" color="error" />
      <TextInput
        id="#id-7"
        placeholder="Enter your URL"
        color="error"
        sizing="md"
        type="text"
        withBg={true}
        addon={<span>http://</span>}
        addonPosition="left"
        icon={<WarningCircle size={20} color="#FF574D" />}
        iconPosition="right"
      />
    </div>
  )
}

const InputFieldURLCode = `
"use client";
import { Label,TextInput } from "keep-react";
import { WarningCircle } from "phosphor-react";

export const TextInputComponent = () => {
  return (
    <div>
      <Label htmlFor="#id-7" value="Enter URL" color="error" />
      <TextInput
        id="#id-7"
        placeholder="Enter your URL"
        color="error"
        sizing="md"
        type="text"
        withBg={true}
        addon={<span>http://</span>}
        addonPosition="left"
        icon={<WarningCircle size={20} color="#FF574D" />}
        iconPosition="right"
      />
    </div>
  );
}
`

export { InputFieldURL, InputFieldURLCode }
