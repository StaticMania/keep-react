import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import { Heart, MagnifyingGlass, ShoppingCart, User } from 'phosphor-react'
import { Navbar } from '.'
import { Button } from '../Button/Button'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ['autodocs'],

  argTypes: {
    children: {
      description: 'Navbar Content',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    fluid: {
      description: 'Navbar container fluid or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    bordered: {
      description: 'Navbar bordered or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    rounded: {
      description: 'Navbar rounded or not?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    className: {
      description: 'Navbar custom className',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Navbar>

export const DefaultNavbar: Story = {
  args: {
    children: (
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Image src="/images/keep.svg" alt="keep" width="100" height="40" />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container tag="ul" className="hidden items-center justify-between gap-8 lg:flex">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="About" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-slate-600">Search</span>
          </Button>
          <Button size="sm" type="primary">
            Contact
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    ),
  },
}
export const NavbarWithCenterLogo: Story = {
  args: {
    fluid: true,
    children: (
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container tag="ul" className="hidden items-center justify-between gap-8 lg:flex">
          <Navbar.Link linkName="Home" />
          <Navbar.Link linkName="Projects" />
          <Navbar.Link linkName="Blogs" />
        </Navbar.Container>
        <Navbar.Brand>
          <Image src="/images/keep.svg" alt="keep" width="100" height="40" />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container tag="ul" className="hidden items-center justify-between gap-5 lg:flex">
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-slate-600">Search</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    ),
  },
}
export const NavbarEcommerceMenu: Story = {
  args: {
    fluid: true,
    children: (
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container tag="ul" className="hidden items-center justify-between gap-8 lg:flex">
          <Navbar.Link linkName="Category" />
          <Navbar.Link linkName="Best Sellers" />
        </Navbar.Container>
        <Navbar.Brand>
          <Image src="/images/keep.svg" alt="keep" width="100" height="40" />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container tag="ul" className="hidden items-center justify-between gap-5 lg:flex">
            <Navbar.Link icon={<MagnifyingGlass size={20} color="#444" />} iconAnimation={false} />
            <Navbar.Link icon={<User size={20} color="#444" />} iconAnimation={false} />
            <Navbar.Link icon={<Heart size={20} color="#444" />} iconAnimation={false} />
          </Navbar.Container>

          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="ml-1 text-slate-600">Cart $0.00</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    ),
  },
}
