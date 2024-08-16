'use client'
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useTabContext } from './TabContext'

export interface TabListProps extends HTMLAttributes<HTMLElement> {}

const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    const { variant } = useTabContext()
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'mb-2 flex items-center',
          variant === 'underline' && 'border-y border-y-metal-100 dark:border-y-metal-800',
          className,
        )}>
        {children}
      </div>
    )
  },
)

TabList.displayName = 'TabList'

export { TabList }
