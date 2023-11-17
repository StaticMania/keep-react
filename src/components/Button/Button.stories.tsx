import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

/**
 * Meta information for the Button component.
 * @component Button
 * @tags autodocs
 * @argTypes
 * - `type`: Available button type
 * - `size`: Available button size
 * - `children`: Button text
 * - `circle`: Button circle or not
 * - `width`: Button width full or half?
 * - `href`: Href to navigate
 * - `notificationLabel`: Button notification label text
 * - `pill`: Button pill or not
 * - `positionInGroup`: Button position in button group
 * - `customClass`: Custom class Name
 * - `color`: Button available color
 */
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Avaiable button type',
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
      description: 'Avaiable button size',
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
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },

    width: {
      description: 'Button width full or half?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'full' },
      },
      control: { type: 'radio' },
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
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    positionInGroup: {
      description: 'Button position in button group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
      control: { type: 'select' },
    },

    customClass: {
      description: 'Custom class Name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    color: {
      description: 'Button avaiable color',
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
