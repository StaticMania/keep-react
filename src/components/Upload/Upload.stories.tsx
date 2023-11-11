import { Upload } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Upload> = {
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    horizontal: {
      description: 'Upload type horizontal or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showProgressBar: {
      description: 'Progress bar show or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    progressType: {
      description: 'Avaiable Progress type',
      control: { type: 'radio' },
      options: ['success', 'error', 'pending'],
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'pending' },
      },
    },
    progress: {
      description: 'Upload Progress number',
      table: {
        type: { summary: 'Number' },
        defaultValue: { summary: 0 },
      },
      control: { type: 'number', min: 0, max: 100, step: 1 },
    },
    uploadTime: {
      description: 'Upload required time',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '10 second left' },
      },
    },
    disabled: {
      description: 'Upload disabled or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    file: {
      description: 'Selected file name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    onFileChange: {
      description: 'Selected file function',
      control: { type: null },
    },
  },
}

export default meta
type Story = StoryObj<typeof Upload>

export const DefaultUpload: Story = {
  args: {
    horizontal: false,
    showProgressBar: false,
    progressType: 'pending',
    progress: 45,
    uploadTime: '10 second left',
    disabled: false,
  },
}
export const UploadPending: Story = {
  args: {
    showProgressBar: true,
    progressType: 'pending',
    progress: 45,
  },
}
export const UploadFailed: Story = {
  args: {
    showProgressBar: true,
    progressType: 'error',
    progress: 55,
  },
}
export const UploadSuccess: Story = {
  args: {
    showProgressBar: true,
    progressType: 'success',
  },
}
export const HorizontalUpload: Story = { args: { horizontal: true } }
export const HorizontalUploadPending: Story = {
  args: {
    ...HorizontalUpload.args,
    showProgressBar: true,
    progressType: 'pending',
    progress: 45,
  },
}
export const HorizontalUploadFailed: Story = {
  args: {
    ...HorizontalUpload.args,
    showProgressBar: true,
    progressType: 'error',
    progress: 55,
  },
}
export const HorizontalUploadSuccess: Story = {
  args: {
    ...HorizontalUpload.args,
    showProgressBar: true,
    progressType: 'success',
  },
}
export const UploadDisabled: Story = { args: { disabled: true } }
export const HorizontalUploadDisabled: Story = {
  args: { disabled: true, horizontal: true },
}
