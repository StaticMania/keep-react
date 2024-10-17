'use client'
import { Trigger } from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useTabsContext } from './TabsContext'

const TabsItem = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, ...props }, ref) => {
    const { variant } = useTabsContext()
    return (
      <Trigger
        ref={ref}
        className={cn(
          'inline-flex h-10 items-center justify-center gap-x-1.5 whitespace-nowrap px-5 text-body-4 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-100 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variant === 'default' &&
            'rounded-lg border data-[state=active]:border-metal-100 data-[state=inactive]:border-transparent dark:data-[state=active]:border-metal-800 dark:data-[state=inactive]:border-transparent dark:data-[state=active]:text-white dark:data-[state=inactive]:text-metal-300',
          variant === 'underline' &&
            '-mb-px rounded-none border-b data-[state=active]:border-b data-[state=inactive]:border-transparent data-[state=active]:border-b-primary-500 data-[state=active]:text-primary-500',
          className,
        )}
        {...props}
      />
    )
  },
)
TabsItem.displayName = Trigger.displayName

export { TabsItem }
