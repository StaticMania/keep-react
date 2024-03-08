'use client'
import { CloudArrowUp } from 'phosphor-react'
import { useState } from 'react'
import { Button, Modal, Typography } from '../../../../src'

const DefaultModal = () => {
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
        <Modal.Body className="space-y-3">
          <Modal.Icon>
            <CloudArrowUp size={28} color="#1B4DFF" />
          </Modal.Icon>
          <Modal.Content>
            <Typography variant="div" className="!mb-6">
              <Typography variant="h3" className="mb-2 text-body-1 font-medium text-metal-900">
                Update Modal Status
              </Typography>
              <Typography variant="p" className="text-body-4 font-normal text-metal-600">
                Your document has unsaved changes. Discard or save them as a new page to continue.
              </Typography>
            </Typography>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={closeModal} size="sm" color="primary">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}

const DefaultModalCode = `
'use client'
import { useState } from 'react'
import { CloudArrowUp } from 'phosphor-react'
import { Button, Modal, Typography } from 'keep-react'

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
        <Modal.Body className="space-y-3">
          <Modal.Icon>
            <CloudArrowUp size={28} color="#1B4DFF" />
          </Modal.Icon>
          <Modal.Content>
            <Typography variant="div" className="!mb-6">
              <Typography variant="h3" className="mb-2 text-body-1 font-medium text-metal-900">
                Update Modal Status
              </Typography>
              <Typography variant="p" className="text-body-4 font-normal text-metal-600">
                Your document has unsaved changes. Discard or save them as a new page to continue.
              </Typography>
            </Typography>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={closeModal} size="sm" color="primary">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}
`

export { DefaultModal, DefaultModalCode }
