'use client'
import { ShoppingCart } from 'phosphor-react'
import { Button } from '../../../../src'

const KeepButtonShape = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 px-5 py-3">
      <Button shape="icon">
        <ShoppingCart size={16} />
      </Button>
      <Button shape="circle">
        <ShoppingCart size={16} />
      </Button>
    </div>
  )
}

const KeepButtonShapeCode = {
  'ButtonComponent.tsx': `
'use client'
import { Button } from 'keep-react'
import { ShoppingCart } from 'phosphor-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button shape="icon"><ShoppingCart size={16} /></Button>
      <Button shape="circle"><ShoppingCart size={16} /></Button>
    </>
  )
}
`,
}

export { KeepButtonShape, KeepButtonShapeCode }
