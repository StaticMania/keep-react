'use client'
import { Button } from '../../../../src'
import { ShoppingCart } from 'phosphor-react'

const KeepButtonShape = () => {
  return (
    <div className="flex flex-wrap items-end gap-2 px-2 py-3">
      <Button shape="icon">
        <ShoppingCart size={20} />
      </Button>
      <Button shape="circle">
        <ShoppingCart size={20} />
      </Button>
    </div>
  )
}

const KeepButtonShapeCode = `
import { Button } from 'keep-react'
import { ShoppingCart } from 'phosphor-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button shape="icon"><ShoppingCart size={20} /></Button>
      <Button shape="circle"><ShoppingCart size={20} /></Button>
    </>
  )
}
`

export { KeepButtonShape, KeepButtonShapeCode }
