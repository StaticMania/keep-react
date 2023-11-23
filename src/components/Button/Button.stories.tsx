import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      description: 'Avaiable button type',
      control: {
        buttonType: 'select',
      },
      options: ['primary', 'dashed', 'text', 'linkPrimary', 'linkGray', 'outlineGray', 'outlinePrimary', 'default'],
      table: {
        buttonType: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Avaiable button size',
      control: {
        buttonType: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      table: {
        buttonType: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    children: {
      description: 'Button text',
      table: {
        buttonType: { summary: 'string' },
        defaultValue: { summary: 'Default Button' },
      },
    },
    circle: {
      description: 'Button circle or not',
      table: {
        buttonType: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },

    width: {
      description: 'Button width full or half?',
      table: {
        buttonType: { summary: 'boolean' },
        defaultValue: { summary: 'full' },
      },
      control: { buttonType: 'radio' },
    },
    href: {
      description: 'Href to navigate',
      table: {
        buttonType: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
    notificationLabel: {
      description: 'Button notification label text',
      table: {
        buttonType: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    pill: {
      description: 'Button pill or not',
      table: {
        buttonType: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    positionInGroup: {
      description: 'Button position in button group',
      table: {
        buttonType: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
      control: { buttonType: 'select' },
    },

    className: {
      description: 'Custom class Name',
      table: {
        buttonType: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    color: {
      description: 'Button avaiable color',
      table: {
        buttonType: { summary: 'String' },
        defaultValue: { summary: 'info' },
      },
      control: { buttonType: 'select' },
      options: ['error', 'info', 'success', 'warning'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  args: {
    buttonType: 'default',
    size: 'md',
    children: 'Default Button',
  },
}
export const PrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    buttonType: 'primary',
    children: 'Primary Button',
  },
}
export const DashedButton: Story = {
  args: {
    ...DefaultButton.args,
    buttonType: 'dashed',
    children: 'Dashed Button',
  },
}
export const OutlinePrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    buttonType: 'outlinePrimary',
    children: 'Outline Primary Button',
  },
}
export const OutlineGrayButton: Story = {
  args: {
    ...DefaultButton.args,
    buttonType: 'outlineGray',
    children: 'Outline Gray Button',
  },
}
export const TextButton: Story = {
  args: {
    ...DefaultButton.args,
    buttonType: 'text',
    children: 'Text Button',
  },
}
export const LinkPrimaryButton: Story = {
  args: {
    ...DefaultButton.args,
    buttonType: 'linkPrimary',
    children: 'Link Primary Button',
  },
}
export const LinkGrayButton: Story = {
  args: {
    ...DefaultButton.args,
    buttonType: 'linkGray',
    children: 'Link Gray Button',
  },
}
