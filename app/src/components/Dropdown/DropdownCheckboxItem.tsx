'use client'
import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu'
import { Check } from 'phosphor-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DropdownCheckboxItem = forwardRef<ElementRef<typeof CheckboxItem>, ComponentPropsWithoutRef<typeof CheckboxItem>>(
  ({ className, children, checked, ...props }, ref) => (
    <CheckboxItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-lg py-2.5 pl-8 pr-2.5 text-body-4 font-medium text-metal-600 outline-none transition-colors focus:bg-metal-50 focus:text-metal-600 data-[disabled]:pointer-events-none data-[disabled]:opacity-50  dark:text-white dark:hover:bg-metal-800 dark:focus:bg-metal-800 dark:focus:text-white',
        className,
      )}
      checked={checked}
      {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <Check className="h-4 w-4" />
        </ItemIndicator>
      </span>
      {children}
    </CheckboxItem>
  ),
)
DropdownCheckboxItem.displayName = CheckboxItem.displayName

export { DropdownCheckboxItem }

export type DropdownCheckboxItemProps = ComponentPropsWithoutRef<typeof DropdownCheckboxItem>
