'use client'
import { ScrollDownButton, ScrollUpButton } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

// SelectScrollDownButton
const SelectScrollDownButton = forwardRef<
  ElementRef<typeof ScrollDownButton>,
  ComponentPropsWithoutRef<typeof ScrollDownButton>
>(({ className, ...props }, ref) => (
  <ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-metal-900 dark:fill-white" viewBox="0 0 256 256">
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
  </ScrollDownButton>
))

SelectScrollDownButton.displayName = ScrollDownButton.displayName

// SelectScrollUpButton
const SelectScrollUpButton = forwardRef<
  ElementRef<typeof ScrollUpButton>,
  ComponentPropsWithoutRef<typeof ScrollUpButton>
>(({ className, ...props }, ref) => (
  <ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-metal-900 dark:fill-white" viewBox="0 0 256 256">
      <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
    </svg>
  </ScrollUpButton>
))

SelectScrollUpButton.displayName = ScrollUpButton.displayName

export { SelectScrollDownButton, SelectScrollUpButton }
