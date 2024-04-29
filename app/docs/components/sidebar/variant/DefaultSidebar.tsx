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
import {
  Avatar,
  Button,
  Divider,
  Input,
  InputIcon,
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
} from '../../../../src'

const DefaultSidebar = () => {
  return (
    <div className="p-2">
      <Sidebar className="max-w-max">
        <SidebarHeader className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-primary-500">Keep</h5>
            <Button variant="outline" shape="icon" color="primary" className="border-none">
              <List size={24} />
            </Button>
          </div>
          <div>
            <fieldset className="relative max-w-md">
              <Input placeholder="Search here" className="ps-11" />
              <InputIcon>
                <MagnifyingGlass size={18} color="#AFBACA" />
              </InputIcon>
            </fieldset>
          </div>
        </SidebarHeader>
        <SidebarBody>
          <SidebarItem>
            <SquaresFour size={24} />
            Profile
          </SidebarItem>
          <SidebarItem>
            <ShoppingCart size={24} />
            Products
          </SidebarItem>
          <SidebarItem>
            <ArchiveTray size={24} />
            Download
          </SidebarItem>
          <SidebarItem>
            <Chat size={24} />
            Message
          </SidebarItem>
          <SidebarItem>
            <Gear size={24} />
            Settings
          </SidebarItem>
          <SidebarItem>
            <Users size={24} />
            Users
          </SidebarItem>
          <SidebarItem>
            <SignIn size={24} />
            Log Out
          </SidebarItem>
        </SidebarBody>
        <Divider className="my-3" />
        <SidebarFooter className="flex items-center gap-2">
          <div>
            <Avatar shape="circle" img="/images/avatar/avatar-3.png" />
          </div>
          <div>
            <p className="mb-0 text-body-3 font-medium text-metal-600">Md Ariful Islam</p>
            <p className="text-body-4 font-normal text-metal-400">Web Developer</p>
          </div>
        </SidebarFooter>
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

import {
  Avatar,
  Button,
  Divider,
  InputIcon,
  Input,
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
} from from 'keep-react'

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <SidebarHeader className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-primary-500">
            Keep
          </h5>
          <Button variant="outline" shape="icon" color="primary" className="border-none">
            <List size={24} />
          </Button>
        </div>
        <div>
          <fieldset className="relative max-w-md">
            <Input placeholder="Search here" className="ps-11" />
            <InputIcon>
              <MagnifyingGlass size={18} color="#AFBACA" />
            </InputIcon>
          </fieldset>
        </div>
      </SidebarHeader>
      <SidebarBody>
        <SidebarItem>
          <SquaresFour size={24} />
          Profile
        </SidebarItem>
        <SidebarItem>
          <ShoppingCart size={24} />
          Products
        </SidebarItem>
        <SidebarItem>
          <ArchiveTray size={24} />
          Download
        </SidebarItem>
        <SidebarItem>
          <Chat size={24} />
          Message
        </SidebarItem>
        <SidebarItem>
          <Gear size={24} />
          Settings
        </SidebarItem>
        <SidebarItem>
          <Users size={24} />
          Users
        </SidebarItem>
        <SidebarItem>
          <SignIn size={24} />
          Log Out
        </SidebarItem>
      </SidebarBody>
      <Divider className="my-3" />
      <SidebarFooter className="flex items-center gap-2">
        <div>
          <Avatar shape="circle" img="/images/avatar/avatar-3.png" />
        </div>
        <div>
          <p className="mb-0 text-body-3 font-medium text-metal-600">Md Ariful Islam</p>
          <p className="text-body-4 font-normal text-metal-400">Web Developer</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
`

export { DefaultSidebar, DefaultSidebarCode }
