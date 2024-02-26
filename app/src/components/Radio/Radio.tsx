'use client'
import { InputHTMLAttributes, forwardRef } from 'react'

import { cn } from '../../helpers/cn'
import { radioTheme } from './theme'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'circle' | 'rounded' | 'square'
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, type = 'radio', variant = 'rounded', ...props }, ref) => {
    return (
      <>
        <input ref={ref} {...props} type={type} className={cn(radioTheme.input)} />
        <button className={cn(radioTheme.button.base, radioTheme.button.variant[variant], className)}></button>
      </>
    )
  },
)

Radio.displayName = 'Radio'
