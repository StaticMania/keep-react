'use client'
import { Label } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DropdownLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn('px-2 py-1.5 text-body-3 font-semibold text-metal-900 dark:text-white', inset && 'pl-8', className)}
    {...props}
  />
))
DropdownLabel.displayName = Label.displayName

export { DropdownLabel }

export type DropdownLabelProps = ComponentPropsWithoutRef<typeof DropdownLabel>
