'use client'
import { Fallback } from '@radix-ui/react-avatar'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const AvatarFallback = forwardRef<ElementRef<typeof Fallback>, ComponentPropsWithoutRef<typeof Fallback>>(
  ({ className, ...props }, ref) => (
    <Fallback
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-metal-50 text-body-4 font-medium dark:bg-metal-800',
        className,
      )}
      {...props}
    />
  ),
)
AvatarFallback.displayName = Fallback.displayName

export { AvatarFallback }
