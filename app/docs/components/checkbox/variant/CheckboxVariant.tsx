import { Checkbox, Label } from '../../../../src'

const CheckboxVariant = () => {
  return (
    <div className="space-y-3 p-3">
      <p className="text-body-3 font-normal">Checkbox Variant</p>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="default" defaultChecked={true} />
        <Label htmlFor="default">Default</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="rounded" variant="rounded" defaultChecked={true} />
        <Label htmlFor="rounded">Rounded</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox id="circle" variant="circle" defaultChecked={true} />
        <Label htmlFor="circle">Circle</Label>
      </fieldset>
    </div>
  )
}

const CheckboxVariantCode = {
  'CheckBox.tsx': `
import { Checkbox, Label } from 'keep-react'

export const CheckboxComponent = () => {
  return (
    <div className="space-y-3 p-3">
      <p className="text-body-3 font-normal">Checkbox Variant</p>
      <fieldset className="flex items-center gap-2">
        <Checkbox defaultChecked={true} id="default" />
        <Label htmlFor="default">Default</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox defaultChecked={true} id="rounded" variant="rounded" />
        <Label htmlFor="rounded">Rounded</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox defaultChecked={true} id="circle" variant="circle" />
        <Label htmlFor="circle">Circle</Label>
      </fieldset>
    </div>
  )
}
`,
}

export { CheckboxVariant, CheckboxVariantCode }
