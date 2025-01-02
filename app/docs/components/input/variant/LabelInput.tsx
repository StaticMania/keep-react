import { Input, Label } from '../../../../src'

const LabelInput = () => {
  return (
    <fieldset className="mx-auto w-1/2 space-y-1 p-2">
      <Label htmlFor="name">Enter Name</Label>
      <Input id="name" placeholder="Enter name" type="text" />
    </fieldset>
  )
}

const LabelInputCode = {
  'InputComponent.tsx': `
import { Input, Label } from 'keep-react'

const LabelInput = () => {
  return (
    <fieldset className="max-w-md space-y-1">
      <Label htmlFor="name">Enter Name</Label>
      <Input id="name" placeholder="Enter name" type="text" />
    </fieldset>
  )
}
`,
}

export { LabelInput, LabelInputCode }
