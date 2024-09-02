'use client'
import { Close } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const ModalClose = forwardRef<ElementRef<typeof Close>, ComponentPropsWithoutRef<typeof Close>>(
  ({ className, ...props }, ref) => (
    <Close
      ref={ref}
      className={cn(
        'absolute right-4 top-4 cursor-pointer rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-metal-100 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white data-[state=open]:text-metal-600',
        className,
      )}
      {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 fill-metal-600 dark:fill-white" viewBox="0 0 256 256">
        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    </Close>
  ),
)
ModalClose.displayName = Close.displayName

export { ModalClose }
