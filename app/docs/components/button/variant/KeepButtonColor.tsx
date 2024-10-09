import { Button } from '../../../../src'

const KeepButtonColor = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-3">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
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
