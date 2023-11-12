import type { Meta, StoryObj } from '@storybook/react'
import { Gear, GridFour, Phone, User, WarningCircle } from 'phosphor-react'
import { Tabs } from '.'
import { removeFragment } from '../../helpers/mergeDeep'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { disable: true },
      description: 'Children is Tab item content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    style: {
      control: 'select',
      description: 'Available tab style',
      options: ['default', 'underline', 'pills', 'fullWidth'],
      table: {
        type: { summary: 'default | underline | pills | fullWidth' },
        defaultValue: { summary: 'default' },
      },
    },
    iconPosition: {
      control: 'select',
      description: 'Available tab icon position',
      options: ['right', 'left'],
      table: {
        type: { summary: 'right | left' },
        defaultValue: { summary: 'left' },
      },
    },
    borderPosition: {
      control: 'select',
      description: 'Available tab border position',
      options: ['top', 'bottom'],
      table: {
        type: { summary: 'top | bottom' },
        defaultValue: { summary: 'bottom' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const DefaultTab: Story = {
  args: {
    children: removeFragment(
      <>
        <Tabs.Item title="Profile">Profile content</Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled">
          Disabled content
        </Tabs.Item>
      </>,
    ),
  },
}
export const TabWithIconLeft: Story = {
  args: {
    children: removeFragment(
      <>
        <Tabs.Item title="Profile" icon={<User size={20} />}>
          Profile content
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={<GridFour size={20} />}>
          Dashboard content
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={<Gear size={20} />}>
          Settings content
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={<Phone size={20} />}>
          Contacts content
        </Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled" icon={<WarningCircle size={20} />}>
          Disabled content
        </Tabs.Item>
      </>,
    ),
  },
}
export const TabWithIconRight: Story = {
  args: {
    ...TabWithIconLeft.args,
    iconPosition: 'right',
  },
}
export const TabWithBorderTop: Story = {
  args: {
    ...TabWithIconLeft.args,
    borderPosition: 'top',
  },
}
export const TabWithButton: Story = {
  args: {
    ...DefaultTab.args,
    style: 'pills',
  },
}
