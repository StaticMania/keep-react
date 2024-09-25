import { Checkbox, Label } from '../../../../src'

const DefaultCheckbox = () => {
  return (
    <div className="space-y-3 p-3">
      <p className="text-body-3 font-normal">Keep Design System License</p>
      <fieldset className="flex items-center gap-2">
        <Checkbox defaultChecked={true} id="single" />
        <Label htmlFor="single">Single License</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox defaultChecked={true} id="team" />
        <Label htmlFor="team">Team License</Label>
      </fieldset>
    </div>
  )
}

const DefaultCheckboxCode = {
  'CheckBox.tsx': `
import { Checkbox, Label } from 'keep-react'

export const CheckboxComponent = () => {
  return (
    <div className="space-y-3">
      <p className="text-body-3 font-normal">Keep Design System License</p>
      <fieldset className="flex items-center gap-2">
        <Checkbox defaultChecked={true} id="single" />
        <Label htmlFor="single">Single License</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox defaultChecked={true} id="team" />
        <Label htmlFor="team">Team License</Label>
      </fieldset>
    </div>
  )
}
`,
}

export { DefaultCheckbox, DefaultCheckboxCode }
