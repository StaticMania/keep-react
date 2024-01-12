'use client'
import { Button } from '../../../../src'

const KeepButtonColor = () => {
  return (
    <div className="flex h-20 flex-wrap items-center gap-2 p-4">
      <Button color="primary">Button</Button>
      <Button color="secondary">Button</Button>
      <Button color="success">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="error">Button</Button>
    </div>
  )
}

const KeepButtonColorCode = `
"use client"
import { Button } from "keep-react"

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
`

export { KeepButtonColor, KeepButtonColorCode }
