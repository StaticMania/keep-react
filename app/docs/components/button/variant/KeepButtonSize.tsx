'use client'
import { Button } from '../../../../src'

const KeepButtonSize = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 px-5 py-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">Button of 2xl</Button>
    </div>
  )
}

const KeepButtonSizeCode = {
  'ButtonComponent.tsx': `
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">Button of 2xl</Button>
    </>
  )
}
`,
}

export { KeepButtonSize, KeepButtonSizeCode }
