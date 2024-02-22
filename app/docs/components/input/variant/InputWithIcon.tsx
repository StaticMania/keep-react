'use client'
import { Envelope } from 'phosphor-react'
import { Icon, Input } from '../../../../src'

const InputWithIcon = () => {
  return (
    <div className="p-2">
      <fieldset className="relative max-w-md">
        <Input placeholder="Enter email" className="ps-11" />
        <Icon>
          <Envelope size={19} color="#AFBACA" />
        </Icon>
      </fieldset>
    </div>
  )
}

const InputWithIconCode = `
'use client'
import { Envelope } from 'phosphor-react'
import { Icon, Input } from 'keep-react'

const InputWithIcon = () => {
  return (
    <fieldset className="relative max-w-md">
      <Input placeholder="Enter email" className="ps-11" />
      <Icon>
        <Envelope size={19} color="#AFBACA" />
      </Icon>
    </fieldset>
  )
}
`

export { InputWithIcon, InputWithIconCode }
