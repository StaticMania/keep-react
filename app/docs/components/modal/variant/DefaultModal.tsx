'use client'
import { CloudArrowUp } from 'phosphor-react'
import {
  Button,
  Modal,
  ModalAction,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../../../src'

const DefaultModal = () => {
  return (
    <Modal>
      <ModalAction asChild>
        <Button color="secondary" size="sm">
          Modal
        </Button>
      </ModalAction>
      <ModalBody>
        <ModalContent>
          <ModalClose className="absolute right-4 top-4" />
          <ModalHeader className="mb-6 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
              <CloudArrowUp size={28} color="#1B4DFF" />
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
              <Button size="sm" variant="outline" color="secondary">
                Cancel
              </Button>
            </ModalClose>
            <ModalClose asChild>
              <Button size="sm" color="primary">
                Confirm
              </Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}

const DefaultModalCode = `
'use client'
import { CloudArrowUp } from 'phosphor-react'
import {
  Button,
  Modal,
  ModalAction,
  ModalBody,
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
        <Button color="secondary" size="sm">
          Modal
        </Button>
      </ModalAction>
      <ModalBody>
        <ModalContent>
          <ModalClose className="absolute right-4 top-4" />
          <ModalHeader className="mb-6 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
              <CloudArrowUp size={28} color="#1B4DFF" />
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
              <Button size="sm" variant="outline" color="secondary">
                Cancel
              </Button>
            </ModalClose>
            <ModalClose asChild>
              <Button size="sm" color="primary">
                Confirm
              </Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}
`

export { DefaultModal, DefaultModalCode }
