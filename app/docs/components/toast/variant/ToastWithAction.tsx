'use client'
import { Button, toast } from '../../../../src'

const ToastWithAction = () => {
  return (
    <Button
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

const ToastWithActionCode = {
  'ToastComponent.tsx': `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  return (
    <Button
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
`,
}

export { ToastWithAction, ToastWithActionCode }
