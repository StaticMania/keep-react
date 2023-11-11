'use client'
import { useState } from 'react'
import { Avatar, Modal, Button, CheckBox } from '~/src'
import { CloudArrowUp, UserPlus } from 'phosphor-react'

const HistoryModal = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false)
  const [showAccessModal, setShowAccessModal] = useState(false)

  const onClickHistoryModal = () => {
    setShowHistoryModal(!showHistoryModal)
  }
  const onClickAccessModal = () => {
    setShowAccessModal(!showAccessModal)
  }

  const handleChecked = (value: any) => {
    console.log(value)
  }

  return (
    <div className="flex flex-wrap items-end gap-2 px-2 py-3">
      <Button type="primary" onClick={onClickHistoryModal}>
        History Modal
      </Button>
      <Button type="primary" onClick={onClickAccessModal}>
        Access Modal
      </Button>
      <Modal icon={<CloudArrowUp size={28} color="#1B4DFF" />} size="md" show={showHistoryModal}>
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
          <div className="mt-5 flex items-center">
            <CheckBox size="md" variant="square" id="two" name="countries" color="info" handleChecked={handleChecked} />
            <label htmlFor="two" className="ml-2 text-base font-medium text-slate-500">
              Save on this browser
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" width="half" onClick={onClickHistoryModal}>
            Cancel
          </Button>
          <Button type="primary" width="half" onClick={onClickHistoryModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal icon={<UserPlus size={28} color="#5E718D" />} size="lg" show={showAccessModal}>
        <Modal.Header>Someone request edit access</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-500 md:text-base">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica.
            </p>
            <div className="mb-4 flex items-center gap-2 md:mb-6">
              <Avatar shape="circle" img="/images/avatar/avatar-4.png" statusPosition="bottom-right" size="md" />
              <div>
                <p className="text-sm font-semibold text-gray-500">Albert Flores</p>
                <p className="text-xs text-gray-500">keep@designsystem.com</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center">
            <CheckBox size="md" variant="square" id="two" name="countries" color="info" handleChecked={handleChecked} />
            <label htmlFor="two" className="ml-2 text-base font-medium text-slate-500">
              Save on this browser
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickAccessModal}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickAccessModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

const HistoryModalCode = `
"use client";
import { useState } from "react";
import { Avatar,Button,Modal } from "keep-react";
import { CloudArrowUp, UserPlus } from "phosphor-react";

export const ModalComponent = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showAccessModal, setShowAccessModal] = useState(false);

  const onClickHistoryModal = () => {
    setShowHistoryModal(!showHistoryModal);
  };
  const onClickAccessModal = () => {
    setShowAccessModal(!showAccessModal);
  };

  const handleChecked = (value) => {
    console.log(value)
  };

  return (
    <>
      <Button type='primary' onClick={onClickHistoryModal}>History Modal</Button>
      <Button type='primary' onClick={onClickAccessModal}>Access Modal</Button>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showHistoryModal}
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
          <div className="mt-5 flex items-center">
            <CheckBox
              size="md"
              variant="square"
              id="11"
              name="countries"
              color="info"
              handleChecked={handleChecked}
            />
            <label
              htmlFor="11"
              className="ml-2 text-base font-medium text-slate-500"
            >
              Save on this browser
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" width="half" onClick={onClickHistoryModal}>
            Cancel
          </Button>
          <Button type="primary" width="half" onClick={onClickHistoryModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        icon={<UserPlus size={28} color="#5E718D" />}
        size="lg"
        show={showAccessModal}
      >
        <Modal.Header>Someone request edit access</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classica.
            </p>
            <div className="md:mb-6 mb-4 flex items-center gap-2">
              <Avatar
                shape="circle"
                img="/images/avatar/avatar-4.png"
                statusPosition="bottom-right"
                size="md"
              />
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Albert Flores
                </p>
                <p className="text-xs text-gray-500">keep@designsystem.com</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center">
            <CheckBox
              size="md"
              variant="square"
              id="12"
              name="countries"
              color="info"
              handleChecked={handleChecked}
            />
            <label
              htmlFor="12"
              className="ml-2 text-base font-medium text-slate-500"
            >
              Save on this browser
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickAccessModal}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickAccessModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
`

export { HistoryModal, HistoryModalCode }
