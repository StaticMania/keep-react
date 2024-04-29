'use client'
import { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useTabsContext } from './Context'
import { tabsTheme } from './theme'

export interface TabsItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  label: string
}

const TabItem = forwardRef<HTMLButtonElement, TabsItemProps>(
  ({ children, label, className, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    const { item } = tabsTheme
    const { activeItem, handleActive, vertical } = useTabsContext()
    const active = activeItem === label

    return (
      <button
        {...props}
        ref={ref}
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
  },
)

TabItem.displayName = 'Tabs.Item'

export { TabItem }
