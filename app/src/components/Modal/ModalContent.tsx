'use client'
import { Content, Portal } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { ModalOverlay } from './ModalOverlay'

const ModalContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, children, ...props }, ref) => (
    <Portal>
      <ModalOverlay />
      <Content
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 w-full max-w-[22rem] translate-x-[-50%] translate-y-[-50%] space-y-3 rounded-xl bg-white p-5 shadow-xLarge data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-50 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:bg-metal-900',
          className,
        )}
        {...props}>
        {children}
      </Content>
    </Portal>
  ),
)

ModalContent.displayName = Content.displayName

export { ModalContent }
