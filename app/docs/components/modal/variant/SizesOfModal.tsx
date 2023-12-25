'use client'
import { useState } from 'react'
import { Button, Modal } from '../../../../src'
import { CloudArrowUp } from 'phosphor-react'

const SizesOfModal = () => {
  const [showModal, setShowModal] = useState(false)
  const onClick = () => {
    setShowModal(!showModal)
  }
  return (
    <div className="px-2 py-3">
      <Button variant="primary" onClick={onClick}>
        Modal
      </Button>
      <Modal icon={<CloudArrowUp size={28} color="#1B4DFF" />} size="xl" show={showModal} position="center">
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

const SizesOfModalCode = `
"use client";
import { useState } from "react";
import { Button,Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";

export const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Button type='primary' onClick={onClick}>Modal</Button>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        position="top-center"
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
`

export { SizesOfModal, SizesOfModalCode }
