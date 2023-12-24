import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from '.'
import { Button } from '../Button/Button'
import { removeFragment } from '../../helpers/mergeDeep'

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
    className: {
      description: 'Popover custom className',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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
      control: { type: 'boolean' },
      description: 'Popover arrow show or not?',
    },
    showDismissIcon: {
      description: 'Popover dismiss icon show or not?',
      control: { type: 'boolean' },
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
    children: removeFragment(
      <>
        <Popover.Title>Popover title here</Popover.Title>
        <Popover.Description>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour
        </Popover.Description>
        <Popover.Container>
          <Button type="outlinePrimary" size="xs">
            Checkout
          </Button>
        </Popover.Container>
        <Popover.Action>
          <Button size="xs">Popover</Button>
        </Popover.Action>
      </>,
    ),
  },
}

export const OneParagraphPopover: Story = {
  args: {
    showDismissIcon: false,
    children: removeFragment(
      <>
        <Popover.Description>There are many variations of passages of Lorem Ipsum available.</Popover.Description>
        <Popover.Container>
          <button className="mt-3 text-body-5 font-medium text-primary-400 underline underline-offset-[3px]">
            Skip Now
          </button>
        </Popover.Container>
        <Popover.Action>
          <Button size="xs">Popover</Button>
        </Popover.Action>
      </>,
    ),
  },
}
export const SingleLinePopover: Story = {
  args: {
    className: '!w-full',
    children: removeFragment(
      <>
        <Popover.Title>Single line message</Popover.Title>
        <Popover.Action>
          <Button size="xs">Popover</Button>
        </Popover.Action>
      </>,
    ),
  },
}
export const TriggerVariantPopover: Story = {
  args: {
    trigger: 'hover',
    children: removeFragment(
      <>
        <Popover.Title>Popover title here</Popover.Title>
        <Popover.Description>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour
        </Popover.Description>
        <Popover.Container>
          <Button type="outlinePrimary" size="xs">
            Checkout
          </Button>
        </Popover.Container>
        <Popover.Action>
          <Button size="xs">Popover</Button>
        </Popover.Action>
      </>,
    ),
  },
}

export const PopoverPosition: Story = {
  args: {
    position: 'right-end',
    children: removeFragment(
      <>
        <Popover.Title>Popover title here</Popover.Title>
        <Popover.Description>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour
        </Popover.Description>
        <Popover.Container>
          <Button type="outlinePrimary" size="xs">
            Checkout
          </Button>
        </Popover.Container>
        <Popover.Action>
          <Button size="xs">Popover</Button>
        </Popover.Action>
      </>,
    ),
  },
}
