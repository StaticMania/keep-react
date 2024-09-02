'use client'
import { Portal, Root, Trigger } from '@radix-ui/react-dialog'
import { ModalClose } from './ModalClose'
import { ModalContent } from './ModalContent'
import { ModalDescription } from './ModalDescription'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalOverlay } from './ModalOverlay'
import { ModalTitle } from './ModalTitle'

const Modal = Root
const ModalAction = Trigger
const ModalPortal = Portal

export {
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalPortal,
  ModalTitle,
}
