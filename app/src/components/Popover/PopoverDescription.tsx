'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../utils/cn'

export const PopoverDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p {...props} ref={ref} className={cn('text-body-4 font-normal text-metal-600 dark:text-metal-300', className)} />
  ),
)
PopoverDescription.displayName = 'PopoverDescription'
