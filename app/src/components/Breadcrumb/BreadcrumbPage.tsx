'use client'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const BreadcrumbPage = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('flex items-center gap-2 font-normal text-metal-900 dark:text-white', className)}
    {...props}
  />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

export { BreadcrumbPage }
