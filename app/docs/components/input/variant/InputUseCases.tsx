'use client'
import { Envelope, Lock } from 'phosphor-react'
import { Button, Icon, Input, Label } from '../../../../src'

const InputUseCases = () => {
  return (
    <form className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
      <fieldset className="space-y-1">
        <Label htmlFor="name">Email*</Label>
        <div className="relative">
          <Input placeholder="Enter email" className="ps-11" />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="password">Password*</Label>
        <div className="relative">
          <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
          <Icon>
            <Lock size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <Button size="sm" color="secondary" type="submit">
        Sign In
      </Button>
    </form>
  )
}

const InputUseCaseCode = `
'use client'
import { Envelope, Lock } from 'phosphor-react'
import { Button, Icon, Input, Label } from 'keep-react'

export const InputComponent = () => {
  return (
    <form className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
      <fieldset className="space-y-1">
        <Label htmlFor="name">Email</Label>
        <div className="relative">
          <Input placeholder="Enter email" className="ps-11" />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
          <Icon>
            <Lock size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <Button size="sm" color="secondary" type="submit">
        Sign In
      </Button>
    </form>
  )
}
`

export { InputUseCaseCode, InputUseCases }
