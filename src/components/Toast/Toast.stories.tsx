import type { Meta, StoryObj } from "@storybook/react";
import {
  ArrowsClockwise,
  Check,
  Fire,
  TelegramLogo,
  Warning,
  X,
} from "phosphor-react";
import { Toast } from ".";
import { Button } from "../Button";
import { removeFragment } from "../../helpers/mergeDeep";

const meta: Meta<typeof Toast> = {
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { disable: true },
      description: "Children is toast content",
      table: {
        type: { summary: "ReactNode" },
      },
    },

    duration: {
      control: "select",
      options: [75, 100, 150, 200, 300, 500, 700, 1000],
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 300 },
      },
      description: "Availabe Toast animation duration",
    },
  },
  parameters: {
    componentSubtitle:
      "A toast component is a small pop-up message that appears on the screen, usually at the bottom or top, to notify the user of an event or action that has occurred.",
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const defaultToastEl = (
  <>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-500">
      <Fire size={20} weight="bold" />
    </div>
    <div className="flex flex-col">
      <div className="ml-3 text-base text-slate-700">Default Toast heading</div>
    </div>
    <Toast.Toggle />
  </>
);

export const DefaultToast: Story = {
  args: {
    children: removeFragment(defaultToastEl),
  },
};

const successToastEl = (
  <>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-500">
      <Check size={20} weight="bold" />
    </div>
    <div className="flex flex-col">
      <div className="ml-3 text-base text-slate-700">Success Toast heading</div>
    </div>
    <Toast.Toggle />
  </>
);

export const SuccessToast: Story = {
  args: {
    children: removeFragment(successToastEl),
  },
};

const errorToastEl = (
  <>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
      <X size={20} weight="bold" />
    </div>
    <div className="flex flex-col">
      <div className="ml-3 text-base text-slate-700">Error Toast heading</div>
    </div>
    <Toast.Toggle />
  </>
);

export const ErrorToast: Story = {
  args: {
    children: removeFragment(errorToastEl),
  },
};

const warningToastEl = (
  <>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
      <Warning size={20} weight="bold" />
    </div>
    <div className="flex flex-col">
      <div className="ml-3 text-base text-slate-700">Warning Toast heading</div>
    </div>
    <Toast.Toggle />
  </>
);

export const WarningToast: Story = {
  args: {
    children: removeFragment(warningToastEl),
  },
};

const messageToastEl = (
  <>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-blue-500">
      <TelegramLogo size={24} weight="fill" />
    </div>
    <div className="flex flex-col">
      <div className="ml-3 text-base text-slate-700">
        Message sent successfully.
      </div>
    </div>
  </>
);

export const MessageToast: Story = {
  args: {
    children: removeFragment(messageToastEl),
  },
};
const undoToastEl = (
  <>
    <div className="flex items-center justify-between gap-3">
      <div className="text-base font-normal">Conversation archived.</div>
      <div className="ml-auto flex items-center space-x-2">
        <a
          className="rounded-lg p-1.5 text-base font-medium text-blue-500 hover:bg-blue-100 "
          href="/toast"
        >
          Undo
        </a>
        <Toast.Toggle />
      </div>
    </div>
  </>
);

export const ToastWithUndoButton: Story = {
  args: {
    children: removeFragment(undoToastEl),
  },
};
const interToastEl = (
  <>
    <div className="flex !items-start">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-400 ">
        <ArrowsClockwise className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">
        <span className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
          Update available
        </span>
        <div className="mb-2 text-sm font-normal">
          A new software version is available for download.
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <Button type="primary" size="xs">
              Update
            </Button>
          </div>
          <div className="w-full">
            <Button size="xs" type="outlineGray">
              Not now
            </Button>
          </div>
        </div>
      </div>
      <Toast.Toggle />
    </div>
  </>
);

export const InteractiveToast: Story = {
  args: {
    children: removeFragment(interToastEl),
  },
};
