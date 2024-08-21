'use client'
import { Content, Portal, Viewport } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { SelectScrollDownButton, SelectScrollUpButton } from './SelectScrollButton'

const SelectContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <Portal>
      <Content
        ref={ref}
        className={cn(
          'relative z-50 max-h-96 overflow-hidden rounded-xl border bg-white p-4 text-metal-600 dark:border-metal-900 dark:bg-metal-900',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          'data-[state=open]:animate-fadeInUp',
          className,
        )}
        position={position}
        {...props}>
        <SelectScrollUpButton />
        <Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width)-32px)]',
          )}>
          {children}
        </Viewport>
        <SelectScrollDownButton />
      </Content>
    </Portal>
  ),
)
SelectContent.displayName = Content.displayName

export { SelectContent }
