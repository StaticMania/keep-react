'use client'
import { OTPInput } from 'input-otp'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const InputOTP = forwardRef<ElementRef<typeof OTPInput>, ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, pattern, ...props }, ref) => (
    <OTPInput
      pattern={pattern}
      ref={ref}
      containerClassName={cn('flex items-center gap-2.5 has-[:disabled]:opacity-50', containerClassName)}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  ),
)
InputOTP.displayName = 'InputOTP'

export { InputOTP }
