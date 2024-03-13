'use client'
import { Envelope } from 'phosphor-react'
import { Button, Icon, Input, Label, Textarea } from '../../../../src'

const TextAreaWithForm = () => {
  return (
    <form className="mx-auto max-w-md space-y-3 rounded-md border border-metal-100 p-6">
      <fieldset className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input id="email" placeholder="Enter email" className="ps-11" />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="m1">Message</Label>
        <Textarea id="m1" placeholder="Write your message here" />
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
import { Button, Icon, Input, Label, Textarea } from 'keep-react'

export const TextAreaComponent = () => {
  return (
    <form className="mx-auto max-w-md space-y-3 rounded-md border border-metal-100 p-6">
      <fieldset className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input id="email" placeholder="Enter email" className="ps-11" />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="m1">Message</Label>
        <Textarea id="m1" placeholder="Write your message here" />
      </fieldset>
      <Button size="sm" color="secondary" type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
`

export { TextAreaWithForm, TextAreaWithFormCode }
