import type { Meta, StoryObj } from '@storybook/react'
import { Play } from 'phosphor-react'
import { PlayButton } from '.'

const meta: Meta<typeof PlayButton> = {
  component: PlayButton,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Button text',
      table: {
        variant: { summary: 'string' },
        defaultValue: { summary: 'Play Video' },
      },
    },
    size: {
      description: 'Avaiale button size',
      table: {
        defaultValue: { summary: 'md' },
      },
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      description: 'Avaiale button type',
      table: {
        defaultValue: { summary: 'primary' },
      },
      control: 'select',
      options: ['primary', 'text', 'outlineGray', 'blur'],
    },
    icon: {
      description: 'Play icon',
      control: { variant: null },
    },
    circle: {
      description: 'Play button circle or not?',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    className: {
      description: 'Play button custom className',
      control: 'text',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PlayButton>

export const DefaultPlayButton: Story = {
  args: {
    title: 'Play Video',
    variant: 'primary',
    size: 'md',
    icon: <Play size="24" />,
  },
}

export const SecondaryPlayButton: Story = {
  args: {
    ...DefaultPlayButton.args,
    variant: 'outlineGray',
  },
}
export const NoBorderPlayButton: Story = {
  args: {
    ...DefaultPlayButton.args,
    variant: 'text',
  },
}
export const CirclePlayButton: Story = {
  args: {
    size: 'xl',
    variant: 'primary',
    circle: true,
    icon: <Play size="24" />,
  },
}
export const CirclePlayButtonWithGradient: Story = {
  args: {
    ...CirclePlayButton.args,
    variant: 'blur',
    className: 'bg-gradient-to-r from-primary-500',
  },
}
