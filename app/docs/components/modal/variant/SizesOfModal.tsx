"use client";
import { useState } from "react";
import { Button, Modal } from "~/src";
import { CloudArrowUp } from "phosphor-react";

const SizesOfModal = () => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="py-3 px-2">
      <Button type="primary" onClick={onClick}>
        Modal
      </Button>
      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="xl"
        show={showModal}
        position="center"
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

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
        modalType="info"
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        position="top-center"
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
`;

export { SizesOfModal, SizesOfModalCode };
