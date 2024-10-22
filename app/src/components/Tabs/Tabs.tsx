'use client'
import { Root, TabsProps } from '@radix-ui/react-tabs'
import { FC } from 'react'
import { TabsContext } from './TabsContext'

interface ITabsProps extends TabsProps {
  variant?: 'default' | 'underline'
}

const Tabs: FC<ITabsProps> = ({ variant = 'default', children, className, ...props }) => {
  return (
    <Root className={className} {...props}>
      <TabsContext.Provider value={{ variant }}>{children}</TabsContext.Provider>
    </Root>
  )
}

export { Tabs }
