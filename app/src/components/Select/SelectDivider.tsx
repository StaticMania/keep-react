'use client'
import { Separator } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const SelectDivider = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
  ({ className, ...props }, ref) => (
    <Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-metal-100 dark:bg-metal-800', className)} {...props} />
  ),
)
SelectDivider.displayName = Separator.displayName

export { SelectDivider }
