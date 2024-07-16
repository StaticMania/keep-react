'use client'
import { ShoppingCart } from 'phosphor-react'
import { Button } from '../../../../src'

const KeepButtonShape = () => {
  return (
    <div className="flex flex-wrap items-end gap-2 px-2 py-3">
      <Button shape="icon">
        <ShoppingCart size={16} />
      </Button>
      <Button shape="circle">
        <ShoppingCart size={16} />
      </Button>
    </div>
  )
}

const KeepButtonShapeCode = `
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
`

export { KeepButtonShape, KeepButtonShapeCode }
