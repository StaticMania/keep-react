'use client'
import { FC, ReactNode, useState } from 'react'
import { cn } from '../../helpers/cn'
import { Content } from './Content'
import { TabsContext } from './Context'
import { Item } from './Item'
import { TabsList } from './TabsList'
import { tabsTheme } from './theme'

interface TabsProps {
  children?: ReactNode
  activeLabel?: string
  className?: string
  vertical?: boolean
}

Content.displayName = 'Tabs.Content'
Item.displayName = 'Tabs.Item'
TabsList.displayName = 'Tabs.List'

export const TabsComponent: FC<TabsProps> = ({ children, activeLabel, className, vertical = false }) => {
  const [activeItem, setActiveItem] = useState(activeLabel)
  const { root } = tabsTheme
  const handleActive = (item: string) => {
    setActiveItem(item)
  }
  return (
    <nav className={cn(vertical && root.vertical.on, className)}>
      <TabsContext.Provider value={{ handleActive, activeItem, vertical }}>{children}</TabsContext.Provider>
    </nav>
  )
}

export const Tabs = Object.assign(TabsComponent, {
  Content,
  Item,
  List: TabsList,
})
