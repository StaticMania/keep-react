'use client'
import { DialogProps, Root } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { ModalContext } from './Context'

export interface IModalProps extends DialogProps {
  showCloseIcon?: boolean
  children: ReactNode
}

const Modal: FC<IModalProps> = ({ children, showCloseIcon = true, ...props }) => {
  return (
    <Root {...props}>
      <ModalContext.Provider value={{ showCloseIcon }}>{children}</ModalContext.Provider>
    </Root>
  )
}

export { Modal }

export type ModalProps = ComponentPropsWithoutRef<typeof Modal>
