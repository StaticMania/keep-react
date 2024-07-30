'use client'
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useTabContext } from './Context'

export interface TabListProps extends HTMLAttributes<HTMLElement> {}

const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    const { vertical, itemType } = useTabContext()
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'flex gap-5',
          vertical ? 'flex-col' : 'flex-row items-center',
          itemType === 'link' && 'max-w-2xl border-b border-metal-100 dark:border-metal-900',
          className,
        )}>
        {children}
      </div>
    )
  },
)

TabList.displayName = 'TabList'

export { TabList }
