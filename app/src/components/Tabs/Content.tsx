'use client'
import { FC, ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useTabsContext } from './Context'
import { tabsTheme } from './theme'

export interface TabsContentProps extends HTMLAttributes<HTMLElement> {
  label: string
}

const Content: FC<TabsContentProps> = forwardRef(
  ({ children, label, className, ...props }: TabsContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { activeItem, vertical } = useTabsContext()
    const { content } = tabsTheme

    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          content.base,
          activeItem === label ? 'block' : 'hidden',
          vertical ? content.vertical.on : content.vertical.off,
          className,
        )}>
        {children}
      </div>
    )
  },
)

Content.displayName = 'Tabs.Content'

export { Content }
