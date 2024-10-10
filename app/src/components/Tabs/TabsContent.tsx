'use client'
import { Content } from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const TabsContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, ...props }, ref) => (
    <Content ref={ref} className={cn('mt-2 focus-visible:outline-none', className)} {...props} />
  ),
)
TabsContent.displayName = Content.displayName

export { TabsContent }
