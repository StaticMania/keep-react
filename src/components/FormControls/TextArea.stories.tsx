import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Leave a comment...' },
      },
      description: 'Text area placeholder text',
    },
    withBg: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: 'Text area input with background color or not?',
    },
    border: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      description: 'Text area input with border or not?',
    },
    shadow: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: 'Text area with shadow or not?',
    },
    disabled: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: 'Text area disabled or not?',
    },
    helperText: {
      control: {
        disable: true,
      },
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'Text area with helper text',
    },
    rows: {
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 4 },
      },
      description: 'Text area input rows',
    },
    color: {
      control: 'select',
      options: ['gray', 'info', 'error', 'warning', 'success'],
      description: 'Avaiable color for Text area',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const DefaultTextarea: Story = {
  args: {
    placeholder: 'Leave a comment...',
    withBg: false,
    color: 'gray',
    border: true,
    rows: 4,
  },
}
export const InfoTextarea: Story = {
  args: {
    ...DefaultTextarea.args,
    border: false,
    withBg: true,
    color: 'info',
  },
}
export const ErrorTextarea: Story = {
  args: {
    ...InfoTextarea.args,
    color: 'error',
  },
}
export const WarningTextarea: Story = {
  args: {
    ...InfoTextarea.args,
    color: 'warning',
  },
}
export const SuccessTextarea: Story = {
  args: {
    ...InfoTextarea.args,
    color: 'success',
  },
}

export const TextareaWithHelperText: Story = {
  args: {
    ...InfoTextarea.args,
    helperText: <span className="font-medium text-slate-500">Info that helps a user with this field!</span>,
  },
}
