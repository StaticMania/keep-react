'use client'
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const NumberInputBox = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      type="number"
      ref={ref}
      {...props}
      className={cn(
        'h-full bg-white text-center text-body-2 font-medium text-metal-600 outline-none dark:bg-metal-900 dark:text-metal-300',
        className,
      )}
    />
  )
})

NumberInputBox.displayName = 'NumberInput.Input'
