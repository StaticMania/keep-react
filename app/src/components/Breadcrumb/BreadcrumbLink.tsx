'use client'
import { Slot } from '@radix-ui/react-slot'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={cn(
        'flex items-center gap-2 text-metal-400 transition-colors hover:text-metal-900 dark:text-metal-300 dark:hover:text-white',
        className,
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

export { BreadcrumbLink }
