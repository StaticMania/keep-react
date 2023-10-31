import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from ".";
import { Button } from "../Button/Button";

const meta: Meta<typeof Popover> = {
  component: Popover,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          height: "40vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      description: "Popover title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Popover..." },
      },
    },
    customClass: {
      description: "Popover custom className",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    description: {
      description: "Popover description",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Loream..." },
      },
    },
    additinalContent: {
      description: "Popover additional content",
      control: { type: null },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      description: "Popover Action Component",
      control: { type: null },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    icon: {
      description: "Popover custom Icon",
      control: { type: null },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    showArrow: {
      description: "Popover arrow show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    showDismissIcon: {
      description: "Popover dismiss icon show or not?",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    trigger: {
      description: "Avaiable Trigger type",
      control: { type: "radio" },
      options: ["hover", "click"],
      table: {
        type: { summary: "String" },
        defaultValue: { summary: "click" },
      },
    },
    position: {
      description: "Avaiable Popover Position",
      control: { type: "select" },
      table: {
        type: { summary: "String" },
        defaultValue: { summary: "top" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const DefaultPopover: Story = {
  args: {
    title: "Popover title here",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    additinalContent: (
      <div className="flex items-center gap-3 mt-3">
        <Button type="outlinePrimary" size="xs">
          Checkout
        </Button>
        <button className="text-sm font-medium underline text-primary-400 underline-offset-[3px]">
          Skip Now
        </button>
      </div>
    ),
    children: <Button size="xs">Popover</Button>,
  },
};
export const OneParagraphPopover: Story = {
  args: {
    showDismissIcon: false,
    additinalContent: (
      <>
        <h2 className="text-base font-medium text-slate-500">
          There are many variations of passages of Lorem Ipsum available.
        </h2>
        <button className="mt-3 text-sm font-medium underline text-primary-400 underline-offset-[3px]">
          Skip Now
        </button>
      </>
    ),
    children: <Button size="xs">Popover</Button>,
  },
};
export const SingleLinePopover: Story = {
  args: {
    customClass: "!w-[20rem]",
    additinalContent: (
      <h2 className="text-lg leading-6 tracking-[-0.3px] font-medium text-slate-500">
        Single line message
      </h2>
    ),
    children: <Button size="xs">Popover</Button>,
  },
};

export const TriggerVariantPopover: Story = {
  args: {
    trigger: "hover",
    title: "Popover title here",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    children: <Button size="xs">Popover</Button>,
  },
};
export const PopoverPosition: Story = {
  args: {
    position: "right-end",
    trigger: "hover",
    title: "Popover title here",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    children: <Button size="xs">Popover</Button>,
  },
};
