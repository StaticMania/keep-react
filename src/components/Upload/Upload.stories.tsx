import { Upload } from '.'
import type { Meta, StoryObj } from '@storybook/react'

/**
 * Meta information for the Upload component.
 *
 * @component Upload
 * @tags autodocs
 * @argTypes
 * - `horizontal`: Upload type horizontal or not?
 * - `showProgressBar`: Progress bar show or not?
 * - `progressType`: Available Progress type
 * - `progress`: Upload Progress number
 * - `uploadTime`: Upload required time
 * - `disabled`: Upload disabled or not?
 * - `file`: Selected file name
 * - `onFileChange`: Selected file function
 */
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

/**
 * DefaultUpload story configuration.
 */
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
/**
 * Represents the UploadPending story.
 * @typedef {Object} UploadPending
 * showProgressBar - Determines whether to show the progress bar.
 * progressType - "success" or "error" or "pending"
 */
export const UploadPending: Story = {
  args: {
    showProgressBar: true,
    progressType: 'pending',
    progress: 45,
  },
}
/**
 * Represents the story for a failed upload.
 * @typedef {Object} UploadFailed
 * showProgressBar - Determines whether to show the progress bar.
 * progressType - "success" or "error" or "pending"
 */
export const UploadFailed: Story = {
  args: {
    showProgressBar: true,
    progressType: 'error',
    progress: 55,
  },
}
/**
 * Represents the UploadSuccess story.
 * @typedef {Object} UploadSuccess
 * showProgressBar - Determines whether to show the progress bar.
 * progressType - "success" or "error" or "pending"
 */
export const UploadSuccess: Story = {
  args: {
    showProgressBar: true,
    progressType: 'success',
  },
}
/**
 * Story for horizontal upload.
 */
export const HorizontalUpload: Story = { args: { horizontal: true } }
/**
 * Represents a story for a horizontal upload with pending progress.
 * @type {Story}
 */
export const HorizontalUploadPending: Story = {
  args: {
    ...HorizontalUpload.args,
    showProgressBar: true,
    progressType: 'pending',
    progress: 45,
  },
}
/**
 * Represents a story for a horizontal upload with failed progress.
 */
export const HorizontalUploadFailed: Story = {
  args: {
    ...HorizontalUpload.args,
    showProgressBar: true,
    progressType: 'error',
    progress: 55,
  },
}
/**
 * Represents a story for a horizontal upload with success progress.
 */
export const HorizontalUploadSuccess: Story = {
  args: {
    ...HorizontalUpload.args,
    showProgressBar: true,
    progressType: 'success',
  },
}
/**
 * Story for a disabled upload component.
 */
export const UploadDisabled: Story = { args: { disabled: true } }
/**
 * Represents a story for a horizontal upload component with disabled state.
 */
export const HorizontalUploadDisabled: Story = {
  args: { disabled: true, horizontal: true },
}
