'use client'
import { Icon, Trigger } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const SelectAction = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, children, ...props }, ref) => (
    <Trigger
      ref={ref}
      className={cn(
        'flex h-11 w-full items-center justify-between rounded-lg border bg-white px-3 py-2 text-body-4 font-normal text-metal-900 placeholder:font-normal placeholder:text-metal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-metal-800 dark:bg-metal-900 dark:text-white dark:placeholder:text-metal-300 dark:focus-visible:ring-metal-900',
        className,
      )}
      {...props}>
      {children}
      <Icon asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-metal-900  dark:fill-white"
          viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </Icon>
    </Trigger>
  ),
)
SelectAction.displayName = Trigger.displayName

export { SelectAction }
