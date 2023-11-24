import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Avaiable button type',
      control: {
        variant: 'select',
      },
      options: ['primary', 'dashed', 'text', 'linkPrimary', 'linkGray', 'outlineGray', 'outlinePrimary', 'default'],
      table: {
        variant: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Avaiable button size',
      control: {
        variant: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      table: {
        variant: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    children: {
      description: 'Button text',
      table: {
        variant: { summary: 'string' },
        defaultValue: { summary: 'Default Button' },
      },
    },
    circle: {
      description: 'Button circle or not',
      table: {
        variant: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },

    width: {
      description: 'Button width full or half?',
      table: {
        variant: { summary: 'boolean' },
        defaultValue: { summary: 'full' },
      },
      control: { variant: 'radio' },
    },
    href: {
      description: 'Href to navigate',
      table: {
        variant: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
    notificationLabel: {
      description: 'Button notification label text',
      table: {
        variant: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    pill: {
      description: 'Button pill or not',
      table: {
        variant: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    positionInGroup: {
      description: 'Button position in button group',
      table: {
        variant: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
      control: { variant: 'select' },
    },

    className: {
      description: 'Custom class Name',
      table: {
        variant: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    color: {
      description: 'Button avaiable color',
      table: {
        variant: { summary: 'String' },
        defaultValue: { summary: 'info' },
      },
      control: { variant: 'select' },
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
