'use client'
import { Arrow } from '@radix-ui/react-tooltip'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const TooltipArrow = forwardRef<ElementRef<typeof Arrow>, ComponentPropsWithoutRef<typeof Arrow>>(
  ({ className, ...props }, ref) => (
    <Arrow ref={ref} className={cn('h-[8px] w-3 fill-primary-500', className)} {...props} />
  ),
)
TooltipArrow.displayName = Arrow.displayName

export { TooltipArrow }
