'use client'
import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu'
import { Circle } from 'phosphor-react'
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
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  ),
)
DropdownRadioItem.displayName = RadioItem.displayName

export { DropdownRadioItem }

export type DropdownRadioItemProps = ComponentPropsWithoutRef<typeof DropdownRadioItem>
