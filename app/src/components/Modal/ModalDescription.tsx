'use client'
import { Description } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const ModalDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
  ({ className, ...props }, ref) => (
    <Description
      ref={ref}
      className={cn('text-body-5 font-normal text-metal-600 lg:text-body-4 dark:text-metal-300', className)}
      {...props}
    />
  ),
)
ModalDescription.displayName = Description.displayName

export { ModalDescription }
