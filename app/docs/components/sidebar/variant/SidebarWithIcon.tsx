'use client'
import { ArchiveTray, Chat, Gear, ShoppingCart, SignIn, SquaresFour, Users } from 'phosphor-react'
import { Sidebar } from '../../../../src'

const SidebarWithIcon = () => {
  return (
    <div className="p-2">
      <Sidebar className="max-w-max p-4">
        <Sidebar.Item>
          <SquaresFour size={24} />
        </Sidebar.Item>
        <Sidebar.Item>
          <ShoppingCart size={24} />
        </Sidebar.Item>
        <Sidebar.Item>
          <ArchiveTray size={24} />
        </Sidebar.Item>
        <Sidebar.Item>
          <Chat size={24} />
        </Sidebar.Item>
        <Sidebar.Item>
          <Gear size={24} />
        </Sidebar.Item>
        <Sidebar.Item>
          <Users size={24} />
        </Sidebar.Item>
        <Sidebar.Item>
          <SignIn size={24} />
        </Sidebar.Item>
      </Sidebar>
    </div>
  )
}

const SidebarWithIconCode = `
'use client'
import { ArchiveTray, Chat, Gear, ShoppingCart, SignIn, SquaresFour, Users } from 'phosphor-react'
import { Sidebar } from 'keep-react'

export const SidebarComponent = () => {
  return (
    <Sidebar className="max-w-max p-4">
      <Sidebar.Item>
        <SquaresFour size={24} />
      </Sidebar.Item>
      <Sidebar.Item>
        <ShoppingCart size={24} />
      </Sidebar.Item>
      <Sidebar.Item>
        <ArchiveTray size={24} />
      </Sidebar.Item>
      <Sidebar.Item>
        <Chat size={24} />
      </Sidebar.Item>
      <Sidebar.Item>
        <Gear size={24} />
      </Sidebar.Item>
      <Sidebar.Item>
        <Users size={24} />
      </Sidebar.Item>
      <Sidebar.Item>
        <SignIn size={24} />
      </Sidebar.Item>
    </Sidebar>
  )
}

`

export { SidebarWithIcon, SidebarWithIconCode }
