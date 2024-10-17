'use client'
import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DropdownRadioItem = forwardRef<ElementRef<typeof RadioItem>, ComponentPropsWithoutRef<typeof RadioItem>>(
  ({ className, children, ...props }, ref) => (
    <RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-lg py-2.5 pl-8 pr-2.5 text-body-4 font-medium outline-none transition-colors focus:bg-metal-50 focus:text-metal-600 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800 dark:focus:bg-metal-800 dark:focus:text-white',
        className,
      )}
      {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-metal-600 dark:text-white">
        <ItemIndicator>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path>
          </svg>
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  ),
)
DropdownRadioItem.displayName = RadioItem.displayName

export { DropdownRadioItem }

export type DropdownRadioItemProps = ComponentPropsWithoutRef<typeof DropdownRadioItem>
