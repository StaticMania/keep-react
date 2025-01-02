'use client'
import { Envelope, Lock } from 'phosphor-react'
import { Button, Input, InputIcon, Label } from '../../../../src'

const InputUseCases = () => {
  return (
    <form className="mx-auto w-1/2 space-y-2 rounded-lg border border-metal-50 p-8 shadow-md dark:border-metal-800/50">
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
        <Label htmlFor="password">Password*</Label>
        <div className="relative">
          <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
          <InputIcon>
            <Lock size={19} color="#AFBACA" />
          </InputIcon>
        </div>
      </fieldset>
      <Button size="md" className="w-full" color="secondary" type="submit">
        Sign In
      </Button>
    </form>
  )
}

const InputUseCaseCode = {
  'InputComponent.tsx': `
'use client'
import { Envelope, Lock } from 'phosphor-react'
import { Button, InputIcon, Input, Label } from 'keep-react'

export const InputComponent = () => {
  return (
    <form className="max-w-md space-y-2 rounded-lg border p-8 shadow-md border-metal-50 dark:border-metal-800/50">
      <fieldset className="space-y-1">
        <Label htmlFor="name">Email</Label>
        <div className="relative">
          <Input placeholder="Enter email" className="ps-11" />
          <InputIcon>
            <Envelope size={19} color="#AFBACA" />
          </InputIcon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
          <InputIcon>
            <Lock size={19} color="#AFBACA" />
          </InputIcon>
        </div>
      </fieldset>
      <Button size="sm" color="secondary" type="submit">
        Sign In
      </Button>
    </form>
  )
}
`,
}

export { InputUseCaseCode, InputUseCases }
