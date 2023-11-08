import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { NumberInput } from './NumberInput'

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
    sizing: {
      description: 'Sets the size of the number input component.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    iconPosition: {
      description: 'Specifies the position of the icon within the number input.',
      control: 'select',
      options: ['right', 'left'],

      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' },
      },
    },
    disabled: {
      description: 'Disables interactions with the number input component.',
      control: 'boolean',
    },
    value: {
      description: 'Value of the number input field.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    icon: {
      description: 'Icon displayed within the number input component.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '' },
      },
    },
    setValue: {
      description: 'Setter function to update the value of the number input.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'function' },
      },
    },
    helperText: {
      description: 'Additional helper text or information related to the number input.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof NumberInput>

const NumberInputWithHooks = () => {
  const [value, setValue] = useState(0)
  return <NumberInput value={value} setValue={setValue} />
}

export const DefaultNumberInput: Story = {
  render: () => <NumberInputWithHooks />,
  args: {
    sizing: 'md',
  },
}
export const SmallNumberInput: Story = {
  render: () => <NumberInputWithHooks />,
  args: {
    sizing: 'sm',
  },
}
export const MediumNumberInput: Story = {
  render: () => <NumberInputWithHooks />,
  args: {
    sizing: 'md',
  },
}
export const LargeNumberInput: Story = {
  render: () => <NumberInputWithHooks />,
  args: {
    sizing: 'lg',
  },
}
