import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from '.'
import { Button } from '../Button/Button'

/**
 * Meta information for the Popover component.
 */
const meta: Meta<typeof Popover> = {
  component: Popover,
  tags: ['autodocs'],
  decorators: [
    /**
     * Decorator to wrap the Popover component in a container with fixed height.
     * @param Story - The story component.
     * @returns The decorated story component.
     */
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
    /**
     * Popover title.
     */
    title: {
      description: 'Popover title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Popover...' },
      },
    },
    /**
     * Popover custom className.
     */
    className: {
      description: 'Popover custom className',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    /**
     * Popover description.
     */
    description: {
      description: 'Popover description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Loream...' },
      },
    },
    /**
     * Popover additional content.
     */
    additionalContent: {
      description: 'Popover additional content',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    /**
     * Popover Action Component.
     */
    children: {
      description: 'Popover Action Component',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    /**
     * Popover custom Icon.
     */
    icon: {
      description: 'Popover custom Icon',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    /**
     * Popover arrow show or not?
     */
    showArrow: {
      description: 'Popover arrow show or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    /**
     * Popover dismiss icon show or not?
     */
    showDismissIcon: {
      description: 'Popover dismiss icon show or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    /**
     * Available Trigger type.
     */
    trigger: {
      description: 'Available Trigger type',
      control: { type: 'radio' },
      options: ['hover', 'click'],
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'click' },
      },
    },
    /**
     * Available Popover Position.
     */
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

/**
 * DefaultPopover story configuration.
 * @typedef {Object} DefaultPopover
 * @property {Object} args - The arguments for the DefaultPopover story.
 * @property {string} args.title - The title of the popover.
 * @property {string} args.description - The description of the popover.
 * @property {React.ReactNode} args.additionalContent - Additional content to be displayed in the popover.
 * @property {React.ReactNode} args.children - The children of the popover.
 */
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
/**
 * Represents a story for a popover with one paragraph of additional content.
 */
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
/**
 * Represents a single line popover story.
 */
export const SingleLinePopover: Story = {
  args: {
    className: '!w-[20rem]',
    additionalContent: (
      <h2 className="text-body-3 font-medium leading-6 tracking-[-0.3px] text-metal-500">Single line message</h2>
    ),
    children: <Button size="xs">Popover</Button>,
  },
}

/**
 * Represents a story for a popover with trigger variant.
 *
 * @remarks
 * This story configures the trigger, title, description, and children for the popover.
 *
 * @public
 */
export const TriggerVariantPopover: Story = {
  args: {
    trigger: 'hover',
    title: 'Popover title here',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    children: <Button size="xs">Popover</Button>,
  },
}

/**
 * Represents the PopoverPosition story.
 * @typedef {Story} PopoverPosition
 * @property {string} position - The position of the popover.
 * @property {string} trigger - The trigger event for the popover.
 * @property {string} title - The title of the popover.
 * @property {string} description - The description of the popover.
 * @property {ReactNode} children - The content of the popover.
 */
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
