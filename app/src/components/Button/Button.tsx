'use client'
import { ButtonHTMLAttributes, Ref, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../utils/cn'
import { ButtonColorVariant, ButtonSizeVariant, buttonVariants } from './theme'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof ButtonSizeVariant
  color?: keyof ButtonColorVariant
  variant?: 'link' | 'outline' | 'softBg' | 'default'
  shape?: 'circle' | 'icon'
  position?: 'start' | 'end' | 'center'
  asChild?: boolean
  radius?: 'default' | 'full'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      size = 'md',
      color = 'primary',
      variant = 'default',
      radius = 'default',
      shape,
      asChild,
      position,
      ...props
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(buttonVariants({ size, color, variant, shape, position, radius }), className)}>
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button }
