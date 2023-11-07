import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '.'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Switch Level Text',
      table: {
        type: { summary: 'String' },
        defaultValue: {
          summary: 'Toggle',
        },
      },
    },
    withIcon: {
      description: 'Switch With Level or Not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      description: 'Switch disabled or Not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false,
        },
      },
    },
    size: {
      description: 'Switch avaiable sizes?',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: {
          summary: 'md',
        },
      },
    },
    bgColor: {
      description: 'Switch avaiable background colors?',
      control: 'select',
      options: ['primary', 'slate'],
      table: {
        type: { summary: 'primary | slate' },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
  },

  parameters: {
    componentSubtitle: '',
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const DefaultToggle: Story = {
  args: {
    label: 'Toggle',
    size: 'md',
    bgColor: 'primary',
    withIcon: false,
    disabled: false,
  },
}
export const ToggleWithIcon: Story = {
  args: {
    ...DefaultToggle.args,
    withIcon: true,
  },
}
export const ToggleWithSlateBg: Story = {
  args: {
    ...DefaultToggle.args,
    bgColor: 'slate',
  },
}
export const SmallToggle: Story = {
  args: {
    ...DefaultToggle.args,
    size: 'sm',
  },
}

export const MediumToggle: Story = {
  args: {
    ...DefaultToggle.args,
    size: 'md',
  },
}
export const LargeToggle: Story = {
  args: {
    ...DefaultToggle.args,
    size: 'lg',
  },
}
