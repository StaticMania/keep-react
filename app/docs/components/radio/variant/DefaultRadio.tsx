'use client'
import { Label, Radio } from '../../../../src'

const DefaultRadio = () => {
  return (
    <form className="flex flex-col gap-2">
      <legend className="mb-1 text-body-3 text-metal-600">Choose your favorite country</legend>
      <fieldset className="flex items-center gap-2">
        <Radio id="bd" name="country" />
        <Label htmlFor="bd">Bangladesh</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio id="usa" name="country" />
        <Label htmlFor="usa">United State</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio id="pk" name="country" />
        <Label htmlFor="pk">Pakistan</Label>
      </fieldset>
    </form>
  )
}

const DefaultRadioCode = `
'use client'
import { Label, Radio } from 'keep-react'

export const RadioComponent = () => {
  return (
    <form className="flex flex-col gap-2">
      <legend className="mb-1 text-body-3 text-metal-600">Choose your favorite country</legend>
      <fieldset className="flex items-center gap-2">
        <Radio id="bd" name="country" />
        <Label htmlFor="bd">Bangladesh</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio id="usa" name="country" />
        <Label htmlFor="usa">United State</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio id="pk" name="country" />
        <Label htmlFor="pk">Pakistan</Label>
      </fieldset>
    </form>
  )
}
`

export { DefaultRadio, DefaultRadioCode }
