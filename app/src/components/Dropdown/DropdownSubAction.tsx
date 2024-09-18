'use client'
import { SubTrigger } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DropdownSubAction = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      'mb-1 flex cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 text-sm font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800 dark:focus:bg-metal-800',
      inset && 'pl-8',
      className,
    )}
    {...props}>
    {children}
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-auto h-4 w-4" viewBox="0 0 256 256">
      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
    </svg>
  </SubTrigger>
))

DropdownSubAction.displayName = SubTrigger.displayName

export { DropdownSubAction }

export type DropdownSubActionProps = ComponentPropsWithoutRef<typeof DropdownSubAction>
