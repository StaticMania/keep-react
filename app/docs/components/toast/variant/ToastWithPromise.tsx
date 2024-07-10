'use client'
import { Button, toast } from '../../../../src'

const ToastWithPromise = () => {
  const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Keep React' }), 2000))
  return (
    <Button
      onClick={() =>
        toast.promise(promise, {
          loading: 'Loading...',
          success: (data: any) => {
            return `${data.name} toast has been added`
          },
          error: 'Error',
        })
      }>
      Toast
    </Button>
  )
}

const ToastWithPromiseCode = `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Keep React' }), 2000))
  return (
    <Button
      onClick={() =>
        toast.promise(promise, {
          loading: 'Loading...',
          success: (data: any) => {
            return {data.name} toast has been added
          },
          error: 'Error',
        })
      }>
      Toast
    </Button>
  )
}
`

export { ToastWithPromise, ToastWithPromiseCode }
