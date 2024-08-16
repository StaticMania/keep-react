'use client'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const NumberInputButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={cn('max-w-max flex-1', className)}>
        {children}
      </button>
    )
  },
)

NumberInputButton.displayName = 'NumberInputButton'
