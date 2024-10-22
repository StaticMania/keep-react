'use client'
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { radioTheme } from './theme'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'circle' | 'rounded' | 'square'
  color?: keyof typeof radioTheme.button.color
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, color = 'primary', variant = 'rounded', ...props }, ref) => {
    return (
      <>
        <input ref={ref} {...props} type="radio" className={cn(radioTheme.input)} />
        <button
          className={cn(
            radioTheme.button.base,
            radioTheme.button.variant[variant],
            radioTheme.button.color[color],
            className,
          )}></button>
      </>
    )
  },
)

Radio.displayName = 'Radio'
