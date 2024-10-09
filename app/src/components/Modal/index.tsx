'use client'
import { Portal, Trigger } from '@radix-ui/react-dialog'
import { Modal } from './Modal'
import { ModalContent } from './ModalContent'
import { ModalDescription } from './ModalDescription'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalOverlay } from './ModalOverlay'
import { ModalTitle } from './ModalTitle'

const ModalAction = Trigger
const ModalPortal = Portal

export {
  Modal,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalPortal,
  ModalTitle,
}
