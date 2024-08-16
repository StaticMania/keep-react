'use client'
import { forwardRef, HTMLAttributes, useState } from 'react'
import { cn } from '../../utils/cn'
import { TabContext } from './TabContext'

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultActive?: string
  variant?: 'default' | 'fill' | 'underline'
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, defaultActive = '', variant = 'default', className, ...props }, ref) => {
    const [activeItem, setActiveItem] = useState<string>(defaultActive)

    const handleActive = (item: string) => {
      setActiveItem(item)
    }

    return (
      <div ref={ref} {...props} className={cn(className)}>
        <TabContext.Provider value={{ activeItem, handleActive, defaultActive, variant }}>
          {children}
        </TabContext.Provider>
      </div>
    )
  },
)

Tabs.displayName = 'Tabs'

export { Tabs }
