'use client'
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useTabContext } from './Context'

export interface TabsContentProps extends HTMLAttributes<HTMLElement> {
  value: string
}

const TabContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, value = '1', className, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    const { activeItem, vertical } = useTabContext()
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'max-w-xl space-y-4',
          activeItem === value ? 'block' : 'hidden',
          vertical ? 'mt-0' : 'mt-5',
          className,
        )}>
        {children}
      </div>
    )
  },
)

TabContent.displayName = 'TabContent'

export { TabContent }
