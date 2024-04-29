'use client'
import { ArchiveTray, Chat, Gear, ShoppingCart, SignIn, SquaresFour, Users } from 'phosphor-react'
import { Sidebar, SidebarItem } from '../../../../src'

const SidebarWithIcon = () => {
  return (
    <div className="p-2">
      <Sidebar className="max-w-max p-4">
        <SidebarItem>
          <SquaresFour size={24} />
        </SidebarItem>
        <SidebarItem>
          <ShoppingCart size={24} />
        </SidebarItem>
        <SidebarItem>
          <ArchiveTray size={24} />
        </SidebarItem>
        <SidebarItem>
          <Chat size={24} />
        </SidebarItem>
        <SidebarItem>
          <Gear size={24} />
        </SidebarItem>
        <SidebarItem>
          <Users size={24} />
        </SidebarItem>
        <SidebarItem>
          <SignIn size={24} />
        </SidebarItem>
      </Sidebar>
    </div>
  )
}

const SidebarWithIconCode = `
'use client'
import { ArchiveTray, Chat, Gear, ShoppingCart, SignIn, SquaresFour, Users } from 'phosphor-react'
import { Sidebar, SidebarItem } from 'keep-react'

export const SidebarComponent = () => {
  return (
    <Sidebar className="max-w-max p-4">
      <SidebarItem>
        <SquaresFour size={24} />
      </SidebarItem>
      <SidebarItem>
        <ShoppingCart size={24} />
      </SidebarItem>
      <SidebarItem>
        <ArchiveTray size={24} />
      </SidebarItem>
      <SidebarItem>
        <Chat size={24} />
      </SidebarItem>
      <SidebarItem>
        <Gear size={24} />
      </SidebarItem>
      <SidebarItem>
        <Users size={24} />
      </SidebarItem>
      <SidebarItem>
        <SignIn size={24} />
      </SidebarItem>
    </Sidebar>
  )
}

`

export { SidebarWithIcon, SidebarWithIconCode }
