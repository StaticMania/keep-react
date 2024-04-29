'use client'
import { Check } from 'phosphor-react'
import { useState } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalIcon } from '../../../../src'

const CustomizeModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalBody className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
          <ModalIcon className="h-20 w-20 border border-success-100 bg-success-50 text-success-500">
            <Check size={60} />
          </ModalIcon>
          <ModalContent className="my-4 text-center">
            <h3 className="mb-2 text-body-1 font-bold text-metal-900">Payment Successful</h3>
            <p className="mx-auto max-w-xs text-body-4 font-normal text-metal-600">
              Your document has unsaved changes. Discard or save them as a new page to continue.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button onClick={closeModal} size="sm" color="success">
              Confirm
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  )
}

const CustomizeModalCode = `
'use client'
import { useState } from 'react'
import { Check } from 'phosphor-react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalIcon } from 'keep-react'

export const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalBody className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
          <ModalIcon className="h-20 w-20 border border-success-100 bg-success-50 text-success-500">
            <Check size={60} />
          </ModalIcon>
          <ModalContent className="my-4 text-center">
            <h3 className="mb-2 text-body-1 font-bold text-metal-900">Payment Successful</h3>
            <p className="mx-auto max-w-xs text-body-4 font-normal text-metal-600">
              Your document has unsaved changes. Discard or save them as a new page to continue.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button onClick={closeModal} size="sm" color="success">
              Confirm
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  )
}
`

export { CustomizeModal, CustomizeModalCode }
