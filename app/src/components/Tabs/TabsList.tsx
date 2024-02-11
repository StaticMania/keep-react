'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTabsContext } from './Context'
import { tabsTheme } from './theme'

export interface TabsListProps {
  children?: ReactNode
  className?: string
}

export const TabsList: FC<TabsListProps> = ({ children, className }) => {
  const { vertical } = useTabsContext()
  const { tabList } = tabsTheme
  return (
    <div className={cn(tabList.base, vertical ? tabList.vertical.on : tabList.vertical.off, className)}>{children}</div>
  )
}
