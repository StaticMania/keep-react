import { Input } from '../../../../src'

const DefaultInput = () => {
  return (
    <div className="mx-auto w-1/2 p-2">
      <Input placeholder="Enter name" type="text" />
    </div>
  )
}

const DefaultInputCode = {
  'InputComponent.tsx': `
import { Input } from 'keep-react'

export const InputComponent = () => {
  return <Input placeholder="Enter name" type="text" />
}
`,
}

export { DefaultInput, DefaultInputCode }
