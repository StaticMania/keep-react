import { Button } from '../../../../src'

const KeepButtonSize = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-3">
      <Button size="xs">XS Button</Button>
      <Button size="sm">SM Button</Button>
      <Button size="md">MD Button</Button>
      <Button size="lg">LG Button</Button>
      <Button size="xl">XL Button</Button>
      <Button size="2xl">2xl Button</Button>
    </div>
  )
}

const KeepButtonSizeCode = {
  'ButtonComponent.tsx': `
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button size="xs">XS Button</Button>
      <Button size="sm">SM Button</Button>
      <Button size="md">MD Button</Button>
      <Button size="lg">LG Button</Button>
      <Button size="xl">XL Button</Button>
      <Button size="2xl">2xl Button</Button>
    </>
  )
}
`,
}

export { KeepButtonSize, KeepButtonSizeCode }
