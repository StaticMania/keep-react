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
      {/* {variant === 'checked' && (
          <svg
            width={12}
            height={12}
            className="fill-white opacity-0 peer-checked:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256">
            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
          </svg>
        )}
        {variant === 'dashed' && (
          <svg className="fill-white opacity-0 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 256 256">
            <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></path>
          </svg>
        )} */}
    </span>
  )
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }
