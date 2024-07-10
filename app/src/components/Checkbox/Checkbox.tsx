'use client'
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { checkboxTheme } from './theme'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'circle' | 'rounded' | 'checked' | 'dashed'
}

const Checkbox = forwardRef<HTMLInputElement, InputProps>(({ className, variant = 'checked', ...props }, ref) => {
  let btnClass = cn(checkboxTheme.button.base, className)
  if (variant === 'rounded' || variant === 'circle') {
    btnClass = cn(checkboxTheme.button.shape.base, checkboxTheme.button.shape[variant], className)
  }
  if (variant === 'dashed' || variant === 'checked') {
    btnClass = cn(checkboxTheme.button.base, checkboxTheme.button.shape[variant], className)
  }

  return (
    <span>
      <input ref={ref} {...props} type="checkbox" className={cn(checkboxTheme.input.base)} />
      <button className={btnClass}></button>
    </span>
  )
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }
