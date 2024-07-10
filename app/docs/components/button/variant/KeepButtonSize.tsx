'use client'
import { Button } from '../../../../src'

const KeepButtonSize = () => {
  return (
    <div className="flex flex-wrap items-end gap-2 p-5">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">Button of 2xl</Button>
    </div>
  )
}

const KeepButtonSizeCode = `
'use client'
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button size="xs" >Extra Small</Button>
      <Button size="sm" >Small Button</Button>
      <Button size="md" >Medium Button</Button>
      <Button size="lg" >Large Button</Button>
      <Button size="xl" >Extra Large</Button>
      <Button size="2xl" >Button of 2xl</Button>
    </>
  );
};
`

export { KeepButtonSize, KeepButtonSizeCode }
