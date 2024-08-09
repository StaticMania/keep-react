'use client'
import { forwardRef, HTMLAttributes, useState } from 'react'
import { cn } from '../../utils/cn'
import { TabContext } from './TabContext'

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultActive?: string
  vertical?: boolean
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, defaultActive = '', vertical = false, className, ...props }, ref) => {
    const [activeItem, setActiveItem] = useState<string>(defaultActive)

    const handleActive = (item: string) => {
      setActiveItem(item)
    }

    return (
      <div
        ref={ref}
        {...props}
        className={cn('rounded-xl bg-white p-6 dark:bg-metal-900', vertical && 'flex items-center gap-5', className)}>
        <TabContext.Provider value={{ activeItem, handleActive, defaultActive, vertical }}>
          {children}
        </TabContext.Provider>
      </div>
    )
  },
)

Tabs.displayName = 'Tabs'

export { Tabs }
