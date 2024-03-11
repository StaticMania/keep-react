'use client'
import { Input } from '../../../../src'

const DefaultInput = () => {
  return (
    <div className="max-w-md p-2">
      <Input placeholder="Enter name" type="text" />
    </div>
  )
}

const DefaultInputCode = `
'use client'
import { Input } from 'keep-react'

export const InputComponent = () => {
  return <Input placeholder="Enter name" type="text" />
}
`

export { DefaultInput, DefaultInputCode }
