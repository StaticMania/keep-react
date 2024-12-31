'use client'
import Link from 'next/link'
import { Button } from '../../../../src'

const KeepButtonLink = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 px-5 py-3">
      <Button asChild>
        <Link href="#">Link Button</Link>
      </Button>
    </div>
  )
}

const KeepButtonLinkCode = {
  'ButtonComponent.tsx': `
import { Button } from 'keep-react'

export const ButtonComponent = () => {
  return (
    <Button asChild>
        <Link href="#">Link Button</Link>
    </Button>
  )
}
`,
}

export { KeepButtonLink, KeepButtonLinkCode }
