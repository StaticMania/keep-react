'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { Button } from '../Button'
import { useModalContext } from './ModalContext'

export interface ModalActionProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const ModalAction = forwardRef<HTMLButtonElement, ModalActionProps>(({ children, asChild, ...props }, ref) => {
  const { handleOpen } = useModalContext()

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      onClick: handleOpen,
      itemRef: ref,
      ...props,
    })
  }

  return (
    <Button ref={ref} onClick={handleOpen}>
      Modal Action
    </Button>
  )
})

ModalAction.displayName = 'ModalAction'
