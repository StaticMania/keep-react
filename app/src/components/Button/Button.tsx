'use client'
import { ButtonHTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { ButtonColorVariant, ButtonSizeVariant, buttonVariants } from './theme'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof ButtonSizeVariant
  color?: keyof ButtonColorVariant
  variant?: 'link' | 'outline'
  shape?: 'circle' | 'icon'
  position?: 'start' | 'end' | 'center'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, size = 'md', color = 'primary', variant, shape, position, ...props },
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button {...props} ref={ref} className={cn(buttonVariants({ size, color, variant, shape, position }), className)}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button }
