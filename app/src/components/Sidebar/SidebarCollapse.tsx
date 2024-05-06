'use client'
import { DetailsHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const SidebarCollapse = forwardRef<HTMLDetailsElement, DetailsHTMLAttributes<HTMLDetailsElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <summary
        {...props}
        ref={ref}
        className={cn(
          'flex cursor-pointer items-center justify-between rounded-md p-2.5 text-body-4 font-normal text-metal-400 transition-all duration-200 hover:bg-primary-50 hover:text-primary-500',
          className,
        )}>
        {children}
      </summary>
    )
  },
)

SidebarCollapse.displayName = 'SidebarCollapse'

export { SidebarCollapse }
