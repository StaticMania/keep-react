'use client'
import { Button, toast } from '../../../../src'

const ToastWithColorVariant = () => {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm" color="secondary" className="bg-metal-900" onClick={() => toast.info('Keep React info toast')}>
        Info
      </Button>
      <Button
        size="sm"
        color="secondary"
        className="bg-metal-900"
        onClick={() => toast.success('Keep React success toast')}>
        Success
      </Button>
      <Button
        size="sm"
        color="secondary"
        className="bg-metal-900"
        onClick={() => toast.warning('Keep React warning toast')}>
        Warning
      </Button>
      <Button
        size="sm"
        color="secondary"
        className="bg-metal-900"
        onClick={() => toast.error('Keep React error toast')}>
        Error
      </Button>
    </div>
  )
}

const ToastWithColorVariantCode = `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm" color="secondary" className="bg-metal-900" onClick={() => toast.info('Keep React info toast')}>
        Info
      </Button>
      <Button
        size="sm"
        color="secondary"
        className="bg-metal-900"
        onClick={() => toast.success('Keep React success toast')}>
        Success
      </Button>
      <Button
        size="sm"
        color="secondary"
        className="bg-metal-900"
        onClick={() => toast.warning('Keep React warning toast')}>
        Warning
      </Button>
      <Button
        size="sm"
        color="secondary"
        className="bg-metal-900"
        onClick={() => toast.error('Keep React error toast')}>
        Error
      </Button>
    </div>
  )
}
`

export { ToastWithColorVariant, ToastWithColorVariantCode }
