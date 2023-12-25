import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Available button variant',
      control: {
        type: 'select',
      },
      options: ['primary', 'dashed', 'text', 'linkPrimary', 'linkGray', 'outlineGray', 'outlinePrimary', 'default'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    type: {
      description: 'Available button type',
      control: {
        type: 'select',
      },
      options: ['button', 'reset', 'submit'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
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
    variant: 'default',
    size: 'md',
    children: 'Default Button',
  },
}
export const PrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    variant: 'primary',
    children: 'Primary Button',
  },
}
export const DashedButton: Story = {
  args: {
    ...DefaultButton.args,
    variant: 'dashed',
    children: 'Dashed Button',
  },
}
export const OutlinePrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    variant: 'outlinePrimary',
    children: 'Outline Primary Button',
  },
}
export const OutlineGrayButton: Story = {
  args: {
    ...DefaultButton.args,
    variant: 'outlineGray',
    children: 'Outline Gray Button',
  },
}
export const TextButton: Story = {
  args: {
    ...DefaultButton.args,
    variant: 'text',
    children: 'Text Button',
  },
}
export const LinkPrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    variant: 'linkPrimary',
    children: 'Link Primary Button',
  },
}
export const LinkGrayButton: Story = {
  args: {
    ...DefaultButton.args,
    variant: 'linkGray',
    children: 'Link Gray Button',
  },
}
