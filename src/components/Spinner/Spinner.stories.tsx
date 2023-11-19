import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '.'

/**
 * Metadata for the Spinner component.
 *
 * @component
 * @tags autodocs
 */
const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ['autodocs'],
  /**
   * Decorators used to wrap stories for the Spinner component.
   * @param {Story} Story - The story for the Spinner component.
   * @returns {JSX.Element} - The wrapped story for the Spinner component.
   */
  decorators: [
    (Story) => (
      <div className="mx-auto w-full text-center ">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    /**
     * The color of the spinner.
     */
    color: {
      control: 'select',
      options: ['failure', 'gray', 'info', 'pink', 'purple', 'success', 'warning'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' },
      },
      description: 'Availabe Toast color',
    },
    /**
     * The size of the spinner.
     */
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lg' },
      },
      description: 'Availabe Toast size',
    },
  },
  /**
   * The parameters for the Spinner component.
   */
  parameters: {
    componentSubtitle:
      'A Spinner component is a visual indicator used to show that a system is working or processing a request. It usually consists of a circular graphic that spins continuously, indicating that the system is still active and the user should wait for the process to complete.',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

/**
 * DefaultSpinner story configuration.
 * @typedef {Object} DefaultSpinner
 * @property {Object} args - The arguments for the DefaultSpinner story.
 * @property {string} args.color - The color of the spinner.
 * @property {string} args.size - The size of the spinner.
 */
export const DefaultSpinner: Story = {
  args: {
    color: 'info',
    size: 'lg',
  },
}
