'use client'
import { ChatText, Gear, ShoppingCart } from 'phosphor-react'
import { Button } from '../../../../src'

const KeepButtonShape = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-3">
      <Button variant="softBg" shape="icon">
        <ShoppingCart size={16} />
      </Button>
      <Button variant="softBg" shape="icon">
        <ChatText size={16} />
      </Button>
      <Button variant="softBg" shape="icon">
        <Gear size={16} />
      </Button>
      <Button variant="softBg" shape="circle">
        <ShoppingCart size={16} />
      </Button>
      <Button variant="softBg" shape="circle">
        <ChatText size={16} />
      </Button>
      <Button variant="softBg" shape="circle">
        <Gear size={16} />
      </Button>
    </div>
  )
}

const KeepButtonShapeCode = {
  'ButtonComponent.tsx': `
'use client'
import { Button } from 'keep-react'
import { ChatText, Gear, ShoppingCart } from 'phosphor-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button variant="softBg" shape="icon">
        <ShoppingCart size={16} />
      </Button>
      <Button variant="softBg" shape="icon">
        <ChatText size={16} />
      </Button>
      <Button variant="softBg" shape="icon">
        <Gear size={16} />
      </Button>
      <Button variant="softBg" shape="circle">
        <ShoppingCart size={16} />
      </Button>
      <Button variant="softBg" shape="circle">
        <ChatText size={16} />
      </Button>
      <Button variant="softBg" shape="circle">
        <Gear size={16} />
      </Button>
    </>
  )
}
`,
}

export { KeepButtonShape, KeepButtonShapeCode }
