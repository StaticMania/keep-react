'use client'
import { Portal, SubContent } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DropdownSubContent = forwardRef<ElementRef<typeof SubContent>, ComponentPropsWithoutRef<typeof SubContent>>(
  ({ className, ...props }, ref) => (
    <Portal>
      <SubContent
        ref={ref}
        className={cn(
          'z-50 w-[12rem] rounded-xl border border-metal-100 bg-white p-5 shadow-large outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-metal-800 dark:bg-metal-900',
          className,
        )}
        {...props}
      />
    </Portal>
  ),
)
DropdownSubContent.displayName = SubContent.displayName

export { DropdownSubContent }

export type DropdownSubContentProps = ComponentPropsWithoutRef<typeof DropdownSubContent>
