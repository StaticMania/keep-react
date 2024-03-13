'use client'
import { useState } from 'react'
import { Checkbox, Label } from '../../../../src'

const DisabledCheckbox = () => {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(true)
  const [checked4, setChecked4] = useState(true)
  return (
    <div className="flex flex-col gap-3 py-3">
      <fieldset className="flex items-center gap-2">
        <Checkbox
          disabled
          id="checked1"
          variant="checked"
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
        />
        <Label htmlFor="checked1">Checked</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox
          disabled
          id="dashed"
          variant="dashed"
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
        />
        <Label htmlFor="dashed">Dashed</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox
          disabled
          id="rounded"
          variant="rounded"
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
        />
        <Label htmlFor="rounded">Rounded</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox
          disabled
          id="circle"
          variant="circle"
          checked={checked4}
          onChange={(e) => setChecked4(e.target.checked)}
        />
        <Label htmlFor="circle">Circle</Label>
      </fieldset>
    </div>
  )
}
const DisabledCheckboxCode = `
'use client'
import { Checkbox, Label } from 'keep-react'

export const CheckboxComponent = () => {
  return (
    <>
      <fieldset className="flex items-center gap-2">
        <Checkbox disabled id="checked" variant="checked" />
        <Label htmlFor="checked">Checked</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox disabled id="dashed" variant="dashed" />
        <Label htmlFor="dashed">Dashed</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox disabled id="rounded" variant="rounded" />
        <Label htmlFor="rounded">Rounded</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox disabled id="circle" variant="circle" />
        <Label htmlFor="circle">Circle</Label>
      </fieldset>
    </>
  )
}
`

export { DisabledCheckbox, DisabledCheckboxCode }
