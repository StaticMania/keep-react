'use client'
import { Close, Portal, Trigger } from '@radix-ui/react-dialog'
import type { ModalProps } from './Modal'
import { Modal } from './Modal'
import { ModalContent } from './ModalContent'
import { ModalDescription } from './ModalDescription'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalOverlay } from './ModalOverlay'
import { ModalTitle } from './ModalTitle'

const ModalAction = Trigger
const ModalPortal = Portal
const ModalClose = Close

export {
  Modal,
  ModalClose,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalPortal,
  ModalProps,
  ModalTitle,
}
