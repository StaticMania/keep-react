'use client'
import { Label } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const SelectLabel = forwardRef<ElementRef<typeof Label>, ComponentPropsWithoutRef<typeof Label>>(
  ({ className, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn('p-2.5 text-body-4 font-medium text-metal-900 dark:text-white', className)}
      {...props}
    />
  ),
)
SelectLabel.displayName = Label.displayName

export { SelectLabel }
