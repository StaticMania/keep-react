'use client'
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { inputTheme } from './theme'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', placeholder, ...props }, ref) => {
    return (
      <input ref={ref} {...props} type={type} placeholder={placeholder} className={cn(inputTheme.input, className)} />
    )
  },
)

Input.displayName = 'Input'
