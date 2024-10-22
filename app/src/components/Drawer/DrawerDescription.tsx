'use client'
import { Description } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DrawerDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
  ({ className, ...props }, ref) => (
    <Description ref={ref} className={cn('text-body-4 text-metal-600 dark:text-metal-300', className)} {...props} />
  ),
)
DrawerDescription.displayName = Description.displayName

export { DrawerDescription }
