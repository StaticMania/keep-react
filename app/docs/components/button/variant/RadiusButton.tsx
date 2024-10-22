'use client'
import { ShoppingCart } from 'phosphor-react'
import { Button } from '../../../../src'

const RadiusButton = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-3">
      <Button radius="full">
        <ShoppingCart size={18} className="mr-1.5" />
        Add to cart
      </Button>
    </div>
  )
}

const RadiusButtonCode = {
  'ButtonComponent.tsx': `
'use client'
import { Button } from 'keep-react'
import { ShoppingCart} from 'phosphor-react'

export const ButtonComponent = () => {
  return (
    <Button radius="full">
      <ShoppingCart size={18} className="mr-1.5" />
      Add to cart
    </Button>
  )
}
`,
}

export { RadiusButton, RadiusButtonCode }
