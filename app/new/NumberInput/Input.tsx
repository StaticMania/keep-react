'use client'
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const NumberInputEl = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      type="number"
      ref={ref}
      {...props}
      className={cn('h-full bg-white text-center text-body-2 font-medium text-metal-600 outline-none', className)}
    />
  )
})

NumberInputEl.displayName = 'NumberInput.Input'
