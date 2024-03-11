'use client'
import { useState } from 'react'
import { Checkbox, Label } from '../../../../src'

const CheckboxVariant = () => {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(true)
  const [checked4, setChecked4] = useState(true)
  return (
    <div className="flex flex-col gap-3 py-3">
      <fieldset className="flex items-center gap-2">
        <Checkbox id="checked" variant="checked" onChange={(e) => setChecked1(e.target.checked)} checked={checked1} />
        <Label htmlFor="checked">Checked</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="dashed" variant="dashed" onChange={(e) => setChecked2(e.target.checked)} checked={checked2} />
        <Label htmlFor="dashed">Dashed</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="rounded" variant="rounded" onChange={(e) => setChecked3(e.target.checked)} checked={checked3} />
        <Label htmlFor="rounded">Rounded</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="circle" variant="circle" onChange={(e) => setChecked4(e.target.checked)} checked={checked4} />
        <Label htmlFor="circle">Circle</Label>
      </fieldset>
    </div>
  )
}

const CheckboxVariantCode = `
'use client'
import { Checkbox, Label } from 'keep-react'

export const CheckboxComponent = () => {
  return (
    <>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="checked" variant="checked" />
        <Label htmlFor="checked">Checked</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="dashed" variant="dashed" />
        <Label htmlFor="dashed">Dashed</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="rounded" variant="rounded" />
        <Label htmlFor="rounded">Rounded</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="circle" variant="circle" />
        <Label htmlFor="circle">Circle</Label>
      </fieldset>
    </>
  )
}
`

export { CheckboxVariant, CheckboxVariantCode }
