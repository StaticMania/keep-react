'use client'
import { Title } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const DrawerTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title ref={ref} className={cn('text-body-1 font-semibold text-metal-900', className)} {...props} />
  ),
)
DrawerTitle.displayName = Title.displayName

export { DrawerTitle }
