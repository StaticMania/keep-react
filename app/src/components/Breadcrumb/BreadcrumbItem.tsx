'use client'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const BreadcrumbItem = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<'li'>>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

export { BreadcrumbItem }
