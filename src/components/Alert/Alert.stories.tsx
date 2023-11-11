import { Meta, StoryObj } from '@storybook/react'
import Link from 'next/link'
import { CheckCircle, Info, WarningCircle, XCircle } from 'phosphor-react'
import { Alert } from '.'
import { removeFragment } from '../../helpers/mergeDeep'

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['error', 'gray', 'info', 'success', 'warning'],
      table: {
        type: { summary: 'error | gray | info | success | warning' },
        defaultValue: { summary: 'gray' },
      },
      description: 'What background color to use like',
    },
    rounded: { description: 'Adds rounded corners to the alert.' },
    dismiss: { description: 'Enables or disables the dismiss icon.' },
    withBorder: { description: 'Adds a border around the alert.' },
    withBorderAccent: { description: 'Adds a border accent to the alert.' },
    withBorderAccentPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'What is the border accent position color to use like',
      table: {
        type: { summary: 'left | right | top | bottom' },
        defaultValue: { summary: 'left' },
      },
    },
    children: {
      control: { disable: true },
    },
    icon: {
      control: { disable: true },
    },
    additionalContent: {
      control: { disable: true },
    },
    onDismiss: {
      control: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

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
export const RoundedAlert: Story = {
  args: {
    ...DefaultAlert.args,
    rounded: true,
  },
}
export const AlertWithBorder: Story = {
  args: {
    ...DefaultAlert.args,
    rounded: true,
    withBorder: true,
  },
}
export const AlertWithAccentBorder: Story = {
  args: {
    ...DefaultAlert.args,
    withBorderAccent: true,
  },
}

export const InfoAlert: Story = {
  args: {
    ...DefaultAlert.args,
  },
}
export const GrayAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'gray',
    icon: <Info size={24} color="gray" />,
  },
}
export const ErrorAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'error',
    icon: <XCircle size={24} color="#E92215" />,
  },
}
export const SuccessAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'success',
    icon: <CheckCircle size={24} color="#0A9952" />,
  },
}
export const WarningAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'warning',
    icon: <WarningCircle size={24} color="#D8A800" />,
  },
}
