import type { Meta, StoryObj } from '@storybook/react'
import { Crown } from 'phosphor-react'
import { Badge } from '.'

/**
 * Meta information for the Badge component.
 */
const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Story />
      </div>
    ),
  ],
  /**
   * The arguments for the Badge component.
   * 
   * @property {object} argTypes - The arguments for the Badge component.
   * size - Size variant of the badge.
   * iconPosition - Position of the icon inside the badge.
   * color - Available Badge color.
   * colorType - Color type of the badge.
   * badgeType - Type of the badge ('default', 'outline', or 'text').
   * href - URL to navigate when the badge is clicked.
   * icon - Icon element to be displayed inside the badge.
   */
  argTypes: {
    size: {
      description: 'Size variant of the badge.',
      control: 'select',
      options: ['xs', 'sm'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    iconPosition: {
      description: 'Position of the icon inside the badge.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    color: {
      description: 'Available Badge color.',
      control: 'select',
      options: ['error', 'gray', 'info', 'success', 'warning'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    colorType: {
      description: 'Color type of the badge',
      control: 'select',
      options: ['light', 'strong'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'light' },
      },
    },
    badgeType: {
      description: "Type of the badge ('default', 'outline', or 'text').",
      control: 'select',
      options: ['default', 'outline', 'text'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    href: {
      description: 'URL to navigate when the badge is clicked.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    icon: {
      description: 'Icon element to be displayed inside the badge.',
      control: {
        disable: true,
      },
    },
    className: {
      description: 'Custom CSS class to be added to the badge',
    },
    dot: {
      description: 'Show a dot on the badge',
    },
    dotPosition: {
      description: 'Position of the dot inside the badge',
    },
    children: {
      description: 'Badge text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

/**
 * Default Badge story.
 * 
 * size - xs
 * colorType - light
 * color - info
 * children - Default Badge
 * icon - null
 */

export const DefaultBadge: Story = {
  args: {
    size: 'xs',
    colorType: 'light',
    color: 'info',
    children: 'Default Badge',
    icon: null,
  },
}

/**
 * Badge with left icon.
 * 
 * iconPosition - left  (default)
 */

export const BadgeWithLeftIcon: Story = {
  args: {
    size: 'xs',
    colorType: 'light',
    color: 'info',
    children: 'Icon Badge',
    icon: <Crown size={18} weight="light" />,
    iconPosition: 'left',
  },
}

/**
 * Badge with right icon.
 * 
 * iconPosition - right
 * size - sm
 */
export const BadgeWithRightIcon: Story = {
  args: {
    ...BadgeWithLeftIcon.args,
    size: 'sm',
    iconPosition: 'right',
  },
}
