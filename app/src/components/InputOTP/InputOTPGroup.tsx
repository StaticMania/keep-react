'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const InputOTPGroup = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center gap-2.5', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

export { InputOTPGroup }
