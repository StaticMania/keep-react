'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useTabsContext } from './Context'
import { tabsTheme } from './theme'

export interface TabsListProps extends HTMLAttributes<HTMLElement> {}

const TabList = forwardRef<HTMLDivElement, TabsListProps>(({ children, className, ...props }, ref) => {
  const { vertical } = useTabsContext()
  const { tabList } = tabsTheme

  return (
    <div
      {...props}
      ref={ref}
      className={cn(tabList.base, vertical ? tabList.vertical.on : tabList.vertical.off, className)}>
      {children}
    </div>
  )
})

TabList.displayName = 'Tabs.List'

export { TabList }
