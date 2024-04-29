'use client'
import { Button } from '../../../../src'

const KeepButtonType = () => {
  return (
    <div className="flex h-32 flex-wrap items-center gap-2 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button color="primary" variant="outline">
          Button
        </Button>
        <Button color="secondary" variant="outline">
          Button
        </Button>
        <Button color="success" variant="outline">
          Button
        </Button>
        <Button color="warning" variant="outline">
          Button
        </Button>
        <Button color="error" variant="outline">
          Button
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button color="primary" variant="link">
          Button
        </Button>
        <Button color="secondary" variant="link">
          Button
        </Button>
        <Button color="success" variant="link">
          Button
        </Button>
        <Button color="warning" variant="link">
          Button
        </Button>
        <Button color="error" variant="link">
          Button
        </Button>
      </div>
    </div>
  )
}

const KeepButtonTypeCode = `
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button color="primary" variant="outline">
        Button
      </Button>
      <Button color="secondary" variant="outline">
        Button
      </Button>
      <Button color="success" variant="outline">
        Button
      </Button>
      <Button color="warning" variant="outline">
        Button
      </Button>
      <Button color="error" variant="outline">
        Button
      </Button>
      <Button color="primary" variant="link">
        Button
      </Button>
      <Button color="secondary" variant="link">
        Button
      </Button>
      <Button color="success" variant="link">
        Button
      </Button>
      <Button color="warning" variant="link">
        Button
      </Button>
      <Button color="error" variant="link">
        Button
      </Button>
    </>
  )
}
`

export { KeepButtonType, KeepButtonTypeCode }
