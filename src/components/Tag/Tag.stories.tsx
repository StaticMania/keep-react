import type { Meta, StoryObj } from '@storybook/react'
import { CrownSimple, X } from 'phosphor-react'
import { Tag } from '.'

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['error', 'gray', 'info', 'success', 'warning', 'teal', 'purple'],
      table: {
        type: {
          summary: 'error | gray | info | success | warning | teal | purple',
        },
        defaultValue: { summary: 'gray' },
      },
      description: 'Availabe Tag colors',
    },
    borderType: {
      table: {
        type: { summary: 'solid | dashed' },
        defaultValue: { summary: 'solid' },
      },
      description: 'Availabe Tag border type',
    },
    dismiss: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: 'Tag show or not?',
    },
    children: {
      control: {
        disable: true,
      },
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'Tag Text with JSX',
    },
    leftIcon: {
      control: {
        disable: true,
      },
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'Tag Left side icon',
    },
    dismissIcon: {
      control: {
        disable: true,
      },
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'Tag dismiss icon',
    },
    onDismiss: {
      control: {
        disable: true,
      },
      table: {
        type: { summary: 'Function' },
      },
      description: 'Tag Handler',
    },
  },
  decorators: [
    (Story) => (
      <div className="inline-block">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tag>

export const DefaultTag: Story = {
  args: {
    color: 'gray',
    disabled: false,
    borderType: 'solid',
    dismiss: false,
    leftIcon: null,
    dismissIcon: null,
    children: 'Default Tag',
  },
}

export const ErrorTag: Story = {
  args: {
    ...DefaultTag.args,
    color: 'error',
    children: 'Error Tag',
  },
}
export const InfoTag: Story = {
  args: {
    ...DefaultTag.args,
    color: 'info',
    children: 'Info Tag',
  },
}
export const WarningTag: Story = {
  args: {
    ...DefaultTag.args,
    color: 'warning',
    children: 'Warning Tag',
  },
}
export const SuccessTag: Story = {
  args: {
    ...DefaultTag.args,
    color: 'success',
    children: 'Success Tag',
  },
}
export const TealTag: Story = {
  args: {
    ...DefaultTag.args,
    color: 'teal',
    children: 'Teal Tag',
  },
}
export const PurpleTag: Story = {
  args: {
    ...DefaultTag.args,
    color: 'purple',
    children: 'Purple Tag',
  },
}
export const DashedTag: Story = {
  args: {
    ...DefaultTag.args,
    color: 'gray',
    borderType: 'dashed',
    children: 'Dashed Border',
  },
}
export const TagWithLeftSideIcon: Story = {
  args: {
    ...DefaultTag.args,
    color: 'gray',
    leftIcon: <CrownSimple size={20} color="#5E718D" />,
  },
}
export const TagWithBothSideIcon: Story = {
  args: {
    ...DefaultTag.args,
    color: 'gray',
    leftIcon: <CrownSimple size={20} color="#5E718D" />,
    dismissIcon: <X color="#5E718D" size={20} />,
  },
}
export const TagWithDashedBorder: Story = {
  args: {
    ...DefaultTag.args,
    color: 'gray',
    leftIcon: <CrownSimple size={20} color="#5E718D" />,
    dismissIcon: <X size={20} color="#5E718D" />,
    borderType: 'dashed',
  },
}
