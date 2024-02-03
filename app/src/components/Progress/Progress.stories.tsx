import { Meta, StoryObj } from '@storybook/react'
import { Progress } from '.'

const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'The Progress component is a visual indicator that shows the progress of a task. It displays a horizontal bar that fills up based on the completion percentage.',
  },

  argTypes: {
    label: {
      description: 'Progress level text.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    labelPosition: {
      description: 'Defines the available position for progress label.',
      control: 'select',
      options: ['inside', 'outside', 'none'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outside' },
      },
    },
    color: {
      control: 'select',
      options: ['info', 'error', 'success', 'warning', 'indigo', 'purple'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
      description: 'It defines the Available color for progress',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Defines the available sizes options for progress',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    progress: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Defines the progress control for the progress bar',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 45 },
      },
    },
    labelProgress: {
      description: 'Specifies whether the progress label is shown.',
      control: 'boolean',
    },
    showPopupLabelProgress: {
      description: 'Specifies whether the popup label progress is shown',
      control: 'boolean',
    },
    rounded: {
      description: 'Specifies whether the progress bar is rounded.',
      control: 'boolean',
    },
    bordered: {
      description: 'Specifies whether the progress bar is bordered.',
      control: 'boolean',
    },
  },

  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Progress>

export const DefaultProgress: Story = {
  args: {
    progress: 45,
    color: 'info',
  },
}

export const ProgressWithLevel: Story = {
  args: {
    ...DefaultProgress.args,
    label: 'Progress Text',
    labelPosition: 'outside',
  },
}
export const ProgressWithProgressLevel: Story = {
  args: {
    ...DefaultProgress.args,
    labelProgress: true,
  },
}
export const ProgressWithProgressPopup: Story = {
  args: {
    ...DefaultProgress.args,
    showPopupLabelProgress: true,
  },
}

export const ProgressWithBorder: Story = {
  args: {
    ...ProgressWithProgressPopup.args,
    bordered: true,
  },
}
