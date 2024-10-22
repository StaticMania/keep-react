'use client'
import { ChatText, ShoppingCart } from 'phosphor-react'
import { Button } from '../../../../src'

const KeepButtonIcon = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-3">
      <Button>
        <ShoppingCart size={18} className="mr-1.5" />
        Add to cart
      </Button>

      <Button>
        Message
        <ChatText size={18} className="ml-1.5" />
      </Button>
    </div>
  )
}

const KeepButtonIconCode = {
  'ButtonComponent.tsx': `
'use client'
import { Button } from 'keep-react'
import { ChatText, Gear, Heart, ShoppingCart, SignIn, Trash } from 'phosphor-react'

export const ButtonComponent = () => {
    <>
      <Button><ShoppingCart size={18} className="mr-1.5" />Add to cart</Button>
      <Button>Message<ChatText size={18} className="ml-1.5" /></Button>
    </>
  )
}
`,
}

export { KeepButtonIcon, KeepButtonIconCode }
