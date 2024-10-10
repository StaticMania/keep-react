import { Button } from '../../../../src'

const KeepButtonType = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 px-5 py-3">
      <Button variant="default">Default</Button>
      <Button variant="softBg">Soft Bg</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

const KeepButtonTypeCode = {
  'ButtonComponent.tsx': `
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button variant="default">Default</Button>
      <Button variant="softBg">Soft Bg</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </>
  )
}
`,
}

export { KeepButtonType, KeepButtonTypeCode }
