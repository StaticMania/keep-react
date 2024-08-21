import { Button } from '../../../../src'

const KeepButtonColor = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 px-5 py-3">
      <Button color="primary">Button</Button>
      <Button color="secondary">Button</Button>
      <Button color="success">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="error">Button</Button>
    </div>
  )
}

const KeepButtonColorCode = {
  'ButtonComponent.tsx': `
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button color="primary">Button</Button>
      <Button color="secondary">Button</Button>
      <Button color="success">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="error">Button</Button>
    </>
  )
}
`,
}

export { KeepButtonColor, KeepButtonColorCode }
