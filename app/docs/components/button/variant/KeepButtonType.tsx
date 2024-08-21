'use client'
import { Button } from '../../../../src'

const KeepButtonType = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 px-5 py-3">
      <Button variant="default">Button</Button>
      <Button variant="softBg">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="link">Button</Button>
    </div>
  )
}

const KeepButtonTypeCode = {
  'ButtonComponent.tsx': `
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button color="primary" variant="softBg">
        Button
      </Button>
      <Button color="primary" variant="outline">
        Button
      </Button>
      <Button color="primary" variant="link">
        Button
      </Button>
    </>
  )
}
`,
}

export { KeepButtonType, KeepButtonTypeCode }
