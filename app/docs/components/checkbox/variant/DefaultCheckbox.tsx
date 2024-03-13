'use client'
import { useState } from 'react'
import { Checkbox, Label } from '../../../../src'

const DefaultCheckbox = () => {
  const [checked, setChecked] = useState(true)
  return (
    <fieldset className="flex items-center gap-2">
      <Checkbox id="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <Label htmlFor="checkbox">Checkbox</Label>
    </fieldset>
  )
}

const DefaultCheckboxCode = `
'use client'
import { Checkbox, Label } from 'keep-react'

export const CheckboxComponent = () => {
  return (
    <fieldset className="flex items-center gap-2">
      <Checkbox checked id="checkbox" />
      <Label htmlFor="checkbox">Checkbox</Label>
    </fieldset>
  )
}
`

export { DefaultCheckbox, DefaultCheckboxCode }
