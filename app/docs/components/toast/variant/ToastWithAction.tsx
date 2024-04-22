'use client'
import { Button, toast } from '../../../../src'

const ToastWithAction = () => {
  return (
    <Button
      size="sm"
      color="secondary"
      className="bg-metal-900"
      onClick={() =>
        toast('Keep React is Awesome', {
          action: {
            label: 'Action',
            onClick: () => console.log('Action!'),
          },
        })
      }>
      Toast
    </Button>
  )
}

const ToastWithActionCode = `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  return (
    <Button
      size="sm"
      color="secondary"
      className="bg-metal-900"
      onClick={() =>
        toast('Keep React is Awesome', {
          action: {
                label: 'Action',
                onClick: () => console.log('Action!'),
           },
        })
      }>
      Toast
    </Button>
  )
}
`

export { ToastWithAction, ToastWithActionCode }
