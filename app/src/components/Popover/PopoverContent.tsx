'use client'
import { Content, Portal } from '@radix-ui/react-popover'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const PopoverContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, align = 'center', sideOffset = 10, ...props }, ref) => (
    <Portal>
      <Content
        ref={ref}
        align={align}
        sticky="partial"
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-full max-w-sm rounded-xl border border-metal-100 bg-white text-metal-600 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-metal-800 dark:bg-metal-900',
          className,
        )}
        {...props}
      />
    </Portal>
  ),
)

PopoverContent.displayName = Content.displayName

export { PopoverContent }
