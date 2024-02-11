'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTabsContext } from './Context'
import { tabsTheme } from './theme'

export interface TabsItemProps {
  children?: ReactNode
  label: string
  className?: string
  disabled?: boolean
}

export const Item: FC<TabsItemProps> = ({ children, label, className, disabled = false }) => {
  const { item } = tabsTheme
  const { activeItem, handleActive, vertical } = useTabsContext()
  const active = activeItem === label
  return (
    <button
      disabled={disabled}
      className={cn(
        item.base,
        vertical ? item.vertical.on : item.vertical.off,
        active && item.active.base,
        active && (vertical ? item.active.vertical.on : item.active.vertical.off),
        className,
      )}
      onClick={() => handleActive && handleActive(label)}>
      {children}
    </button>
  )
}
