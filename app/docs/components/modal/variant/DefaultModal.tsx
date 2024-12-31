'use client'
import { CloudArrowUp } from 'phosphor-react'
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

const DefaultModal = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Modal>
        <ModalAction asChild>
          <Button>Open Modal</Button>
        </ModalAction>
        <ModalContent>
          <ModalHeader className="mb-6 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
              <CloudArrowUp size={28} />
            </div>
            <div className="space-y-1">
              <ModalTitle>Update Modal Status</ModalTitle>
              <ModalDescription>
                Your document has unsaved changes. Discard or save them as a new page to continue.
              </ModalDescription>
            </div>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Cancel</Button>
            </ModalClose>
            <Button>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

const DefaultModalCode = {
  'ModalComponent.tsx': `
'use client'
import { CloudArrowUp } from 'phosphor-react'
import {
  Button,
  Modal,
  ModalAction,
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
      <ModalContent>
        <ModalHeader className="mb-6 space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
            <CloudArrowUp size={28} />
          </div>
          <div className="space-y-1">
            <ModalTitle>Update Modal Status</ModalTitle>
            <ModalDescription>
              Your document has unsaved changes. Discard or save them as a new page to continue.
            </ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
`,
}

export { DefaultModal, DefaultModalCode }
