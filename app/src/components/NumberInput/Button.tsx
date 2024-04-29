'use client'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const NumberInputButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn('flex h-9 w-9 items-center justify-center rounded hover:bg-metal-25', className)}>
        {children}
      </button>
    )
  },
)

NumberInputButton.displayName = 'NumberInput.Button'
