'use client'
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useTabContext } from './TabContext'

export interface TabListProps extends HTMLAttributes<HTMLElement> {}

const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    const { vertical } = useTabContext()
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'mb-2 flex items-center border-b border-b-metal-100 dark:border-b-metal-700',
          vertical && 'flex-col rounded-xl border-b-0 bg-metal-25 p-4 dark:bg-metal-800',
          className,
        )}>
        {children}
      </div>
    )
  },
)

TabList.displayName = 'TabList'

export { TabList }
