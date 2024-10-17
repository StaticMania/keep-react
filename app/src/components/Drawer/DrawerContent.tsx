'use client'
import { Close, Content, Portal } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useDrawerContext } from './Context'
import { DrawerOverlay } from './DrawerOverlay'

export interface DrawerPositionProps {
  base: string
  position: {
    left: string
    right: string
    top: string
    bottom: string
  }
}

export interface DrawerContentProps extends ComponentPropsWithoutRef<typeof Content> {
  position?: keyof DrawerPositionProps['position']
  closeIconStyle?: string
}

const contentPosition: DrawerPositionProps = {
  base: 'fixed z-50 gap-4 bg-white dark:bg-metal-900 p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300',
  position: {
    top: 'inset-x-0 top-0 border-b dark:border-b-metal-800 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top h-1/2 rounded-b-[10px]',
    bottom:
      'inset-x-0 bottom-0 h-1/2 border-t dark:border-t-metal-800 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom rounded-t-[10px]',
    left: 'inset-y-0 left-0 h-full border-r dark:border-r-metal-800 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left md:w-1/2 xl:w-1/4 w-full rounded-r-[10px]',
    right:
      'inset-y-0 right-0 h-full  border-l dark:border-l-metal-800 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right md:w-1/2 xl:w-1/4 w-full rounded-l-[10px]',
  },
}

const DrawerContent = forwardRef<ElementRef<typeof Content>, DrawerContentProps>(
  ({ className, children, position = 'bottom', closeIconStyle, ...props }, ref) => {
    const { showCloseIcon } = useDrawerContext()
    return (
      <Portal>
        <DrawerOverlay />
        <Content
          ref={ref}
          className={cn(contentPosition.base, contentPosition.position[position], className)}
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
DrawerContent.displayName = Content.displayName

export { DrawerContent }
