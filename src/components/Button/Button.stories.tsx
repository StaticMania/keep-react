import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Available button type',
      control: {
        type: 'select',
      },
      options: ['primary', 'dashed', 'text', 'linkPrimary', 'linkGray', 'outlineGray', 'outlinePrimary', 'default'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Available button size',
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    children: {
      description: 'Button text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Default Button' },
      },
    },
    circle: {
      description: 'Button circle or not',
      control: { type: 'boolean' },
    },

    onClick: {
      description: 'Button Onclick event',
      control: { type: 'null' },
    },

    width: {
      description: 'Button width full or half?',
      control: {
        type: 'select',
      },
      options: ['full', 'half'],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'half' },
      },
    },
    href: {
      description: 'Href to navigate',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
    notificationLabel: {
      description: 'Button notification label text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    pill: {
      description: 'Button pill or not',
      control: { type: 'boolean' },
    },
    positionInGroup: {
      description: 'Button position in button group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
      control: { type: 'select' },
    },

    className: {
      description: 'Custom class Name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    color: {
      description: 'Button available color',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'info' },
      },
      control: { type: 'select' },
      options: ['error', 'info', 'success', 'warning'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  args: {
    type: 'default',
    size: 'md',
    children: 'Default Button',
  },
}
export const PrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    type: 'primary',
    children: 'Primary Button',
  },
}
export const DashedButton: Story = {
  args: {
    ...DefaultButton.args,
    type: 'dashed',
    children: 'Dashed Button',
  },
}
export const OutlinePrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    type: 'outlinePrimary',
    children: 'Outline Primary Button',
  },
}
export const OutlineGrayButton: Story = {
  args: {
    ...DefaultButton.args,
    type: 'outlineGray',
    children: 'Outline Gray Button',
  },
}
export const TextButton: Story = {
  args: {
    ...DefaultButton.args,
    type: 'text',
    children: 'Text Button',
  },
}
export const LinkPrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    type: 'linkPrimary',
    children: 'Link Primary Button',
  },
}
export const LinkGrayButton: Story = {
  args: {
    ...DefaultButton.args,
    type: 'linkGray',
    children: 'Link Gray Button',
  },
}
