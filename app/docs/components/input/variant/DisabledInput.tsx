import { Input } from '../../../../src'

const DisabledInput = () => {
  return (
    <div className="mx-auto w-1/2 p-2">
      <Input disabled={true} placeholder="Enter name" />
    </div>
  )
}

const DisabledInputCode = {
  'InputComponent.tsx': `
import { Input } from 'keep-react'

export const InputComponent = () => {
  return <Input disabled={true} placeholder="Enter name" />
}
`,
}

export { DisabledInput, DisabledInputCode }
