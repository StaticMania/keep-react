import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from '.'

const meta: Meta<typeof CheckBox> = {
  tags: ['autodocs'],
  component: CheckBox,
  argTypes: {
    label: {
      description: 'Checkbox Label',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'Checkbox' },
      },
    },
    checked: {
      description: 'Checkbox checked or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    disabled: {
      description: 'Checkbox disabled or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox avaiable sizes',
      table: {
        type: { summary: 'lg | sm | md' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['error', 'info', 'success', 'warning'],
      description: 'Checkbox avaiable colors',
      table: {
        type: { summary: 'error | info | success | warning' },
        defaultValue: { summary: 'info' },
      },
    },
    labelColor: {
      control: 'select',
      options: ['error', 'info', 'success', 'warning'],
      description: 'Checkbox avaiable label colors',
      table: {
        type: { summary: 'error | info | success | warning' },
        defaultValue: { summary: 'info' },
      },
    },
    variant: {
      control: 'select',
      options: ['square', 'circle'],
      description: 'Checkbox avaiable variant',
      table: {
        type: { summary: 'square | circle' },
        defaultValue: { summary: 'square' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const DefaultCheckbox: Story = {
  args: {
    label: 'Checkbox',
    size: 'md',
    labelColor: 'info',
    id: '2',
  },
}
