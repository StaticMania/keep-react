'use client'
import { Button } from '../../../../src'

const DefaultButton = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 px-5 py-3">
      <Button>Default Button</Button>
    </div>
  )
}

const DefaultButtonCode = {
  'ButtonComponent.tsx': `
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <Button>Default Button</Button>
  )
}
`,
}

export { DefaultButton, DefaultButtonCode }
