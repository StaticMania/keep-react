'use client'
import { Info } from 'phosphor-react'
import { useState } from 'react'
import { Button, Checkbox, Label, Modal, ModalBody, ModalContent, ModalFooter, ModalIcon } from '../../../../src'

const ModalWithCheckbox = () => {
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
        <ModalBody className="space-y-3">
          <ModalIcon>
            <Info size={28} weight="fill" />
          </ModalIcon>
          <ModalContent>
            <div className="!mb-6">
              <h3 className="mb-2 text-body-1 font-medium text-metal-900 dark:text-white">Update Modal Status</h3>
              <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                Your document has unsaved changes. Discard or save them as a new page to continue.
              </p>
            </div>
            <fieldset className="mb-3 flex items-center gap-2">
              <Checkbox id="checkbox" />
              <Label htmlFor="checkbox" className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                I understand, no need to repeat
              </Label>
            </fieldset>
          </ModalContent>
          <ModalFooter>
            <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={closeModal} size="sm" color="primary">
              Confirm
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  )
}

const ModalWithCheckboxCode = `
'use client'
import { useState } from 'react'
import { Info } from 'phosphor-react'
import { Button, Checkbox, Label, Modal, ModalBody, ModalContent, ModalFooter, ModalIcon } from 'keep-react'

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
        <ModalBody className="space-y-3">
          <ModalIcon>
            <Info size={28} weight="fill" />
          </ModalIcon>
          <ModalContent>
            <div className="!mb-6">
              <h3 className="mb-2 text-body-1 font-medium text-metal-900">Update Modal Status</h3>
              <p className="text-body-4 font-normal text-metal-600">
                Your document has unsaved changes. Discard or save them as a new page to continue.
              </p>
            </div>
            <fieldset className="mb-3 flex items-center gap-2">
              <Checkbox id="checkbox" />
               <Label htmlFor="checkbox" className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                I understand, no need to repeat
              </Label>
            </fieldset>
          </ModalContent>
          <ModalFooter>
            <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={closeModal} size="sm" color="primary">
              Confirm
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  )
}

`

export { ModalWithCheckbox, ModalWithCheckboxCode }
