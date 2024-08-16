'use client'
import { Root, Thumb } from '@radix-ui/react-switch'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'

type ComponentProps = ComponentPropsWithoutRef<typeof Root> & {
  thumbClassName?: string
  variant?: 'icon' | 'default'
}

const Switch = forwardRef<ElementRef<typeof Root>, ComponentProps>(
  ({ className, variant = 'default', thumbClassName, ...props }, ref) => (
    <Root
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-900 focus-visible:ring-offset-2 focus-visible:ring-offset-metal-100 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-metal-100 dark:data-[state=unchecked]:bg-metal-800',
        className,
      )}
      {...props}
      ref={ref}>
      <Thumb
        className={cn(
          'pointer-events-none relative block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform before:absolute data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white data-[state=unchecked]:bg-white dark:data-[state=unchecked]:bg-metal-400',
          variant === 'default' &&
            'before:left-1/2 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:transition-colors before:content-[""] data-[state=checked]:before:bg-primary-500 data-[state=unchecked]:before:bg-metal-100',
          variant === 'icon' && 'bg-center bg-no-repeat data-[state=checked]:bg-moon data-[state=unchecked]:bg-sun',
          thumbClassName,
        )}></Thumb>
    </Root>
  ),
)
Switch.displayName = Root.displayName

export { Switch }
