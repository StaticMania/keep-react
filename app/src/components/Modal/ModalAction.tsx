'use client'
import { HTMLAttributes, forwardRef, isValidElement } from 'react'
import { KeepSlot } from '../Helpers/KeepSlot'
import { useModalContext } from './ModalContext'

export interface ModalActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const ModalAction = forwardRef<HTMLButtonElement, ModalActionProps>(({ children, asChild, ...props }, ref) => {
  const { handleOpen } = useModalContext()

  const Slot = asChild && isValidElement(children) ? KeepSlot : 'button'

  return (
    <Slot onClick={handleOpen} {...props} ref={ref}>
      {children}
    </Slot>
  )
})

ModalAction.displayName = 'ModalAction'
