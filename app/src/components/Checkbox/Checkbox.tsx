'use client'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { checkboxTheme } from './theme'

export type CheckboxProps = ComponentPropsWithoutRef<typeof Root> & {
  iconClassName?: string
  variant?: keyof typeof checkboxTheme.variant
  color?: keyof typeof checkboxTheme.variant.circle.color
}

const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className, iconClassName, children, color = 'primary', variant = 'default', ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        checkboxTheme.base,
        checkboxTheme.variant[variant].base,
        checkboxTheme.variant[variant].color?.[color],
        className,
      )}
      {...props}>
      {variant === 'default' && (
        <Indicator className={cn('flex items-center justify-center text-white', iconClassName)}>
          {children ?? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-current"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
          )}
        </Indicator>
      )}
    </Root>
  ),
)

Checkbox.displayName = Root.displayName

export { Checkbox }
