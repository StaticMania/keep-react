'use client'
import { Content } from '@radix-ui/react-tooltip'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const TooltipContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, sideOffset = 10, ...props }, ref) => (
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 rounded-xl border border-primary-500 bg-primary-500 px-2.5 py-2 text-body-4 text-white shadow-md animate-in fade-in-0 zoom-in-90 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-primary-500 dark:bg-primary-500',
        className,
      )}
      {...props}
    />
  ),
)
TooltipContent.displayName = Content.displayName

export { TooltipContent }
