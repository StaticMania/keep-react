'use client'
import { ForwardedRef, HTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { TabContext } from './Context'

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  activeLabel?: string
  vertical?: boolean
  itemType?: 'button' | 'link'
}

const Tab = forwardRef<HTMLDivElement, TabsProps>(
  (
    { children, activeLabel = '1', className, vertical = false, itemType = 'button', ...props },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [activeItem, setActiveItem] = useState<string>(activeLabel)

    const handleActive = (item: string) => {
      setActiveItem(item)
    }

    return (
      <div ref={ref} {...props} className={cn(vertical && 'flex items-center gap-5', className)}>
        <TabContext.Provider value={{ handleActive, activeItem, vertical, itemType }}>{children}</TabContext.Provider>
      </div>
    )
  },
)

Tab.displayName = 'Tab'

export { Tab }
