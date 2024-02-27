'use client'
import {
  ArchiveTray,
  Chat,
  Gear,
  List,
  MagnifyingGlass,
  ShoppingCart,
  SignIn,
  SquaresFour,
  Users,
} from 'phosphor-react'
import { Avatar, Button, Divider, Icon, Input, Sidebar, Typography } from '../../../../src'

const DefaultSidebar = () => {
  return (
    <div className="p-2">
      <Sidebar className="max-w-max">
        <Sidebar.Header className="space-y-2.5">
          <div className="flex items-center justify-between">
            <Typography variant="heading-5" className="font-bold text-primary-500">
              Keep
            </Typography>
            <Button variant="outline" shape="icon" color="primary" className="border-none">
              <List size={24} />
            </Button>
          </div>
          <div>
            <fieldset className="relative max-w-md">
              <Input placeholder="Search here" className="ps-11" />
              <Icon>
                <MagnifyingGlass size={18} color="#AFBACA" />
              </Icon>
            </fieldset>
          </div>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Item>
            <SquaresFour size={24} />
            Profile
          </Sidebar.Item>
          <Sidebar.Item>
            <ShoppingCart size={24} />
            Products
          </Sidebar.Item>
          <Sidebar.Item>
            <ArchiveTray size={24} />
            Download
          </Sidebar.Item>
          <Sidebar.Item>
            <Chat size={24} />
            Message
          </Sidebar.Item>
          <Sidebar.Item>
            <Gear size={24} />
            Settings
          </Sidebar.Item>
          <Sidebar.Item>
            <Users size={24} />
            Users
          </Sidebar.Item>
          <Sidebar.Item>
            <SignIn size={24} />
            Log Out
          </Sidebar.Item>
        </Sidebar.Body>
        <Divider className="my-3" />
        <Sidebar.Footer className="flex items-center gap-2">
          <div>
            <Avatar shape="circle" img="/images/avatar/avatar-3.png" />
          </div>
          <div>
            <Typography variant="p" className="mb-0 text-body-3 font-medium text-metal-600">
              Md Ariful Islam
            </Typography>
            <Typography variant="p" className="text-body-4 font-normal text-metal-400">
              Web Developer
            </Typography>
          </div>
        </Sidebar.Footer>
      </Sidebar>
    </div>
  )
}

const DefaultSidebarCode = `
'use client'
import {
  ArchiveTray,
  Chat,
  Gear,
  List,
  MagnifyingGlass,
  ShoppingCart,
  SignIn,
  SquaresFour,
  Users,
} from 'phosphor-react'
import { Avatar, Button, Divider, Icon, Input, Sidebar, Typography } from 'keep-react'

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <Sidebar.Header className="space-y-2.5">
        <div className="flex items-center justify-between">
          <Typography variant="heading-5" className="font-bold text-primary-500">
            Keep
          </Typography>
          <Button variant="outline" shape="icon" color="primary" className="border-none">
            <List size={24} />
          </Button>
        </div>
        <div>
          <fieldset className="relative max-w-md">
            <Input placeholder="Search here" className="ps-11" />
            <Icon>
              <MagnifyingGlass size={18} color="#AFBACA" />
            </Icon>
          </fieldset>
        </div>
      </Sidebar.Header>
      <Sidebar.Body>
        <Sidebar.Item>
          <SquaresFour size={24} />
          Profile
        </Sidebar.Item>
        <Sidebar.Item>
          <ShoppingCart size={24} />
          Products
        </Sidebar.Item>
        <Sidebar.Item>
          <ArchiveTray size={24} />
          Download
        </Sidebar.Item>
        <Sidebar.Item>
          <Chat size={24} />
          Message
        </Sidebar.Item>
        <Sidebar.Item>
          <Gear size={24} />
          Settings
        </Sidebar.Item>
        <Sidebar.Item>
          <Users size={24} />
          Users
        </Sidebar.Item>
        <Sidebar.Item>
          <SignIn size={24} />
          Log Out
        </Sidebar.Item>
      </Sidebar.Body>
      <Divider className="my-3" />
      <Sidebar.Footer className="flex items-center gap-2">
        <div>
          <Avatar shape="circle" img="/images/avatar/avatar-3.png" />
        </div>
        <div>
          <Typography variant="p" className="mb-0 text-body-3 font-medium text-metal-600">
            Md Ariful Islam
          </Typography>
          <Typography variant="p" className="text-body-4 font-normal text-metal-400">
            Web Developer
          </Typography>
        </div>
      </Sidebar.Footer>
    </Sidebar>
  )
}
`

export { DefaultSidebar, DefaultSidebarCode }
