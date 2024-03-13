'use client'
import { Label, Radio } from '../../../../src'

const RadioVariant = () => {
  return (
    <form className="flex flex-col gap-2">
      <legend className="mb-1 text-body-3 text-metal-600">Choose your favorite country</legend>
      <fieldset className="flex items-center gap-2">
        <Radio variant="circle" id="bd1" name="country" />
        <Label htmlFor="bd1">Bangladesh</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio variant="circle" id="usa1" name="country" />
        <Label htmlFor="usa1">United State</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio variant="circle" id="pk1" name="country" />
        <Label htmlFor="pk1">Pakistan</Label>
      </fieldset>
    </form>
  )
}

const RadioVariantCode = `
'use client'
import { Label, Radio } from 'keep-react'

export const RadioComponent = () => {
  return (
    <form className="flex flex-col gap-2">
      <legend className="mb-1 text-body-3 text-metal-600">Choose your favorite country</legend>
      <fieldset className="flex items-center gap-2">
        <Radio variant="circle" id="bd1" name="country" />
        <Label htmlFor="bd1">Bangladesh</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio variant="circle" id="usa1" name="country" />
        <Label htmlFor="usa1">United State</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio variant="circle" id="pk1" name="country" />
        <Label htmlFor="pk1">Pakistan</Label>
      </fieldset>
    </form>
  )
}
`

export { RadioVariant, RadioVariantCode }
