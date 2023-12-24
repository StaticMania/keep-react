'use client'
import { WarningCircle } from 'phosphor-react'
import { Label, TextInput } from '../../../../src'

const InputWithIcon = () => {
  return (
    <div>
      <Label htmlFor="#id-11" value="Label" />
      <TextInput
        id="#id-11"
        placeholder="Default Input Field"
        color="gray"
        icon={<WarningCircle size={20} color="#5E718D" />}
        helperText="Info that helps a user with this field."
      />
    </div>
  )
}

const InputWithIconCode = `
"use client";
import { Label ,TextInput} from "keep-react";

export const TextInputComponent = () => {
  return (
    <div>
      <Label htmlFor="#id-11" value="Label" />
      <TextInput
        id="#id-11"
        placeholder="Default Input Field"
        color="gray"
        icon={<WarningCircle size={20} color="#5E718D" />}
        helperText="Info that helps a user with this field."
      />
    </div>
  );
}
`

export { InputWithIcon, InputWithIconCode }
