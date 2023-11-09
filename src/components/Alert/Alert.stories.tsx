import { Meta, StoryObj } from '@storybook/react'
import Link from 'next/link'
import { CheckCircle, Info, WarningCircle, XCircle } from 'phosphor-react'
import { Alert } from '.'
import { removeFragment } from '../../helpers/mergeDeep'

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ['autodocs'],
  /**
   * The arguments for the Alert component.
   * @type {Object}
   */
  argTypes: {
    /**
     * The background color of the Alert component.
     * @type {string}
     * @default gray
     * @control color 
     * @description What background color to use like
     * @options error | gray | info | success | warning
     */
    color: {
      control: 'select',
      options: ['error', 'gray', 'info', 'success', 'warning'],
      table: {
        type: { summary: 'error | gray | info | success | warning' },
        defaultValue: { summary: 'gray' },
      },
      description: 'What background color to use like',
    },
    /**
     * Whether to add rounded corners to the Alert component.
     * @type {boolean}
     * @default false
     */
    rounded: { description: 'Adds rounded corners to the alert.' },
    /**
     * Whether to enable the dismiss icon for the Alert component.
     * @type {boolean}
     * @default false
     */
    dismiss: { description: 'Enables or disables the dismiss icon.' },
    /**
     * Whether to add a border around the Alert component.
     * @type {boolean}
     * @default false
     */
    withBorder: { description: 'Adds a border around the alert.' },
    /**
     * Whether to add a border accent to the Alert component.
     * @type {boolean}
     * @default false
     */
    withBorderAccent: { description: 'Adds a border accent to the alert.' },
    /**
     * The position of the border accent for the Alert component.
     * @type {string}
     * @default left
     * @control select
     * @description What is the border accent position color to use like
     * @options left | right | top | bottom
     */
    withBorderAccentPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'What is the border accent position color to use like',
      table: {
        type: { summary: 'left | right | top | bottom' },
        defaultValue: { summary: 'left' },
      },
    },
    /**
     * The children of the Alert component.
     * @type {ReactNode}
     * @default null
     */
    children: {
      control: { disable: true },
    },
    /**
     * The icon of the Alert component.
     */
    icon: {
      control: { disable: true },
    },
    /**
     * The additional content of the Alert component.
     */
    additionalContent: {
      control: { disable: true },
    },
    /**
     * The onDismiss function of the Alert component.
     * @type {function}
     * @default null
     * @control disable
     */
    onDismiss: {
      control: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

/**
 * Default Alert
 * The default Alert component.
 * color: info
 * rounded: No rounded corners
 * withBorder: No border
 * withBorderAccent: No border accent
 * withBorderAccentPosition: left
 * dismiss: No dismiss icon
 * title: Default message - make it short
 * icon: <Info size={24} color="#0F3CD9" />
 * additionalContent: Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry
 */

export const DefaultAlert: Story = {
  args: {
    color: 'info',
    rounded: false,
    withBorder: false,
    withBorderAccent: false,
    withBorderAccentPosition: 'left',
    dismiss: false,
    title: 'Default message - make it short',
    icon: <Info size={24} color="#0F3CD9" />,
    additionalContent: removeFragment(
      <>
        <div className="mt-1 text-sm text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry
          <Link href="/" className="ml-2 text-blue-600 underline">
            Link style
          </Link>
        </div>
      </>,
    ),
  },
}

/**
 * Rounded Alert
 * Add rounded corners to the alert.
 */
export const RoundedAlert: Story = {
  args: {
    ...DefaultAlert.args,
    rounded: true,
  },
}
/**
 * Alert with border
 * Add a border around the alert.
 * Add rounded corners to the alert.
 */
export const AlertWithBorder: Story = {
  args: {
    ...DefaultAlert.args,
    rounded: true,
    withBorder: true,
  },
}

/**
 * Alert with border accent
 * Add a border accent to the alert.
 */
export const AlertWithAccentBorder: Story = {
  args: {
    ...DefaultAlert.args,
    withBorderAccent: true,
  },
}

/**
 * Alert with border accent right
 * Add a border accent to the alert.
 */

export const InfoAlert: Story = {
  args: {
    ...DefaultAlert.args,
  },
}
/**
 * Gray Alert
 * The Gray Alert component.
 * color: gray
 * @default args
 */
export const GrayAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'gray',
    icon: <Info size={24} color="gray" />,
  },
}

/**
 * Error Alert
 * The Error Alert component.
 * color: error
 * @default args
 */

export const ErrorAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'error',
    icon: <XCircle size={24} color="#E92215" />,
  },
}

/**
 * Success Alert
 * The Success Alert component.
 * color: success
 * @default args
 */

export const SuccessAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'success',
    icon: <CheckCircle size={24} color="#0A9952" />,
  },
}

/**
 * Warning Alert
 * The Warning Alert component.
 * color: warning
 * @default args
 */

export const WarningAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'warning',
    icon: <WarningCircle size={24} color="#D8A800" />,
  },
}
