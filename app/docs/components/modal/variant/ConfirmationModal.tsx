'use client'
import { useState } from 'react'
import { Button, Modal } from '../../../../src'
import { CloudArrowUp, Trash } from 'phosphor-react'

const ConfirmationModal = () => {
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showErrorModalX, setShowErrorModalX] = useState(false)

  const onClickInfoModal = () => {
    setShowInfoModal(!showInfoModal)
  }
  const onClickErrorModal = () => {
    setShowErrorModalX(!showErrorModalX)
  }
  return (
    <div className="flex flex-wrap items-end gap-2 px-2 py-3">
      <Button type="primary" onClick={onClickInfoModal}>
        Info Modal
      </Button>
      <Button type="primary" onClick={onClickErrorModal}>
        Error Modal
      </Button>
      <Modal show={showInfoModal} size="sm">
        <Modal.Body>
          <div className="flex items-center gap-2 md:items-start">
            <div className="mt-2 rounded bg-primary-50  p-2  text-gray-400   ">
              <CloudArrowUp size={24} color="blue" />
            </div>
            <h3 className="text-body-4 font-semibold text-metal-900 md:text-body-2">
              Do you want to upload this file?
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className=" flex justify-start gap-4 ">
            <Button type="outlineGray" size="sm" onClick={onClickInfoModal}>
              Cancel
            </Button>
            <Button type="primary" color="info" size="sm" onClick={onClickInfoModal}>
              Confirm
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal icon={<Trash size={28} color="#E92215" />} size="md" show={showErrorModalX} onClose={onClickErrorModal}>
        <Modal.Header>Do you want to delete this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickErrorModal}>
            Cancel
          </Button>
          <Button type="primary" color="error" onClick={onClickErrorModal}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

const ConfirmationModalCode = `
"use client";
import  { useState } from "react";
import { Button,Modal } from "keep-react";
import { CloudArrowUp, Trash } from "phosphor-react";

export const ModalComponent = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showErrorModalX, setShowErrorModalX] = useState(false);

  const onClickInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };
  const onClickErrorModal = () => {
    setShowErrorModalX(!showErrorModalX);
  };
  return (
    <>
      <Button type='primary' onClick={onClickInfoModal}>Info Modal</Button>
      <Button type='primary' onClick={onClickErrorModal}>
        Error Modal
      </Button>
      <Modal show={showInfoModal} size="sm">
        <Modal.Body>
          <div className="flex items-center md:items-start gap-2">
            <div className="mt-2 rounded bg-primary-50  p-2  text-gray-400   ">
              <CloudArrowUp size={24} color="blue" />
            </div>
            <h3 className="text-body-4 md:text-body-2 font-semibold text-metal-900">
              Do you want to upload this file?
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className=" flex justify-start gap-4 ">
            <Button type="outlineGray" size="sm" onClick={onClickInfoModal}>
              Cancel
            </Button>
            <Button
              type="primary"
              color="info"
              size="sm"
              onClick={onClickInfoModal}
            >
              Confirm
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal
        icon={<Trash size={28} color="#E92215" />}
        size="md"
        show={showErrorModalX}
        onClose={onClickErrorModal}
      >
        <Modal.Header>Do you want to delete this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickErrorModal}>
            Cancel
          </Button>
          <Button type="primary" color="error" onClick={onClickErrorModal}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
`

export { ConfirmationModal, ConfirmationModalCode }
