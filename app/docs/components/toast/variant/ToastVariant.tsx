'use client'
import { Button, toast } from '../../../../src'

const ToastWithColorVariant = () => {
  return (
    <Button size="sm" color="secondary" className="bg-metal-900" onClick={() => toast.success('Keep React is Awesome')}>
      Toast
    </Button>
  )
}

const ToastWithColorVariantCode = `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  return (
    <Button size="sm" color="secondary" className="bg-metal-900" onClick={() => toast.success('Keep React is Awesome')}>
      Toast
    </Button>
  )
}
`

export { ToastWithColorVariant, ToastWithColorVariantCode }
