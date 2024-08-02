'use client'
import { Envelope } from 'phosphor-react'
import { Input, InputIcon } from '../../../../src'

const InputWithIcon = () => {
  return (
    <div className="p-2">
      <fieldset className="relative max-w-md">
        <Input placeholder="Enter email" className="ps-11" />
        <InputIcon>
          <Envelope size={19} color="#AFBACA" />
        </InputIcon>
      </fieldset>
    </div>
  )
}

const InputWithIconCode = {
  'InputComponent.tsx': `
'use client'
import { Envelope } from 'phosphor-react'
import { InputIcon, Input } from 'keep-react'

const InputWithIcon = () => {
  return (
    <fieldset className="relative max-w-md">
      <Input placeholder="Enter email" className="ps-11" />
      <InputIcon>
        <Envelope size={19} color="#AFBACA" />
      </InputIcon>
    </fieldset>
  )
}
`,
}

export { InputWithIcon, InputWithIconCode }
