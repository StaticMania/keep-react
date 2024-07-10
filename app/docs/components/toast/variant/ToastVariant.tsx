'use client'
import { Button, toast } from '../../../../src'

const ToastWithColorVariant = () => {
  return (
    <div className="flex items-center gap-3">
      <Button onClick={() => toast.info('Keep React info toast')}>Info</Button>
      <Button onClick={() => toast.success('Keep React success toast')}>Success</Button>
      <Button onClick={() => toast.warning('Keep React warning toast')}>Warning</Button>
      <Button onClick={() => toast.error('Keep React error toast')}>Error</Button>
    </div>
  )
}

const ToastWithColorVariantCode = `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  return (
    <div className="flex items-center gap-3">
      <Button onClick={() => toast.info('Keep React info toast')}>Info</Button>
      <Button onClick={() => toast.success('Keep React success toast')}>Success</Button>
      <Button onClick={() => toast.warning('Keep React warning toast')}>Warning</Button>
      <Button onClick={() => toast.error('Keep React error toast')}>Error</Button>
    </div>
  )
}

`

export { ToastWithColorVariant, ToastWithColorVariantCode }
