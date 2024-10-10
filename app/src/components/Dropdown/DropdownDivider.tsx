'use client'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DropdownDivider = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
  ({ className, ...props }, ref) => (
    <Separator ref={ref} className={cn('my-1 h-px bg-metal-100 dark:bg-metal-700', className)} {...props} />
  ),
)
DropdownDivider.displayName = 'DropdownDivider'

export { DropdownDivider }

export type DropdownDividerProps = ComponentPropsWithoutRef<typeof DropdownDivider>
