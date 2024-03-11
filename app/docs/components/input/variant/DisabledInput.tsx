'use client'
import { Input } from '../../../../src'

const DisabledInput = () => {
  return (
    <div className="max-w-md p-2">
      <Input disabled={true} placeholder="Enter name" />
    </div>
  )
}

const DisabledInputCode = `
'use client'
import { Input } from 'keep-react'

export const InputComponent = () => {
  return <Input disabled={true} placeholder="Enter name" />
}
`

export { DisabledInput, DisabledInputCode }
