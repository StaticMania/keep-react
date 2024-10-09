'use client'
import { List } from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useTabsContext } from './TabsContext'

const TabsList = forwardRef<ElementRef<typeof List>, ComponentPropsWithoutRef<typeof List>>(
  ({ className, ...props }, ref) => {
    const { variant } = useTabsContext()
    return (
      <List
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          variant === 'underline' && 'border-y border-y-metal-100 dark:border-y-metal-800',
          className,
        )}
        {...props}
      />
    )
  },
)
TabsList.displayName = List.displayName

export { TabsList }
