'use client'
import { Label, TextInput } from '../../../../src'

const LevelAndHelperText = () => {
  return (
    <div>
      <Label htmlFor="#id-17" value="Label" />
      <TextInput
        id="#id-17"
        placeholder="Default Input Field"
        color="gray"
        helperText="Info that helps a user with this field."
      />
    </div>
  )
}

const LevelAndHelperTextCode = `
"use client";
import { Label ,TextInput} from "keep-react";

export const TextInputComponent = () => {
  return (
    <div>
      <Label htmlFor="#id-17" value="Label" />
      <TextInput
        id="#id-17"
        placeholder="Default Input Field"
        color="gray"
        helperText="Info that helps a user with this field."
      />
    </div>
  )
}
`

export { LevelAndHelperText, LevelAndHelperTextCode }
