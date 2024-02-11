'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTabsContext } from './Context'
import { tabsTheme } from './theme'

export interface TabsContentProps {
  children?: ReactNode
  label: string
  className?: string
}

export const Content: FC<TabsContentProps> = ({ children, label, className }) => {
  const { activeItem, vertical } = useTabsContext()
  const { content } = tabsTheme
  return (
    <div
      className={cn(
        content.base,
        activeItem === label ? 'block' : 'hidden',
        vertical ? content.vertical.on : content.vertical.off,
        className,
      )}>
      {children}
    </div>
  )
}
