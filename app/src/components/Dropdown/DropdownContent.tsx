'use client'
import { Content, Portal } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DropdownContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, sideOffset = 4, children, ...props }, ref) => (
    <Portal>
      <Content
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-[16rem] rounded-xl bg-white p-5 shadow-large outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-metal-900',
          className,
        )}
        {...props}>
        {children}
      </Content>
    </Portal>
  ),
)
DropdownContent.displayName = Content.displayName

export { DropdownContent }

export type DropdownContentProps = ComponentPropsWithoutRef<typeof DropdownContent>
