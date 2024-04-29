'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { NumberInputButton } from './Button'
import { NumberInputBox } from './Input'

const NumberInputComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'relative flex h-11 max-w-xs items-center justify-between overflow-hidden rounded-md border border-metal-100 bg-white px-2 shadow-sm',
          className,
        )}>
        {children}
      </div>
    )
  },
)

NumberInputComponent.displayName = 'NumberInput'

export const NumberInput = Object.assign(NumberInputComponent, {
  Input: NumberInputBox,
  Button: NumberInputButton,
})
