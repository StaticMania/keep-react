import type { Meta, StoryObj } from "@storybook/react";
import { CloudArrowUp, Trash, UserPlus } from "phosphor-react";
import { useState } from "react";
import { Modal } from ".";
import { Button } from "../Button";
import { Avatar } from "../Avatar/Avatar";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    onClose: {
      type: "function",
      description: "Function to be called when the modal is closed.",
    },
    popup: {
      control: "boolean",
      description: "Optional boolean flag for rendering modal as a popup.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    root: {
      description: "Modal Inner Element",
    },
    show: {
      control: "boolean",
      description: "Controls the visibility of the modal.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    icon: {
      description: "Optional icon to be displayed within the modal.",
    },
    size: {
      description: "Defines the size of the modal.",
      control: "select",
      options: [
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
      ],
    },

    modalType: {
      description: "Modal avaiale type",
    },
    position: {
      description: "Determines the position of the modal on the screen.",
      control: "select",
      options: ["bottom", "top", "left", "right", "center"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const DefaultModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalX, setShowModalX] = useState(false);

  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button onClick={() => setShowModal(!showModal)}>Modal</Button>
      <Button onClick={() => setShowModalX(!showModalX)}>
        Modal With Cross
      </Button>
      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} weight="bold" color="#1B4DFF" />}
        size="md"
        show={showModal}
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
          <Button type="outlineGray" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => setShowModal(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} weight="bold" color="#1B4DFF" />}
        size="md"
        show={showModalX}
        onClose={() => setShowModalX(!setShowModalX)}
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
          <Button type="outlineGray" onClick={() => setShowModalX(false)}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => setShowModalX(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const ConfirmationModalComponent = () => {
  const [showModalConfirm, setshowModalConfirm] = useState(false);
  const [showModalError, setshowModalError] = useState(false);

  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button onClick={() => setshowModalConfirm(!showModalConfirm)}>
        Info Modal
      </Button>
      <Button color="error" onClick={() => setshowModalError(!showModalError)}>
        Error Modal
      </Button>

      <Modal show={showModalConfirm} popup size="sm">
        <Modal.Body>
          <div className="flex items-start gap-2">
            <div className="mt-2 rounded bg-blue-50  p-2  text-gray-400   ">
              <CloudArrowUp size={24} color="blue" />
            </div>
            <h3 className="text-xl font-semibold text-[#2D3643]">
              Do you want to upload this file?
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className=" flex justify-start gap-4 ">
            <Button
              type="outlineGray"
              size="sm"
              onClick={() => setshowModalConfirm(false)}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              color="info"
              size="sm"
              onClick={() => setshowModalConfirm(false)}
            >
              Confirm
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        modalType="error"
        icon={<Trash size={28} weight="bold" color="#E92215" />}
        size="md"
        show={showModalError}
        onClose={() => setshowModalError(!showModalError)}
      >
        <Modal.Header>Do you want to delete this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={() => setshowModalError(false)}>
            Cancel
          </Button>
          <Button
            type="primary"
            color="error"
            onClick={() => setshowModalError(false)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const HistoryModalComponent = () => {
  const [showModalHistory, setshowModalHistory] = useState(false);
  const [showModalAccess, setshowModalAccess] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button onClick={() => setshowModalHistory(!showModalHistory)}>
        History Modal
      </Button>
      <Button onClick={() => setshowModalAccess(!showModalAccess)}>
        Access Modal
      </Button>

      <Modal
        modalType="info"
        icon={<CloudArrowUp size={28} weight="bold" color="#1B4DFF" />}
        size="md"
        show={showModalHistory}
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
          <div className="mt-5 flex items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              defaultChecked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-500 "
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-[#5E718D] "
            >
              Save on this browser
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={() => setshowModalHistory(false)}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => setshowModalHistory(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        modalType="info"
        icon={<UserPlus size={28} weight="bold" color="#5E718D" />}
        size="lg"
        show={showModalAccess}
      >
        <Modal.Header>Someone request edit access</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classica.
            </p>

            <div className="mb-6 flex items-center gap-2">
              <Avatar
                shape="round"
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
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              defaultChecked={!isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-500 "
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-[#5E718D] "
            >
              Don’t ask again
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={() => setshowModalAccess(false)}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => setshowModalAccess(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const DefaultModal: Story = {
  render: () => <DefaultModalComponent />,
};
export const ConfirmationModal: Story = {
  render: () => <ConfirmationModalComponent />,
};
export const HistoryModal: Story = {
  render: () => <HistoryModalComponent />,
};
