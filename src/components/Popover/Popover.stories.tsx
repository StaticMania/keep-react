import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from '.'
import { Button } from '../Button/Button'

const meta: Meta<typeof Popover> = {
  component: Popover,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          height: '40vh',
        }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      description: 'Popover title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Popover...' },
      },
    },
    className: {
      description: 'Popover custom className',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    description: {
      description: 'Popover description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Loream...' },
      },
    },
    additionalContent: {
      description: 'Popover additional content',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    children: {
      description: 'Popover Action Component',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    icon: {
      description: 'Popover custom Icon',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    showArrow: {
      description: 'Popover arrow show or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showDismissIcon: {
      description: 'Popover dismiss icon show or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    trigger: {
      description: 'Available Trigger type',
      control: { type: 'radio' },
      options: ['hover', 'click'],
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'click' },
      },
    },
    position: {
      description: 'Available Popover Position',
      control: { type: 'select' },
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'top' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const DefaultPopover: Story = {
  args: {
    title: 'Popover title here',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    additionalContent: (
      <div className="mt-3 flex items-center gap-3">
        <Button type="outlinePrimary" size="xs">
          Checkout
        </Button>
        <button className="text-body-5 font-medium text-primary-400 underline underline-offset-[3px]">Skip Now</button>
      </div>
    ),
    children: <Button size="xs">Popover</Button>,
  },
}
export const OneParagraphPopover: Story = {
  args: {
    showDismissIcon: false,
    additionalContent: (
      <>
        <h2 className="text-body-4 font-medium text-metal-500">
          There are many variations of passages of Lorem Ipsum available.
        </h2>
        <button className="mt-3 text-body-5 font-medium text-primary-400 underline underline-offset-[3px]">
          Skip Now
        </button>
      </>
    ),
    children: <Button size="xs">Popover</Button>,
  },
}
export const SingleLinePopover: Story = {
  args: {
    className: '!w-[20rem]',
    additionalContent: (
      <h2 className="text-body-3 font-medium leading-6 tracking-[-0.3px] text-metal-500">Single line message</h2>
    ),
    children: <Button size="xs">Popover</Button>,
  },
}
export const TriggerVariantPopover: Story = {
  args: {
    trigger: 'hover',
    title: 'Popover title here',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    children: <Button size="xs">Popover</Button>,
  },
}

export const PopoverPosition: Story = {
  args: {
    position: 'right-end',
    trigger: 'hover',
    title: 'Popover title here',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    children: <Button size="xs">Popover</Button>,
  },
}
