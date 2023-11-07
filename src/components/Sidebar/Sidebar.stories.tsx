import { Meta, StoryObj } from '@storybook/react'
import {
  ChartBar,
  Chat,
  Handbag,
  LockKey,
  LockSimple,
  ShoppingBagOpen,
  ShoppingCart,
  SignIn,
  SquaresFour,
  TreeStructure,
  UserPlus,
  Users,
} from 'phosphor-react'
import { Sidebar } from '.'
import { Badge } from '../Badge'
import { removeFragment } from '../../helpers/mergeDeep'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '',
  },

  argTypes: {
    children: {
      control: { disable: true },
      description: 'Children is sidebar item',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    theme: {
      control: { disable: true },
      description: 'Sidebar Theme',
      table: {
        type: { summary: 'Object' },
      },
    },
    collapseBehavior: {
      description: 'Sidebar show or not?',
      table: {
        type: { summary: 'collapse | hide' },
        defaultValue: { summary: 'collapse' },
      },
    },
    collapsed: {
      description: 'Sidebar collapse or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="max-w-xs shadow-lg">
          <Story />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const DefaultSidebar: Story = {
  args: {
    children: (
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item icon={<ShoppingCart size={24} />}>E-commerce</Sidebar.Item>
        <Sidebar.Item href="#" icon={<LockSimple size={24} />} label="pro" labelColor="gray">
          Components
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<Chat size={24} />} label="3">
          Inbox
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<Users size={24} />}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
          Products
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<SignIn size={24} />}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={<UserPlus size={24} />}>
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    ),
  },
}
export const SidebarWithDropdown: Story = {
  args: {
    children: (
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={<ShoppingCart size={24} />} label="E-commerce">
            <Sidebar.Item href="#" icon={<Handbag size={24} />}>
              Products
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={<Chat size={24} />}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<SignIn size={24} />}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<UserPlus size={24} />}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    ),
  },
}
export const SidebarWithLogoBranding: Story = {
  args: {
    children: removeFragment(
      <>
        <Sidebar.Logo href="" img="/images/keepLogo.svg" imgAlt="Keep logo" />
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Collapse icon={<ShoppingCart size={24} />} label="E-commerce">
              <Sidebar.Item href="#" icon={<Handbag size={24} />}>
                Products
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={<Chat size={24} />}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={<Users size={24} />}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={<SignIn size={24} />}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={<UserPlus size={24} />}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </>,
    ),
  },
}
export const SidebarWithContentSeparator: Story = {
  args: {
    children: (
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={<ShoppingCart size={24} />} label="E-commerce">
            <Sidebar.Item href="#" icon={<Handbag size={24} />}>
              Products
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={<Chat size={24} />}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
            Products
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<TreeStructure size={24} />}>
            Project Plan
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ChartBar size={24} />}>
            Our Progress
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<LockKey size={24} />}>
            Security
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    ),
  },
}
export const SidebarWithCTA: Story = {
  args: {
    children: (
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={<ShoppingCart size={24} />} label="E-commerce">
            <Sidebar.Item href="#" icon={<Handbag size={24} />}>
              Products
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={<Chat size={24} />}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<TreeStructure size={24} />}>
            Project Plan
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<ChartBar size={24} />}>
            Our Progress
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<LockKey size={24} />}>
            Security
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.CTA>
          <div className="mb-3 flex items-center">
            <Badge color="warning">Beta</Badge>
            <button
              aria-label="Close"
              className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-blue-50 p-1 text-blue-900 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
              type="button">
              <svg
                aria-hidden={true}
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
            Preview the new keep design dashboard navigation! You can turn the new navigation off for a limited time in
            your profile.
          </p>
          <a
            className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="#">
            Turn new navigation off
          </a>
        </Sidebar.CTA>
      </Sidebar.Items>
    ),
  },
}
