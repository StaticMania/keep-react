'use client'
import { Button, toast } from '../../../../src'

const ToastWithDescription = () => {
  return (
    <Button
      onClick={() =>
        toast('Keep React is Awesome', {
          description: 'Elevate your web projects with Keep React 40+ customizable components.',
        })
      }>
      Toast
    </Button>
  )
}

const ToastWithDescriptionCode = `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  return (
    <Button
      onClick={() =>
        toast('Keep React is Awesome', {
          description: 'Elevate your web projects with Keep React 40+ customizable components.',
        })
      }>
      Toast
    </Button>
  )
}
`

export { ToastWithDescription, ToastWithDescriptionCode }
