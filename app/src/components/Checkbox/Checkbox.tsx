'use client'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

type CheckboxProps = ComponentPropsWithoutRef<typeof Root> & {
  iconClassName?: string
  variant?: 'rounded' | 'circle' | 'default'
}

const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className, iconClassName, children, variant = 'default', ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cn(
          'peer relative h-5 w-5 shrink-0 border border-metal-200 ring-offset-primary-500 focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-500 data-[state=checked]:text-primary-500 dark:border-metal-100 dark:ring-offset-primary-500 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:text-primary-500',
          variant === 'default' && 'data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-500',
          variant !== 'default' &&
            'data-[state=checked]:before:absolute data-[state=checked]:before:left-1/2 data-[state=checked]:before:top-1/2 data-[state=checked]:before:h-2.5 data-[state=checked]:before:w-2.5 data-[state=checked]:before:-translate-x-1/2 data-[state=checked]:before:-translate-y-1/2 data-[state=checked]:before:bg-primary-500 data-[state=checked]:before:content-[""] dark:data-[state=checked]:before:bg-primary-500',
          variant === 'circle' && 'rounded-full data-[state=checked]:before:rounded-full',
          variant !== 'circle' && 'rounded data-[state=checked]:before:rounded-sm',
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
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            )}
          </Indicator>
        )}
      </Root>
    )
  },
)

Checkbox.displayName = Root.displayName

export { Checkbox }
