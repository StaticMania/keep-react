'use client'
import { Close, Content, Portal } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useModalContext } from './Context'
import { ModalOverlay } from './ModalOverlay'

export interface ModalContentProps extends ComponentPropsWithoutRef<typeof Content> {
  closeIconStyle?: string
}

const ModalContent = forwardRef<ElementRef<typeof Content>, ModalContentProps>(
  ({ className, children, closeIconStyle, ...props }, ref) => {
    const { showCloseIcon } = useModalContext()
    return (
      <Portal>
        <ModalOverlay />
        <Content
          ref={ref}
          className={cn(
            'fixed left-[50%] top-[50%] z-50 w-full max-w-[24rem] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-5 shadow-xLarge data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-50 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:bg-metal-900',
            className,
          )}
          {...props}>
          {children}
          <Close
            className={cn(
              'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-metal-50 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white dark:fill-white dark:ring-offset-metal-900 dark:focus:ring-metal-800',
              !showCloseIcon && 'hidden',
              closeIconStyle,
            )}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
            <span className="sr-only">Close</span>
          </Close>
        </Content>
      </Portal>
    )
  },
)

ModalContent.displayName = Content.displayName

export { ModalContent }
