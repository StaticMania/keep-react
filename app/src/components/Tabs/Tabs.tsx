'use client'
import { FC, ForwardedRef, HTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '../../helpers/cn'
import { TabContent } from './Content'
import { TabsContext } from './Context'
import { TabItem } from './Item'
import { TabList } from './TabsList'
import { tabsTheme } from './theme'

interface TabsProps extends HTMLAttributes<HTMLElement> {
  activeLabel?: string
  vertical?: boolean
}

const TabsComponent: FC<TabsProps> = forwardRef(
  ({ children, activeLabel, className, vertical = false, ...props }, ref: ForwardedRef<HTMLElement>) => {
    const [activeItem, setActiveItem] = useState(activeLabel)
    const { root } = tabsTheme
    const handleActive = (item: string) => {
      setActiveItem(item)
    }

    return (
      <nav ref={ref} {...props} className={cn(vertical && root.vertical.on, className)}>
        <TabsContext.Provider value={{ handleActive, activeItem, vertical }}>{children}</TabsContext.Provider>
      </nav>
    )
  },
)

TabsComponent.displayName = 'Tabs'

export const Tabs = Object.assign(TabsComponent, {
  Content: TabContent,
  Item: TabItem,
  List: TabList,
})
