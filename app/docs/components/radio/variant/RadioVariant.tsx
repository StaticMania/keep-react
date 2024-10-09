'use client'
import { useState } from 'react'
import { Label, Radio } from '../../../../src'

const RadioVariant = () => {
  const [value, setValue] = useState('bd')

  console.log({ value })
  return (
    <form className="flex flex-col gap-2">
      <legend className="mb-1 text-body-3 text-metal-600 dark:text-metal-300">Choose your favorite country</legend>
      <fieldset className="flex items-center gap-2">
        <Radio
          onChange={(e) => setValue(e.target.value)}
          value="bd"
          checked={value === 'bd'}
          variant="rounded"
          id="bd1"
          name="country"
        />
        <Label htmlFor="bd1">Bangladesh</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio
          onChange={(e) => setValue(e.target.value)}
          value="us"
          checked={value === 'us'}
          variant="square"
          id="usa1"
          name="country"
        />
        <Label htmlFor="usa1">United State</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio
          value="pk"
          checked={value === 'pk'}
          onChange={(e) => setValue(e.target.value)}
          variant="circle"
          id="pk1"
          name="country"
        />
        <Label htmlFor="pk1">Pakistan</Label>
      </fieldset>
    </form>
  )
}

const RadioVariantCode = {
  'RadioComponent.tsx': `
import { Label, Radio } from 'keep-react'

export const RadioComponent = () => {
  return (
    <form className="flex flex-col gap-2">
      <legend className="mb-1 text-body-3 text-metal-600 dark:text-metal-300">Choose your favorite country</legend>
      <fieldset className="flex items-center gap-2">
        <Radio variant="rounded" id="bd1" name="country" />
        <Label htmlFor="bd1">Bangladesh</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio variant="square" id="usa1" name="country" />
        <Label htmlFor="usa1">United State</Label>
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Radio variant="circle" id="pk1" name="country" />
        <Label htmlFor="pk1">Pakistan</Label>
      </fieldset>
    </form>
  )
}
`,
}

export { RadioVariant, RadioVariantCode }
