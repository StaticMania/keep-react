'use client'
import { Check } from 'phosphor-react'
import {
  Button,
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../../../src'

const CustomizeModal = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Modal>
        <ModalAction asChild>
          <Button>Open Modal</Button>
        </ModalAction>
        <ModalContent className="max-w-[20rem] lg:max-w-[26rem]">
          <ModalClose className="absolute right-4 top-4" />
          <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-metal-100 bg-metal-50 text-metal-600 dark:border-metal-800 dark:bg-metal-800 dark:text-white">
              <Check size={60} />
            </div>
            <div className="space-y-1 text-center">
              <ModalTitle>Payment Successful</ModalTitle>
              <ModalDescription>
                Your document has unsaved changes. Discard or save them as a new page to continue.
              </ModalDescription>
            </div>
          </ModalHeader>
          <ModalFooter className="justify-center">
            <ModalClose asChild>
              <Button>Confirm</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

const CustomizeModalCode = {
  'ModalComponent.tsx': `
'use client'
import { Check } from 'phosphor-react'
import {
  Button,
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'keep-react'

export const ModalComponent = () => {
  return (
    <Modal>
      <ModalAction asChild>
        <Button>Open Modal</Button>
      </ModalAction>
      <ModalContent className="w-[20rem] lg:w-[26rem]">
        <ModalClose className="absolute right-4 top-4" />
        <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-metal-100 bg-metal-50 text-metal-600 dark:border-metal-800 dark:bg-metal-800 dark:text-white">
            <Check size={60} />
          </div>
          <div className="space-y-1 text-center">
            <ModalTitle>Payment Successful</ModalTitle>
            <ModalDescription>
              Your document has unsaved changes. Discard or save them as a new page to continue.
            </ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter className="justify-center">
          <ModalClose asChild>
            <Button>Confirm</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

`,
}

export { CustomizeModal, CustomizeModalCode }
