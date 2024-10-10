'use client'
import { Item } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DropdownItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'focus:bg-accent mb-1 flex cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800 dark:focus:bg-metal-800',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
DropdownItem.displayName = Item.displayName

export { DropdownItem }

export type DropdownItemProps = ComponentPropsWithoutRef<typeof DropdownItem>
