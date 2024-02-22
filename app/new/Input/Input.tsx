'use client'
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        type={type}
        placeholder={placeholder}
        className={cn(
          'flex h-11 w-full rounded-lg border px-3 py-2 text-body-4 font-normal text-metal-900 placeholder:font-normal placeholder:text-metal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
      />
    )
  },
)

Input.displayName = 'Input'
