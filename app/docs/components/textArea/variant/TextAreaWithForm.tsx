'use client'
import { Envelope } from 'phosphor-react'
import { Button, Input, InputIcon, Label, Textarea } from '../../../../src'

const TextAreaWithForm = () => {
  return (
    <form className="mx-auto max-w-md space-y-3 rounded-md border border-metal-100 p-6 dark:border-metal-800">
      <fieldset className="space-y-1">
        <Label htmlFor="email">Email*</Label>
        <div className="relative">
          <Input id="email" placeholder="Enter email" className="ps-11" />
          <InputIcon>
            <Envelope size={19} color="#AFBACA" />
          </InputIcon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="m1">Message*</Label>
        <Textarea id="m1" placeholder="Write your message here" rows={8} />
      </fieldset>
      <Button size="sm" color="secondary" type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}

const TextAreaWithFormCode = `
'use client'
import { Envelope } from 'phosphor-react'
import { Button, InputIcon, Input, Label, Textarea } from 'keep-react'

export const TextAreaComponent = () => {
  return (
    <form className="mx-auto max-w-md space-y-3 rounded-md border border-metal-100 p-6 dark:border-metal-800">
      <fieldset className="space-y-1">
        <Label htmlFor="email">Email*</Label>
        <div className="relative">
          <Input id="email" placeholder="Enter email" className="ps-11" />
          <InputIcon>
            <Envelope size={19} color="#AFBACA" />
          </InputIcon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="m1">Message*</Label>
        <Textarea id="m1" placeholder="Write your message here" rows={8} />
      </fieldset>
      <Button size="sm" color="secondary" type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
`

export { TextAreaWithForm, TextAreaWithFormCode }
