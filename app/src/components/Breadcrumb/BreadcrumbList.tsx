'use client'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const BreadcrumbList = forwardRef<HTMLOListElement, ComponentPropsWithoutRef<'ol'>>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn('flex flex-wrap items-center gap-1.5 break-words text-body-4 sm:gap-2.5', className)}
    {...props}
  />
))
BreadcrumbList.displayName = 'BreadcrumbList'

export { BreadcrumbList }
